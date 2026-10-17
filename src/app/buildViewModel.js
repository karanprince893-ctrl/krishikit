import { KK } from '../data';
import { ART, catArt } from '../components/art';
import { LANGS, LCHIP, NO_HDR, NO_NAV, SCREENS, money, pad } from './constants';

// Total of the plan's input lines for the current tier / organic / switched-off lines.
export function inputsTotal(s) {
  const P = KK.P;
  let t = 0;
  P.slice(0, 8).forEach((p, i) => {
    if (!s.off[i]) t += s.organic && i < 4 ? Math.round(p.p * 1.22) : p.p;
  });
  return s.tier === 0 ? Math.round(t * 0.42) : t;
}

/**
 * Derives everything the screens render (labels, handlers, styles) from the app state.
 * Ported 1:1 from the prototype's `renderVals()`; `act` is the actions object from useKrishiKit.
 */
export function buildViewModel(s, act) {
  const L = s.L,
    tr = (a) => a[L],
    t = {};
  for (const k in KK.D) t[k] = KK.D[k][L];
  const H = act.homeFor(),
    go = {};
  SCREENS.forEach((k) => (go[k] = () => act.go(k)));
  go.home = () => act.go(H);
  const ic = {
    core: { style: { color: 'var(--canopy-core)' } },
    bone: { style: { color: 'var(--earth-bone)' } },
    mist: { style: { color: 'var(--canopy-mist)' } },
    soft: { style: { color: 'var(--canopy-300)' } },
  };
  const selBd = (on) =>
    on ? '2px solid var(--border-focus)' : '1px solid var(--border-default)';
  const selPd = (on) => (on ? '17px' : '18px');
  const chip = (on) => ({
    bd: on ? 'var(--kk-fill)' : 'var(--border-default)',
    bg: on ? 'var(--kk-fill)' : 'var(--surface-card)',
    fg: on ? 'var(--text-inverse)' : 'var(--text-primary)',
  });
  const tog = (on) => ({
    togBg: on ? 'var(--kk-fill)' : 'var(--surface-disabled)',
    x: on ? '23px' : '3px',
  });
  const P = KK.P;
  const cnt = Object.values(s.cart).reduce((a, b) => a + b, 0);
  const val = Object.keys(s.cart).reduce(
    (a, k) => a + P[k - 1].p * s.cart[k],
    0,
  );
  const mrp = Object.keys(s.cart).reduce(
    (a, k) => a + P[k - 1].m * s.cart[k],
    0,
  );
  const card = (p) => {
    const q = s.cart[p.id] || 0,
      d = Math.round((1 - p.p / p.m) * 100);
    return {
      id: p.id,
      ic: p.ic,
      icProps: ic.core,
      n: tr(p.n),
      q: tr(p.q),
      price: money(p.p),
      mrp: money(p.m),
      disc: d + '%',
      hasDisc: d > 5,
      qty: q,
      inCart: q > 0,
      notInCart: !q,
      addL: t.add,
      inc: () => act.inc(p.id),
      dec: () => act.dec(p.id),
      lineTotal: money(p.p * q),
    };
  };
  const d = Math.max(0, s.deadline - s.now);
  const inputs = inputsTotal(s),
    fee = KK.TIERS[s.tier].fee,
    total = inputs + fee,
    upi = s.payM === 0 ? Math.round(inputs * 0.03) : 0;
  const a = parseFloat(s.area) || 0;
  const conv =
    s.unit === 'acre'
      ? (a * 40).toFixed(0) +
        ' gunta · ' +
        (a * 100).toFixed(0) +
        ' cent · ' +
        (a * 0.405).toFixed(2) +
        ' ha'
      : s.unit === 'gunta'
        ? (a / 40).toFixed(2) + ' acre · ' + (a * 2.5).toFixed(0) + ' cent'
        : (a / 100).toFixed(2) + ' acre · ' + (a * 0.4).toFixed(1) + ' gunta';
  const step = (i, doneN, nowI, n, date) => {
    const dn = i < doneN,
      now = i === nowI,
      last = i === 3;
    return {
      i: i + 1,
      n,
      date,
      dotBg: dn ? 'var(--kk-fill)' : 'var(--surface-card)',
      dotBd: dn
        ? 'var(--canopy-core)'
        : now
          ? 'var(--clay-core)'
          : 'var(--border-default)',
      ok: dn,
      line: last
        ? 'transparent'
        : dn
          ? 'var(--canopy-core)'
          : 'var(--border-default)',
      fg: now
        ? 'var(--clay-core)'
        : dn
          ? 'var(--text-primary)'
          : 'var(--text-secondary)',
      pb: last ? '0' : '16px',
    };
  };
  const camMode = s.cam ? s.cam.mode : 'soil',
    ready = s.camChk >= 3;
  const CAM = {
    soil: ['camSoil', 'holdSoil', ['sc1', 'sc2', 'sc3'], 'soilRead'],
    leaf: ['camLeaf', 'holdLeaf', ['lc1', 'lc2', 'lc3'], 'pestRead'],
    bill: ['camBill', 'holdBill', ['bc1', 'bc2', 'bc3'], 'billRead'],
  }[camMode];
  const paid = KK.BILL.reduce((x, b) => x + b.paid, 0),
    fair = KK.BILL.reduce((x, b) => x + b.mkt, 0);
  const camSoil = () => act.openCam('soil'),
    camLeaf = () => act.openCam('leaf'),
    camBill = () => act.openCam('bill');
  const b = (k) => () => act.go(k);
  const prof =
    s.role === 'vle'
      ? { name: 'Ramesh Poojary', init: 'R' }
      : { name: 'Suresh Shetty', init: 'S' };
  const post = (p, i) => ({
    i: p.i,
    a: p.a,
    meta: t[p.g] + ' · ' + p.when,
    t: t[p.t],
    b: t[p.b],
    vr: p.vr,
    rp: p.rp,
    likes: p.lk + (s.likes[i] ? 1 : 0),
    likeFg: s.likes[i] ? 'var(--canopy-core)' : 'var(--text-secondary)',
    like: () =>
      act.setState((st) => ({
        likes: Object.assign({}, st.likes, { [i]: !st.likes[i] }),
      })),
    open: () => act.go('thread', { thread: i }),
  });
  const svc = KK.SVCS[s.svc],
    mat = 2400;
  const reorder = () => {
    act.setState((st) => {
      const c = Object.assign({}, st.cart);
      c[2] = (c[2] || 0) + 1;
      c[3] = (c[3] || 0) + 1;
      return { cart: c };
    });
    act.go('cart');
    act.toast('reorderT');
  };

  const HD = {
    obPhone: ['', '', b('landing')],
    obOtp: ['', '', b('obPhone')],
    obWho: ['', '', b('obOtp')],
    home: [t.village, t.planSub, null, 1],
    homeUrban: [t.garden, t.gardenS, null, 1],
    homeVle: ['Ramesh Poojary', t.village + ' · KK-DP-4417', null, 1],
    shop: [t.shop, '', b(H)],
    cart: [t.cart, cnt + ' ' + t.items, b('shop')],
    feed: [t.feed, t.feedS, null],
    thread: [t.commun, t[KK.POSTS[s.thread].g], b('feed')],
    pb1: [t.newPlan, t.step + ' 1 / 4', b(H)],
    pb2: [t.newPlan, t.step + ' 2 / 4', b('pb1')],
    pb3: [t.newPlan, t.step + ' 3 / 4', b('pb2')],
    pb4: [t.newPlan, t.step + ' 4 / 4', b('pb3')],
    soilRead: [t.yourSoil, '', null],
    soil: [t.yourSoil, t.village, b(H)],
    plan: [t.yourPlan, t.planSub, b(H)],
    adjust: [t.adjH, t.adjS, b('plan')],
    pay: [t.payH, '', b('plan')],
    pestRead: [t.diagnosis, '', null],
    pest: [t.diagnosis, '', b(H)],
    doctor: [t.doctor, t.doctorS, b(H)],
    money: [t.money, t.moneyS, null],
    orders: [t.orders, '', b(s.role === 'farmer' ? 'money' : 'profile')],
    profile: [t.profile, '', b(H)],
    billRead: [t.billT, '', null],
    bill: [t.billT, t.billShop, b(s.role === 'farmer' ? 'money' : H)],
    vleTrip: [t.tripT, s.tripOn ? '#KK-2841 · ₹92' : '', null],
    vleEarn: [t.earnT, '', null],
    services: [t.svcT, '', s.role === 'urban' ? null : b(H)],
    svcBook: [t[svc[0]], '', b('services')],
  };
  const h = HD[s.screen] || ['', '', null];
  const hdr = {
    show: NO_HDR.indexOf(s.screen) < 0,
    title: h[0],
    sub: h[1],
    hasSub: !!h[1],
    back: h[2],
    hasBack: !!h[2],
    avatar: !!h[3],
  };

  const Pb = (l, on, v) => ({ l, on, v: v || 'primary' });
  let c = null;
  switch (s.screen) {
    case 'obPhone':
      c = { p: Pb(t.sendCode, go.obOtp) };
      break;
    case 'obOtp':
      c = { p: Pb(t.cont, go.obWho) };
      break;
    case 'pb1':
      c = { p: Pb(t.useGps, go.pb2) };
      break;
    case 'pb2':
      c = { p: Pb(t.next, go.pb3) };
      break;
    case 'pb3':
      c = { p: Pb(t.next, go.pb4) };
      break;
    case 'pb4':
      c = { p: Pb(t.takePhoto, camSoil), s: Pb(t.skipNow, go.plan, 'ghost') };
      break;
    case 'soil':
      c = { p: Pb(t.buildPlan, go.plan) };
      break;
    case 'plan':
      c = {
        p: Pb(t.acceptPlan, go.pay),
        s: Pb(t.changeIt, go.adjust, 'secondary'),
      };
      break;
    case 'adjust':
      c = { p: Pb(t.acceptPlan, go.pay), total: money(total) };
      break;
    case 'pay':
      c = {
        p: Pb(t.placeOrder, () => act.go('done', { doneMsg: 'orderedS' })),
      };
      break;
    case 'done':
      c = { p: Pb(t.backHome, go.home, 'secondary') };
      break;
    case 'cart':
      if (cnt)
        c = {
          p: Pb(t.checkout + ' · ' + money(val), () =>
            act.go('done', { cart: {}, doneMsg: 'cartDoneMsg' }),
          ),
        };
      break;
    case 'doctor':
      c = {
        p: Pb(t.sendPhoto, camLeaf),
        s: Pb(t.callNow, () => act.toast('calling'), 'secondary'),
      };
      break;
    case 'bill':
      c = {
        p: Pb(t.billReorder, reorder),
        s: Pb(t.billAnother, camBill, 'ghost'),
      };
      break;
    case 'vleTrip':
      if (s.tripOn)
        c = {
          p: Pb(t.completeD, () =>
            act.go('vleDone', { tripOn: false, reqOpen: true }),
          ),
        };
      break;
    case 'vleDone':
      c = { p: Pb(t.backHome, go.home, 'secondary') };
      break;
    case 'svcBook':
      c = { p: Pb(t.bookNow, go.svcDone), total: money(svc[2] + mat) };
      break;
    case 'svcDone':
      c = { p: Pb(t.backHome, go.home, 'secondary') };
      break;
  }
  const cta = c
    ? {
        show: true,
        p: c.p,
        hasS: !!c.s,
        s: c.s || c.p,
        hasTotal: !!c.total,
        totalV: c.total || '',
      }
    : { show: false, p: Pb('', null), s: Pb('', null) };

  const NAV = {
    farmer: [
      ['home', 'home', 'home'],
      ['shop', 'shop', 'basket', 1],
      ['FAB'],
      ['feed', 'feed', 'bell'],
      ['money', 'money', 'wallet'],
    ],
    urban: [
      ['homeUrban', 'home', 'home'],
      ['services', 'services', 'sprout'],
      ['FAB'],
      ['feed', 'feed', 'bell'],
      ['shop', 'shop', 'basket', 1],
    ],
    vle: [
      ['homeVle', 'vleH', 'home'],
      ['vleTrip', 'vleDrops', 'truck'],
      ['vleEarn', 'earnT', 'wallet'],
      ['profile', 'profile', 'user'],
    ],
  }[s.role];
  const nav = NAV.map((n) =>
    n[0] === 'FAB'
      ? { isFab: true, isTab: false }
      : {
          isFab: false,
          isTab: true,
          go: b(n[0]),
          l: t[n[1]],
          on: s.screen === n[0],
          ic: n[2],
          tone: s.screen === n[0] ? 'core' : 'secondary',
          fg:
            s.screen === n[0] ? 'var(--text-primary)' : 'var(--text-secondary)',
          hasBadge: !!n[3] && cnt > 0,
        },
  );

  const langs = LANGS.map((n, i) => {
    const on = s.L === i;
    return {
      n,
      bdDark: on ? 'var(--earth-bone)' : 'var(--earth-bark)',
      bgDark: on ? 'var(--canopy-core)' : 'transparent',
      bd: selBd(on),
      ring: on ? 'var(--canopy-core)' : 'var(--border-default)',
      dot: on ? 'var(--canopy-core)' : 'transparent',
      pick: () => act.setState({ L: i }),
      pickClose: () => act.setState({ L: i, langSheet: false }),
    };
  });

  return {
    screen: s.screen,
    vpRef: act.vpRef,
    theme: s.theme || 'light',
    themeIcon: s.theme === 'dark' ? 'sun' : 'moon',
    themeName: s.theme === 'dark' ? t.dark : t.light,
    themeAria: t.themeL,
    thTog: tog(s.theme === 'dark'),
    toggleTheme: () => {
      const n = act.getState().theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('kk-theme', n);
      } catch (e) {}
      act.setState({ theme: n });
    },
    sb:
      ['splash', 'landing'].indexOf(s.screen) >= 0 || s.cam
        ? { bg: 'var(--surface-dark)', fg: 'var(--text-on-dark-muted)' }
        : { bg: 'var(--surface-canvas)', fg: 'var(--text-secondary)' },
    splashArt: ART.splash(t.splashTag, t.splashLoad),
    heroArt: ART.hero(),
    scanArt: ART.scan(),
    fabRing: ART.halo(),
    logoSm: { style: { zoom: 0.42 } },
    t,
    go,
    ic,
    wide: { style: { width: '100%' } },
    hdr,
    cta,
    nav,
    showNav: NO_NAV.indexOf(s.screen) < 0,
    lchip: LCHIP[L],
    langs,
    openLang: () => act.setState({ langSheet: true }),
    closeLang: () => act.setState({ langSheet: false }),
    langSheet: s.langSheet,
    prof: Object.assign({}, prof, {
      sub: '+91 98765 43210 · ' + t.village,
      landL: s.role === 'vle' ? t.myBase : t.myLand,
      landV:
        s.role === 'farmer'
          ? s.area + ' ' + s.unit + ' · ' + t.village
          : s.role === 'urban'
            ? t.gardenS
            : t.legHub,
      showRefer: s.role !== 'vle',
      row3L: s.role === 'vle' ? t.earnT : t.orders,
      row3S:
        s.role === 'vle'
          ? '₹5,940 · ' + t.thisWeek.toLowerCase()
          : t.arrivingOne,
      row3: s.role === 'vle' ? go.vleEarn : go.orders,
    }),
    langName: LANGS[L],
    roles: [
      ['farmer', 'roleF', 'roleFs', ART.farm],
      ['urban', 'roleU', 'roleUs', ART.balcony],
      ['vle', 'roleV', 'roleVs', ART.partner],
    ].map((r) => ({
      n: t[r[1]],
      s: t[r[2]],
      art: r[3](),
      pick: () => act.go(act.homeFor(r[0]), { role: r[0] }),
    })),
    cd: {
      h: pad(Math.floor(d / 36e5)),
      m: pad(Math.floor(d / 6e4) % 60),
      s: pad(Math.floor(d / 1e3) % 60),
    },
    addBordeaux: () => act.inc(1),
    snooze: () => act.toast('snoozeT'),
    camSoil,
    camLeaf,
    camBill,
    cats: KK.CATS.map((c) =>
      Object.assign(
        { n: tr(c[1]), ic: c[2], pick: () => act.go('shop', { catF: c[0] }) },
        chip(s.catF === c[0]),
      ),
    ),
    allCat: chip(!s.catF),
    clearCat: () => act.setState({ catF: null }),
    shopTitle: s.catF ? tr(KK.CATS.find((c) => c[0] === s.catF)[1]) : t.allP,
    probs: KK.PROBS.map(tr),
    stages: KK.STAGES.map((n, i) => step(i, 1, 1, tr(n), tr(KK.DATES[i]))),
    doneStages: KK.STAGES.map((n, i) => step(i, 0, 0, tr(n), tr(KK.DATES[i]))),
    orderTitle: tr(KK.STAGES[1]),
    earlierTitle: tr(KK.STAGES[0]),
    track: KK.TRACK.map((n, i) => step(i, 2, 2, tr(n), '')),
    rec: [P[1], P[3], P[5], P[6]].map(card),
    deals: [P[0], P[2], P[4], P[7], P[5]].map(card),
    homeCats: KK.CATS.map((c, i) => ({
      n: tr(c[1]),
      k: c[0],
      hasTag: i === 0,
      tag: '−25%',
      pick: () => act.go('shop', { catF: c[0] }),
    }))
      .concat([
        {
          n: t.newPlan,
          k: 'plan',
          hasTag: false,
          tag: '',
          pick: () => act.go('pb1'),
        },
        {
          n: t.allP,
          k: 'all',
          hasTag: false,
          tag: '',
          pick: () => act.go('shop', { catF: null }),
        },
      ])
      .map((c, i) =>
        Object.assign(c, {
          art: catArt(c.k, i),
          bg: [
            'var(--canopy-100)',
            'var(--status-attention)',
            'var(--surface-media)',
          ][i % 3],
        }),
      ),
    promoX: -s.promo * 100 + '%',
    promoDots: [0, 1, 2].map((i) => ({
      l: 'Promo ' + (i + 1),
      w: s.promo === i ? '22px' : '6px',
      bg: s.promo === i ? 'var(--kk-fill)' : 'var(--border-default)',
      pick: () => act.setState({ promo: i }),
    })),
    promos: [
      {
        k: t.pk1,
        t: t.pr1,
        s: t.pr1s,
        cta: t.shopNow,
        ic: 'shield',
        bg: 'var(--clay-core)',
        fg: 'var(--earth-soil)',
        sub: 'var(--earth-soil)',
        ring: 'rgba(26,24,20,.22)',
        chipBg: 'var(--earth-paper)',
        icTone: 'clay',
        tagBg: 'rgba(251,249,244,.55)',
        btnBg: 'var(--earth-soil)',
        btnFg: 'var(--earth-bone)',
        btnTone: 'bone',
        go: () => act.go('shop', { catF: 'c1' }),
      },
      {
        k: t.pk2,
        t: t.o3,
        s: t.o3s,
        cta: t.checkLimit,
        ic: 'wallet',
        bg: 'rgb(31,74,58)',
        fg: 'var(--earth-bone)',
        sub: 'var(--canopy-mist)',
        ring: 'rgba(169,196,181,.35)',
        chipBg: 'var(--earth-bone)',
        icTone: 'rgb(31,74,58)',
        tagBg: 'rgba(169,196,181,.22)',
        btnBg: 'var(--earth-bone)',
        btnFg: 'rgb(31,74,58)',
        btnTone: 'rgb(31,74,58)',
        go: () => act.go('money'),
      },
      {
        k: t.pk3,
        t: t.o2,
        s: t.o2s,
        cta: t.buildPlan,
        ic: 'scan',
        bg: 'var(--surface-media)',
        fg: 'var(--text-primary)',
        sub: 'var(--text-secondary)',
        ring: 'var(--canopy-300)',
        chipBg: 'var(--surface-card)',
        icTone: 'core',
        tagBg: 'var(--surface-card)',
        btnBg: 'var(--action-primary)',
        btnFg: 'var(--text-inverse)',
        btnTone: 'inverse',
        go: () => act.go('pb1'),
      },
    ],
    kitsList: [P[8], P[9], P[3], P[4]].map(card),
    shopList: (s.catF ? P.filter((p) => p.c === s.catF) : P).map(card),
    pestRec: [P[0], P[4]].map(card),
    cartCount: cnt,
    cartValue: money(val),
    cartSave: money(mrp - val),
    hasCart: cnt > 0,
    cartEmpty: !cnt,
    showCartBar:
      cnt > 0 && ['home', 'homeUrban', 'shop', 'pest'].indexOf(s.screen) >= 0,
    cartItems: Object.keys(s.cart).map((k) => card(P[k - 1])),
    doneMsg: t[s.doneMsg],
    doneIsPlan: s.doneMsg === 'orderedS',
    feedTabs: [t.forYou, t.commun].map((l, i) => {
      const on = s.feedTab === i;
      return {
        l,
        bg: on ? 'var(--surface-card)' : 'transparent',
        sh: on ? '0 1px 2px rgba(0,0,0,.07)' : 'none',
        pick: () => act.setState({ feedTab: i }),
      };
    }),
    feedMine: s.feedTab === 0,
    feedCom: s.feedTab === 1,
    rootProps: {
      style: { width: '100%', minHeight: 0, gap: 20 },
      onAction: () => act.toast('movedT'),
      onWhy: () => act.setState((st) => ({ rootWhy: !st.rootWhy })),
    },
    rootWhy: s.rootWhy,
    feed: KK.FEED.map((f, i) => ({
      ic: f.ic,
      k: t[f.k],
      when: f.when === 'today' ? t.today : f.when,
      t: t[f.t],
      b: t[f.b],
      w: t[f.w],
      actL: t[f.act],
      price: !!f.price,
      whyOpen: !!s.why[i],
      toggleWhy: () =>
        act.setState((st) => ({
          why: Object.assign({}, st.why, { [i]: !st.why[i] }),
        })),
      act: () => act.go(f.go),
    })),
    groups: ['g1', 'g2', 'g3', 'g4'].map((g, i) =>
      Object.assign(
        { n: t[g], pick: () => act.setState({ grp: i }) },
        chip(s.grp === i),
      ),
    ),
    posts: KK.POSTS.map(post),
    thread: post(KK.POSTS[s.thread], s.thread),
    areaShow: s.area || '0',
    conv,
    units: ['acre', 'gunta', 'cent'].map((u) =>
      Object.assign(
        { n: u, pick: () => act.setState({ unit: u }) },
        chip(s.unit === u),
      ),
    ),
    keys: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', '⌫'].map(
      (k) => ({ k, press: () => act.key(k) }),
    ),
    crops: KK.CROPS.map((c) => ({
      n: tr(c.n),
      f: tr(c.f),
      s: tr(c.s),
      st: c.st,
      ic: c.ic,
      bd: selBd(s.crop === c.id),
      pd: selPd(s.crop === c.id),
      pick: () => act.setState({ crop: c.id }),
    })),
    sigs: KK.SIGS.map((n, i) => {
      const on = i < s.sigs;
      return {
        t: tr(n),
        dot: on ? 'var(--kk-fill)' : 'var(--surface-disabled)',
        ok: on,
        fg: on ? 'var(--text-primary)' : 'var(--text-secondary)',
      };
    }),
    sigPct: (s.sigs / 6) * 100 + '%',
    soilRows: KK.SOIL.map((r) => ({
      l: tr(r.l),
      v: tr(r.v),
      c: tr(r.c),
      s: r.s,
      why: tr(r.why),
      w: r.p + '%',
      col:
        r.p > 80
          ? 'var(--canopy-core)'
          : r.p > 40
            ? 'var(--canopy-300)'
            : 'var(--clay-core)',
    })),
    labTest: () => act.toast('labBooked'),
    tiers: KK.TIERS.map((x, i) => ({
      n: tr(x.n),
      k: tr(x.k),
      feeS: money(x.fee),
      b: x.b.map(tr),
      rec: i === 1,
      bd: selBd(s.tier === i),
      pd: selPd(s.tier === i),
      pick: () => act.setState({ tier: i }),
    })),
    feeS: money(fee),
    inputsS: money(inputs),
    totalS: money(total),
    dealerSave: [
      `You save ${money(total * 0.11)} vs dealer`,
      `ವ್ಯಾಪಾರಿಗಿಂತ ${money(total * 0.11)} ಉಳಿತಾಯ`,
      `दुकानदार से ${money(total * 0.11)} बचत`,
    ][L],
    org: tog(s.organic),
    toggleOrganic: () => act.setState((st) => ({ organic: !st.organic })),
    cap: s.cap,
    capS: money(s.cap),
    onCap: (e) => act.setState({ cap: +e.target.value }),
    over: inputs > s.cap,
    overText: [
      `Over by ${money(inputs - s.cap)}. Turning off the sprayer and harness saves ₹5,500.`,
      `ಮಿತಿಗಿಂತ ${money(inputs - s.cap)} ಹೆಚ್ಚು. ಸಿಂಪರಣೆ ಯಂತ್ರ ಮತ್ತು ಪಟ್ಟಿ ಆಫ್ ಮಾಡಿದರೆ ₹5,500 ಉಳಿತಾಯ.`,
      `सीमा से ${money(inputs - s.cap)} ज़्यादा। स्प्रेयर और बेल्ट बंद करने से ₹5,500 बचेंगे।`,
    ][L],
    adjItems: P.slice(0, 8).map((p, i) => {
      const on = !s.off[i];
      return Object.assign(
        {
          n: tr(p.n),
          q: tr(p.q),
          price: money(s.organic && i < 4 ? p.p * 1.22 : p.p),
          op: on ? 1 : 0.45,
          toggle: () =>
            act.setState((st) => ({
              off: Object.assign({}, st.off, { [i]: !st.off[i] }),
            })),
        },
        tog(on),
      );
    }),
    payOpts: [0, 1, 2].map((i) => {
      const on = s.payM === i;
      return {
        n: t['pay' + i],
        s: t['pay' + i + 's'],
        bd: selBd(on),
        pd: selPd(on),
        ring: on ? 'var(--canopy-core)' : 'var(--border-default)',
        dot: on ? 'var(--canopy-core)' : 'transparent',
        pick: () => act.setState({ payM: i }),
      };
    }),
    hasUpiDisc: upi > 0,
    upiDisc: money(upi),
    payTotal: money(total - upi),
    isCredit: s.payM === 2,
    repayLine: [
      `Repay ${money(total * 1.077)} by 20 December.`,
      `ಡಿಸೆಂಬರ್ 20ರೊಳಗೆ ${money(total * 1.077)} ಮರುಪಾವತಿಸಿ.`,
      `20 दिसंबर तक ${money(total * 1.077)} चुकाएँ।`,
    ][L],
    applySub: () => act.toast('subSent'),
    reset: () =>
      act.go('landing', {
        cart: {},
        off: {},
        tier: 1,
        payM: 2,
        organic: false,
        why: {},
        rootWhy: false,
        catF: null,
        role: 'farmer',
        tripOn: false,
        reqOpen: true,
        duty: true,
        feedTab: 0,
      }),
    billOver: money(paid - fair),
    billPaid: money(paid),
    billLines: KK.BILL.map((x) => ({
      n: tr(x.n),
      paid: money(x.paid),
      st: x.f === 'up' ? 'lowstock' : x.f === 'ok' ? 'available' : 'reserved',
      lab: x.f === 'up' ? x.d : x.f === 'ok' ? t.billFair : t.billNotNeeded,
    })),
    duty: Object.assign(
      {
        title: s.duty ? t.onDuty : t.offDuty,
        desc: s.duty ? t.onDutyS : t.offDutyS,
        cardBg: s.duty ? 'var(--surface-inverse)' : 'var(--surface-card)',
        fg: s.duty ? 'var(--text-inverse)' : 'var(--text-primary)',
        sub: s.duty ? 'var(--canopy-mist)' : 'var(--text-secondary)',
        toggle: () => act.setState((st) => ({ duty: !st.duty })),
      },
      tog(s.duty),
      s.duty ? { togBg: 'var(--earth-bone)' } : {},
    ),
    reqShow: s.duty && s.reqOpen && !s.tripOn,
    acceptReq: () => act.go('vleTrip', { tripOn: true, reqOpen: false }),
    skipReq: () => {
      act.setState({ reqOpen: false });
      act.toast('reqSkipped');
    },
    sos: () => act.toast('sosToast'),
    earnParts: [
      t.eBase + ' ₹280',
      t.eDist + ' ₹302',
      t.eInc + ' ₹200',
      t.eTip + ' ₹60',
    ],
    tripOn: s.tripOn,
    noTrip: !s.tripOn,
    handItems: KK.HAND.map((x) => ({ n: tr(x[0]), q: x[1] })),
    bars: KK.BARS.map((x) => ({
      h: x[0] + '%',
      d: x[1],
      bg: x[0] === 100 ? 'var(--kk-fill)' : 'var(--canopy-100)',
    })),
    tripLog: KK.TRIPLOG.map((x) => ({ n: x[0], v: x[1], tm: x[2] })),
    watered: () => act.toast('watered'),
    svcs: KK.SVCS.map((x, i) => ({
      n: t[x[0]],
      s: t[x[1]],
      from: t.from + ' ' + money(x[2]),
      ic: x[3],
      pick: () => act.go('svcBook', { svc: i }),
    })),
    svcFee: money(svc[2]),
    matFee: money(mat),
    svcTotal: money(svc[2] + mat),
    spaces: KK.SPACES.map((x, i) =>
      Object.assign(
        { n: tr(x), pick: () => act.setState({ sp: i }) },
        chip(s.sp === i),
      ),
    ),
    sizes: KK.SIZES.map((x, i) =>
      Object.assign(
        { n: tr(x), pick: () => act.setState({ sz: i }) },
        chip(s.sz === i),
      ),
    ),
    suns: KK.SUNS.map((x, i) =>
      Object.assign(
        { n: tr(x), pick: () => act.setState({ sun: i }) },
        chip(s.sun === i),
      ),
    ),
    kitsOpt: KK.KITS.map((x, i) =>
      Object.assign(
        { n: tr(x), pick: () => act.setState({ kit: i }) },
        chip(s.kit === i),
      ),
    ),
    slots: KK.SLOTS.map((x, i) =>
      Object.assign(
        { n: tr(x), pick: () => act.setState({ slot: i }) },
        chip(s.slot === i),
      ),
    ),
    brings: KK.BRINGS.map((x) => ({ n: tr(x[0]), s: t[x[1]] })),
    callG: () => act.toast('calling'),
    sheet: s.sheet,
    openSheet: () => act.setState({ sheet: true }),
    closeSheet: () => act.setState({ sheet: false }),
    scanOpts: [
      ['soil', 'scanSoil', 'scanSoilS', 'scan'],
      ['leaf', 'scanLeaf', 'scanLeafS', 'bug'],
      ['bill', 'camBill', 'billS', 'receipt'],
    ].map((x) => ({
      l: t[x[1]],
      s: t[x[2]],
      ic: x[3],
      on: () => act.openCam(x[0]),
    })),
    camOn: !!s.cam,
    camLive: !!s.cam && !s.cam.shot,
    camShot: !!s.cam && s.cam.shot,
    camTitle: t[CAM[0]],
    camHint: t[CAM[1]],
    camChecks: CAM[2].map((k, i) => {
      const ok = i < s.camChk;
      return {
        t: t[k],
        ok,
        fg: ok ? 'var(--text-inverse)' : 'var(--text-on-dark-muted)',
        bd: ok ? 'var(--earth-bone)' : 'var(--earth-ash)',
        bg: ok ? 'var(--earth-bone)' : 'transparent',
      };
    }),
    camGuide: ready ? 'var(--earth-bone)' : 'var(--earth-ash)',
    camStatus: ready ? t.camReady : t.camChecking,
    shutRing: ready ? 'var(--earth-bone)' : 'var(--earth-ash)',
    shutFill: ready ? 'var(--earth-bone)' : 'var(--earth-bark)',
    shoot: () => {
      if (ready)
        act.setState({ cam: Object.assign({}, s.cam, { shot: true }) });
    },
    retake: () => act.openCam(camMode),
    usePhoto: () => {
      act.setState({ cam: null });
      act.go(CAM[3]);
    },
    closeCam: () => {
      act.clearT();
      act.setState({ cam: null });
    },
    hasToast: !!s.toast,
    toast: s.toast ? t[s.toast] : '',
  };
}
