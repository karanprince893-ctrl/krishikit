import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

import { LANG_CODES, SCREENS, THEME_STORAGE_KEY } from './constants';
import { buildViewModel } from './buildViewModel';

const homeForRole = (role) =>
  role === 'urban' ? 'homeUrban' : role === 'vle' ? 'homeVle' : 'home';

const readStoredTheme = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY);
  } catch (e) {
    return null;
  }
};

function resolveTheme(prop) {
  const stored = readStoredTheme();
  if (stored) return stored;
  const p = prop || 'light';
  if (p !== 'system') return p;
  return window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function createInitialState({
  role = 'farmer',
  language = 'en',
  theme = 'light',
}) {
  const L = LANG_CODES.indexOf(language);
  const now = Date.now();
  return {
    screen: 'splash',
    theme: resolveTheme(theme),
    promo: 0,
    role,
    L: L < 0 ? 0 : L,
    cart: {},
    tier: 1,
    payM: 2,
    area: '2.5',
    unit: 'acre',
    crop: 'areca',
    off: {},
    organic: false,
    cap: 34000,
    sheet: false,
    langSheet: false,
    sigs: 0,
    catF: null,
    toast: null,
    why: {},
    cam: null,
    camChk: 0,
    now,
    deadline: now + 66e5,
    rootWhy: false,
    doneMsg: 'orderedS',
    feedTab: 0,
    grp: 0,
    likes: {},
    thread: 0,
    duty: true,
    reqOpen: true,
    tripOn: false,
    svc: 0,
    sp: 0,
    sz: 1,
    sun: 1,
    kit: 0,
    slot: 0,
  };
}

/**
 * App state + actions for the whole prototype (ported from the prototype's `Component` class).
 * Returns the view model that the screens render.
 *
 * `start` mirrors the prototype's "Start state" props: { screen, role, language, theme }.
 */
export function useKrishiKit(start = {}) {
  const [state, setRaw] = useState(() =>
    createInitialState({
      role: start.role,
      language: start.language,
      theme: start.theme,
    }),
  );
  const stateRef = useRef(state);
  stateRef.current = state;

  const vpRef = useRef(null);
  const afterRender = useRef([]);
  const timers = useRef({ list: [], toast: null, splash: null });

  // setState with class-component semantics: shallow merge, optional functional patch, post-commit callback.
  const actions = useMemo(() => {
    const setState = (patch, cb) => {
      setRaw((prev) => ({
        ...prev,
        ...(typeof patch === 'function' ? patch(prev) : patch),
      }));
      if (cb) afterRender.current.push(cb);
    };
    const clearT = () => {
      timers.current.list.forEach(clearTimeout);
      timers.current.list = [];
    };
    const later = (fn, ms) => {
      timers.current.list.push(setTimeout(fn, ms));
    };
    const a = {
      vpRef,
      setState,
      clearT,
      getState: () => stateRef.current,
      homeFor: (r) => homeForRole(r || stateRef.current.role),
      go(s, extra) {
        clearT();
        setState(
          { screen: s, sheet: false, langSheet: false, ...(extra || {}) },
          () => {
            if (vpRef.current) vpRef.current.scrollTop = 0;
          },
        );
        // "Reading…" screens advance on their own.
        if (s === 'soilRead') {
          setState({ sigs: 0 });
          const step = (i) =>
            later(() => {
              setState({ sigs: i });
              if (i < 6) step(i + 1);
              else later(() => a.go('soil'), 600);
            }, 420);
          step(1);
        }
        if (s === 'pestRead') later(() => a.go('pest'), 2000);
        if (s === 'billRead') later(() => a.go('bill'), 2200);
      },
      toast(k) {
        setState({ toast: k });
        clearTimeout(timers.current.toast);
        timers.current.toast = setTimeout(
          () => setState({ toast: null }),
          1900,
        );
      },
      inc(id) {
        setState((s) => ({ cart: { ...s.cart, [id]: (s.cart[id] || 0) + 1 } }));
        a.toast('addedTo');
      },
      dec(id) {
        setState((s) => {
          const c = { ...s.cart };
          c[id] = (c[id] || 0) - 1;
          if (c[id] < 1) delete c[id];
          return { cart: c };
        });
      },
      openCam(mode) {
        clearT();
        setState({ cam: { mode, shot: false }, camChk: 0, sheet: false });
        const t = (i) =>
          later(() => {
            setState({ camChk: i });
            if (i < 3) t(i + 1);
          }, 650);
        t(1);
      },
      // Area keypad
      key(k) {
        setState((st) => {
          let area = st.area;
          if (k === '⌫') area = area.slice(0, -1);
          else if (k === '.' && area.includes('.')) {
            /* only one decimal point */
          } else if (area.length < 5) area = (area === '0' ? '' : area) + k;
          return { area };
        });
      },
    };
    return a;
  }, []);

  // Flush "after setState" callbacks once the new state is committed.
  useLayoutEffect(() => {
    if (afterRender.current.length) {
      const q = afterRender.current;
      afterRender.current = [];
      q.forEach((fn) => fn());
    }
  });

  // Boot: jump to the requested start screen, or play the splash then land.
  useEffect(() => {
    const t = timers.current;
    const sc = start.screen;
    if (sc && sc !== 'landing' && SCREENS.includes(sc)) {
      actions.go(sc === 'home' ? actions.homeFor() : sc);
    } else {
      t.splash = setTimeout(() => {
        if (stateRef.current.screen === 'splash') actions.go('landing');
      }, 4600);
    }
    // Farmer-home clock: drives the countdown and rotates the promo banner.
    const tick = setInterval(() => {
      if (stateRef.current.screen === 'home') {
        const n = Date.now();
        actions.setState((st) => ({
          now: n,
          promo:
            Math.floor(n / 4500) % 3 !== Math.floor(st.now / 4500) % 3
              ? (st.promo + 1) % 3
              : st.promo,
        }));
      }
    }, 1000);
    return () => {
      clearInterval(tick);
      clearTimeout(t.toast);
      clearTimeout(t.splash);
      actions.clearT();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return buildViewModel(state, actions);
}
