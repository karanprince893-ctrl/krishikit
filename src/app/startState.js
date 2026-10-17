import { LANG_CODES, SCREENS } from './constants';

const ROLES = ['farmer', 'urban', 'vle'];
const THEMES = ['light', 'dark', 'system'];

// The prototype exposed these as editor props ("Start state"). Here they can be set with
// query params, e.g. /?screen=shop&role=urban&lang=kn&theme=dark. Defaults match the prototype.
export function readStartState(search = window.location.search) {
  const q = new URLSearchParams(search);
  const pick = (key, allowed) =>
    allowed.includes(q.get(key)) ? q.get(key) : undefined;
  return {
    screen: pick('screen', ['landing', ...SCREENS]),
    role: pick('role', ROLES),
    language: pick('lang', LANG_CODES),
    theme: pick('theme', THEMES),
  };
}
