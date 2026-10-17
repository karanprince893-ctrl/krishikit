// Every screen id the app can show (also the keys of `go` in the view model).
export const SCREENS = [
  'splash',
  'landing',
  'obPhone',
  'obOtp',
  'obWho',
  'home',
  'homeUrban',
  'homeVle',
  'shop',
  'cart',
  'feed',
  'thread',
  'pb1',
  'pb2',
  'pb3',
  'pb4',
  'soilRead',
  'soil',
  'plan',
  'adjust',
  'pay',
  'done',
  'pestRead',
  'pest',
  'doctor',
  'money',
  'orders',
  'profile',
  'billRead',
  'bill',
  'vleTrip',
  'vleDone',
  'vleEarn',
  'services',
  'svcBook',
  'svcDone',
];

// Screens that hide the bottom navigation.
export const NO_NAV = [
  'splash',
  'landing',
  'obPhone',
  'obOtp',
  'obWho',
  'soilRead',
  'pestRead',
  'billRead',
  'done',
  'vleDone',
  'svcDone',
  'pb1',
  'pb2',
  'pb3',
  'pb4',
];

// Screens that hide the shared header.
export const NO_HDR = [
  'splash',
  'landing',
  'home',
  'done',
  'vleDone',
  'svcDone',
];

// Language order matches the [en, kn, hi] arrays in src/data/copy.js.
export const LANGS = ['English', 'ಕನ್ನಡ', 'हिंदी'];
export const LCHIP = ['EN', 'ಕ', 'हि'];
export const LANG_CODES = ['en', 'kn', 'hi'];

export const THEME_STORAGE_KEY = 'kk-theme';

export const money = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
export const pad = (n) => String(n).padStart(2, '0');
