import React from 'react';
import { ICON_PATHS as IP } from '../iconPaths';

export const h = React.createElement;
export const GROW = 'var(--motion-grow-ease)',
  CONN = 'var(--motion-connect-ease)',
  PROG = 'var(--motion-progress-ease)';
export const ip = (k, c, w) =>
  h('path', {
    d: IP[k],
    stroke: c,
    strokeWidth: w || 1.75,
    fill: 'none',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  });
export const icon = (k, size, c) =>
  h(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      style: { display: 'block' },
    },
    ip(k, c),
  );
export const anim = (n, d, e, dl, f) =>
  n + ' ' + d + 'ms ' + e + ' ' + (dl || 0) + 'ms ' + (f || 'both');
export const FB = { transformBox: 'fill-box' };
export const rings = (sizes, color, period) =>
  h(
    'div',
    {
      style: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        width: 0,
        height: 0,
        pointerEvents: 'none',
      },
    },
    sizes.map((s, i) =>
      h('span', {
        key: i,
        style: {
          position: 'absolute',
          left: -s / 2,
          top: -s / 2,
          width: s,
          height: s,
          borderRadius: 999,
          border: '1px solid ' + color,
          animation:
            'kkRing ' +
            period +
            'ms ' +
            PROG +
            ' ' +
            Math.round((i * period) / sizes.length) +
            'ms infinite both',
        },
      }),
    ),
  );
export function mark(size, o) {
  o = o || {};
  const d = o.delay || 0;
  return h(
    'svg',
    {
      width: size,
      height: size,
      viewBox: '0 0 120 120',
      style: { display: 'block', overflow: 'visible' },
    },
    h('rect', {
      x: 25,
      y: 40,
      width: 22.5,
      height: 65,
      rx: 11.25,
      fill: 'var(--earth-bone)',
      style: Object.assign({}, FB, {
        transformOrigin: '50% 100%',
        animation: anim('kkGrowY', 600, GROW, d),
      }),
    }),
    h(
      'g',
      {
        style: Object.assign({}, FB, {
          transformOrigin: '0% 100%',
          animation: anim('kkGrowS', 700, GROW, d + 400),
        }),
      },
      h(
        'g',
        {
          style: Object.assign({}, FB, {
            transformOrigin: '0% 100%',
            animation: o.sway
              ? 'kkSway 4.5s ease-in-out ' + (d + 1400) + 'ms infinite'
              : 'none',
          }),
        },
        h('path', {
          d: 'M36.25 60C36.25 32.5 55 15 95 15C95 45 75 60 36.25 60Z',
          fill: 'var(--sprout-core)',
        }),
      ),
    ),
    h('circle', {
      cx: 82.5,
      cy: 92.5,
      r: 12.5,
      fill: 'var(--clay-core)',
      style: Object.assign({}, FB, {
        transformOrigin: '50% 50%',
        animation: anim('kkPop', 800, CONN, d + 950),
      }),
    }),
  );
}
export const sproutAt = (x, y, sc, i) =>
  h(
    'g',
    { key: 's' + x, transform: 'translate(' + x + ' ' + y + ')' },
    h(
      'g',
      {
        style: Object.assign({}, FB, {
          transformOrigin: '50% 100%',
          animation: anim('kkGrowY', 700, GROW, 200 + i * 140),
        }),
      },
      h(
        'g',
        {
          style: Object.assign({}, FB, {
            transformOrigin: '50% 100%',
            animation:
              'kkSway 3.6s ease-in-out ' + (1100 + i * 230) + 'ms infinite',
          }),
        },
        h(
          'g',
          { transform: 'scale(' + sc + ')' },
          ip('sprout', 'var(--canopy-core)', 1.5),
        ),
      ),
    ),
  );
