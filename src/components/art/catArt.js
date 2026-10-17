import React from 'react';
import { h, anim, CONN } from './primitives';

const PAL = {
  C: 'rgb(31,74,58)',
  C6: 'rgb(47,100,80)',
  C3: 'rgb(127,184,154)',
  C1: 'rgb(220,230,223)',
  CL: 'rgb(216,100,60)',
  CLL: 'rgb(229,122,82)',
  P: 'rgb(251,249,244)',
  B: 'rgb(243,239,230)',
  H: 'rgb(217,211,196)',
  A: 'rgb(163,156,142)',
  K: 'rgb(74,63,53)',
  S: 'rgb(26,24,20)',
};
const E = (t, p, ...c) => h(t, p, ...c);
const CATART = (() => {
  const c = PAL,
    sh = E('ellipse', {
      cx: 32,
      cy: 58,
      rx: 17,
      ry: 3,
      fill: 'rgba(26,24,20,.13)',
    });
  const leaf = (x, y, sc, fill, rot) =>
    E('path', {
      d: 'M0 0C0-7 4-10 11-10C11-3 7 0 0 0Z',
      fill,
      transform:
        'translate(' +
        x +
        ' ' +
        y +
        ') rotate(' +
        (rot || 0) +
        ') scale(' +
        sc +
        ')',
    });
  return {
    c1: [
      sh,
      E('rect', { x: 20, y: 24, width: 24, height: 32, rx: 6, fill: c.C }),
      E('path', { d: 'M24 24L26 16H38L40 24Z', fill: c.C6 }),
      E('rect', { x: 26, y: 9, width: 14, height: 8, rx: 2, fill: c.S }),
      E('rect', { x: 39, y: 10, width: 9, height: 4, rx: 1.5, fill: c.S }),
      E('path', { d: 'M29 17l-3 7h4l2-7z', fill: c.K }),
      E('rect', { x: 23, y: 31, width: 18, height: 17, rx: 3, fill: c.P }),
      E('path', {
        d: 'M32 34c2.4 3 4 4.6 4 6.6a4 4 0 0 1-8 0c0-2 1.6-3.6 4-6.6z',
        fill: c.C3,
      }),
      E('circle', { cx: 52, cy: 10, r: 1.7, fill: c.C3 }),
      E('circle', { cx: 55.5, cy: 14, r: 1.3, fill: c.C3 }),
      E('circle', { cx: 54, cy: 6, r: 1.1, fill: c.C3 }),
    ],
    c2: [
      sh,
      E('path', { d: 'M16 20Q14 40 17 56H47Q50 40 48 20Z', fill: c.CL }),
      E('path', { d: 'M16 20L18 12H46L48 20Z', fill: c.CLL }),
      E('path', {
        d: 'M20 15H44',
        stroke: c.P,
        strokeWidth: 1,
        strokeDasharray: '2 2',
      }),
      E('rect', { x: 21, y: 27, width: 22, height: 19, rx: 3, fill: c.P }),
      E(
        'text',
        {
          x: 32,
          y: 37.5,
          textAnchor: 'middle',
          style: { font: '700 7.5px var(--font-mono)' },
          fill: c.S,
        },
        'NPK',
      ),
      E('rect', { x: 25, y: 41, width: 14, height: 2, rx: 1, fill: c.C3 }),
      E('circle', { cx: 11, cy: 56, r: 2.2, fill: c.B }),
      E('circle', { cx: 14.5, cy: 57.5, r: 1.5, fill: c.B }),
      E('circle', { cx: 52, cy: 57, r: 1.7, fill: c.B }),
    ],
    c3: [
      sh,
      E('rect', {
        x: 18,
        y: 10,
        width: 28,
        height: 45,
        rx: 3,
        fill: c.P,
        stroke: c.H,
      }),
      E('path', {
        d: 'M18 13a3 3 0 0 1 3-3h22a3 3 0 0 1 3 3v3H18z',
        fill: c.C3,
      }),
      E('path', {
        d: 'M20 12.5H44',
        stroke: c.P,
        strokeWidth: 0.8,
        strokeDasharray: '1.5 1.5',
      }),
      E('rect', { x: 22, y: 20, width: 20, height: 18, rx: 3, fill: c.C1 }),
      E('path', {
        d: 'M32 36V28',
        stroke: c.C,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      }),
      leaf(32, 30, 0.8, c.C, 0),
      leaf(32, 31, 0.75, c.C6, -160),
      E('rect', { x: 22, y: 41, width: 20, height: 2, rx: 1, fill: c.H }),
      E('ellipse', {
        cx: 26,
        cy: 48,
        rx: 2.4,
        ry: 1.6,
        fill: c.K,
        transform: 'rotate(-20 26 48)',
      }),
      E('ellipse', { cx: 32, cy: 49, rx: 2.4, ry: 1.6, fill: c.K }),
      E('ellipse', {
        cx: 38,
        cy: 48,
        rx: 2.4,
        ry: 1.6,
        fill: c.K,
        transform: 'rotate(20 38 48)',
      }),
    ],
    c4: [
      sh,
      E(
        'g',
        { transform: 'rotate(-32 32 32)' },
        E('rect', { x: 29, y: 36, width: 6, height: 20, rx: 3, fill: c.K }),
        E('rect', { x: 28.5, y: 33, width: 7, height: 4, rx: 1, fill: c.A }),
        E('path', {
          d: 'M32 5C41 11 41 26 36.5 33H27.5C23 26 23 11 32 5Z',
          fill: c.C3,
        }),
        E('path', {
          d: 'M32 9V30',
          stroke: c.C6,
          strokeWidth: 1.3,
          strokeLinecap: 'round',
        }),
      ),
      E(
        'g',
        { transform: 'rotate(30 44 36)' },
        E('rect', { x: 42.5, y: 26, width: 3, height: 24, rx: 1.5, fill: c.A }),
        E('path', {
          d: 'M38 26h11',
          stroke: c.S,
          strokeWidth: 2.4,
          strokeLinecap: 'round',
        }),
        E('path', {
          d: 'M39 26v-5M42 26v-5M45 26v-5M48 26v-5',
          stroke: c.S,
          strokeWidth: 1.6,
          strokeLinecap: 'round',
        }),
      ),
    ],
    c5: [
      sh,
      E('path', { d: 'M7 58Q14 49 23 58Z', fill: c.K }),
      E('path', { d: 'M18 18Q16 38 19 56H45Q48 38 46 18Z', fill: c.C6 }),
      E('path', { d: 'M21 19Q32 11 43 19Z', fill: c.C }),
      E('circle', { cx: 32, cy: 14, r: 2.2, fill: c.K }),
      E('circle', { cx: 32, cy: 36, r: 9.5, fill: c.P }),
      leaf(26.5, 40.5, 1, c.C, 0),
      E('path', {
        d: 'M27.5 39.5L34 33.5',
        stroke: c.P,
        strokeWidth: 1,
        strokeLinecap: 'round',
      }),
    ],
    c6: [
      sh,
      E('path', { d: 'M26 21H38L36.4 31H27.6Z', fill: c.CL }),
      E('path', {
        d: 'M32 21V12',
        stroke: c.C,
        strokeWidth: 1.8,
        strokeLinecap: 'round',
      }),
      leaf(32, 15, 0.85, c.C, -10),
      leaf(32, 18, 0.8, c.C6, -165),
      E('path', {
        d: 'M14 31L20 25H44L50 31Z',
        fill: c.B,
        stroke: c.A,
        strokeWidth: 0.8,
      }),
      E('rect', { x: 14, y: 31, width: 36, height: 24, rx: 2, fill: c.H }),
      E('rect', { x: 20, y: 38, width: 24, height: 9, rx: 2, fill: c.P }),
      E('rect', { x: 23, y: 41.5, width: 18, height: 2, rx: 1, fill: c.C3 }),
    ],
    plan: [
      sh,
      E('rect', {
        x: 14,
        y: 12,
        width: 36,
        height: 43,
        rx: 4,
        fill: c.P,
        stroke: c.H,
      }),
      E('path', {
        d: 'M14 16a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v7H14z',
        fill: c.C,
      }),
      E('rect', { x: 21, y: 7, width: 3.5, height: 9, rx: 1.75, fill: c.K }),
      E('rect', { x: 39.5, y: 7, width: 3.5, height: 9, rx: 1.75, fill: c.K }),
      ...[0, 1, 2].flatMap((r) =>
        [0, 1, 2].map((q) =>
          E('rect', {
            key: 'g' + r + q,
            x: 19 + q * 9.5,
            y: 28 + r * 8,
            width: 6,
            height: 5,
            rx: 1.2,
            fill: r === 1 && q === 1 ? c.CL : c.H,
          }),
        ),
      ),
    ],
    all: [
      sh,
      E('path', {
        d: 'M19 30C19 15 45 15 45 30',
        stroke: c.K,
        strokeWidth: 2.6,
        fill: 'none',
        strokeLinecap: 'round',
      }),
      E('rect', { x: 21, y: 13, width: 8, height: 19, rx: 2.5, fill: c.C }),
      E('rect', { x: 22.5, y: 9, width: 5, height: 5, rx: 1, fill: c.S }),
      E('path', { d: 'M31 30L32 17H43L44 30Z', fill: c.CL }),
      leaf(38, 22, 1.1, c.C6, -40),
      E('path', { d: 'M11 29H53L48.5 55H15.5Z', fill: c.A }),
      E('path', {
        d: 'M14 37H50M15.5 45H48.5',
        stroke: c.B,
        strokeWidth: 1.2,
        opacity: 0.7,
      }),
      E('rect', { x: 9, y: 27, width: 46, height: 5, rx: 2.5, fill: c.K }),
    ],
  };
})();
export const catArt = (k, i) =>
  h(
    'svg',
    {
      viewBox: '0 0 64 64',
      width: '82%',
      height: '82%',
      style: {
        display: 'block',
        overflow: 'visible',
        animation: anim('kkPop', 800, CONN, 120 + i * 70),
      },
    },
    CATART[k].map((el, j) => React.cloneElement(el, { key: j })),
  );
