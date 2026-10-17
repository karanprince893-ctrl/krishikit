import React from 'react';
import {
  h,
  anim,
  rings,
  mark,
  sproutAt,
  icon,
  ip,
  FB,
  GROW,
  CONN,
  PROG,
} from './primitives';

// Decorative animated illustrations (splash, landing hero, role cards, scan, FAB halo).
export const ART = {
  splash: (tag, sub) => {
    const rise = (d) => ({
      transformBox: 'fill-box',
      animation: anim('kkRise', 900, GROW, d),
    });
    const sp = (x, y, sc, i, col) =>
      h(
        'g',
        { key: 'sp' + x + y, transform: 'translate(' + x + ' ' + y + ')' },
        h(
          'g',
          {
            style: Object.assign({}, FB, {
              transformOrigin: '50% 100%',
              animation: anim('kkGrowY', 700, GROW, 900 + i * 110),
            }),
          },
          h(
            'g',
            {
              style: Object.assign({}, FB, {
                transformOrigin: '50% 100%',
                animation:
                  'kkSway 3.8s ease-in-out ' + (1700 + i * 190) + 'ms infinite',
              }),
            },
            h('g', { transform: 'scale(' + sc + ')' }, ip('sprout', col, 1.6)),
          ),
        ),
      );
    const motes = [
      [40, 8, 0],
      [92, 5, 1400],
      [150, 7, 600],
      [210, 4, 2100],
      [268, 6, 300],
      [318, 5, 1700],
      [356, 7, 900],
      [120, 4, 2600],
      [240, 6, 1100],
    ];
    return h(
      React.Fragment,
      null,
      h(
        'div',
        {
          style: {
            position: 'absolute',
            left: '50%',
            top: '34%',
            width: 0,
            height: 0,
            pointerEvents: 'none',
          },
        },
        [260, 380, 500].map((d, k) =>
          h('span', {
            key: k,
            style: {
              position: 'absolute',
              left: -d / 2,
              top: -d / 2,
              width: d,
              height: d,
              borderRadius: 999,
              border: '1px solid rgba(169,196,181,.28)',
              animation:
                'kkRing 4200ms ' + PROG + ' ' + k * 1400 + 'ms infinite both',
            },
          }),
        ),
      ),
      h(
        'div',
        {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: '38%',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px 0',
          },
        },
        h(
          'div',
          { style: { width: 'min(150px, 22vh)', aspectRatio: '1' } },
          mark('100%', { delay: 150, sway: true }),
        ),
        h(
          'div',
          {
            style: {
              marginTop: 22,
              font: '700 clamp(36px, 7vh, 52px)/1 var(--font-display)',
              letterSpacing: '-2.2px',
              color: 'var(--earth-bone)',
              animation: anim('kkFadeUp', 700, GROW, 1150),
            },
          },
          'krishikit',
        ),
        h(
          'div',
          {
            style: {
              marginTop: 12,
              font: '500 11px/1.4 var(--font-mono)',
              letterSpacing: '1.4px',
              color: 'var(--canopy-mist)',
              animation: anim('kkFade', 700, GROW, 1500),
            },
          },
          tag,
        ),
      ),
      h(
        'div',
        {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '38%',
          },
        },
        h(
          'div',
          {
            style: {
              position: 'absolute',
              right: 40,
              top: -18,
              zIndex: 0,
              animation: anim('kkSunUp', 1200, GROW, 500),
            },
          },
          h(
            'div',
            { style: { position: 'relative', width: 40, height: 40 } },
            h('span', {
              style: {
                position: 'absolute',
                inset: -9,
                borderRadius: 999,
                border: '1.5px solid rgba(216,100,60,.5)',
                animation: 'kkHalo 2400ms ' + PROG + ' 1600ms infinite',
              },
            }),
            h('span', {
              style: {
                position: 'absolute',
                inset: 0,
                borderRadius: 999,
                background: 'var(--clay-core)',
              },
            }),
          ),
        ),
        h(
          'svg',
          {
            viewBox: '0 60 390 240',
            preserveAspectRatio: 'xMidYMax slice',
            style: {
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              overflow: 'visible',
            },
          },
          motes.map((m, k) =>
            h('circle', {
              key: 'm' + k,
              cx: m[0],
              cy: 150,
              r: m[1] / 3,
              fill: k % 3 === 0 ? 'var(--sprout-core)' : 'var(--canopy-mist)',
              style: {
                animation:
                  'kkDrift 5200ms ease-out ' +
                  (1600 + m[2]) +
                  'ms infinite both',
              },
            }),
          ),
          h('path', {
            d: 'M0 130 Q90 78 190 112 T390 92 V300 H0Z',
            fill: 'rgb(47,100,80)',
            style: rise(250),
          }),
          h(
            'g',
            { style: rise(250) },
            [
              [56, 104],
              [116, 96],
              [250, 104],
              [330, 90],
            ].map((p, k) =>
              sp(p[0] - 14, p[1] - 30, 1.15, k, 'var(--canopy-mist)'),
            ),
          ),
          h('path', {
            d: 'M0 190 Q120 140 236 176 T390 166 V300 H0Z',
            fill: 'var(--canopy-800)',
            style: rise(420),
          }),
          h(
            'g',
            { style: rise(420) },
            [
              [34, 182],
              [90, 166],
              [150, 160],
              [208, 170],
              [290, 174],
              [356, 166],
            ].map((p, k) =>
              sp(p[0] - 17, p[1] - 38, 1.45, k + 4, 'var(--sprout-core)'),
            ),
          ),
          h('path', {
            d: 'M0 240 Q195 214 390 240 V300 H0Z',
            fill: 'var(--earth-soil)',
            style: rise(600),
          }),
          h(
            'g',
            { style: rise(600) },
            [0, 1, 2].map((k) =>
              h('path', {
                key: 'f' + k,
                d:
                  'M-10 ' +
                  (256 + k * 14) +
                  ' Q195 ' +
                  (236 + k * 14) +
                  ' 400 ' +
                  (256 + k * 14),
                stroke: 'var(--earth-bark)',
                strokeWidth: 1.5,
                strokeDasharray: '2 8',
                strokeLinecap: 'round',
                fill: 'none',
              }),
            ),
          ),
        ),
      ),
      h(
        'div',
        {
          style: {
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 26,
            zIndex: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            animation: anim('kkFade', 600, GROW, 1700),
          },
        },
        h(
          'div',
          {
            style: {
              width: 132,
              height: 4,
              borderRadius: 999,
              background: 'rgba(243,239,230,.18)',
              overflow: 'hidden',
            },
          },
          h('div', {
            style: {
              width: '100%',
              height: '100%',
              borderRadius: 999,
              background: 'var(--sprout-core)',
              transformOrigin: '0 50%',
              animation: anim('kkBar', 2600, PROG, 1700),
            },
          }),
        ),
        h(
          'div',
          {
            style: {
              font: '500 10.5px/1 var(--font-mono)',
              letterSpacing: '1.2px',
              color: 'var(--earth-ash)',
            },
          },
          sub,
        ),
      ),
    );
  },
  hero: () => {
    const chip = (k, pos, d) =>
      h(
        'div',
        {
          key: k,
          style: Object.assign(
            { position: 'absolute', animation: anim('kkPop', 800, CONN, d) },
            pos,
          ),
        },
        h(
          'div',
          {
            style: {
              width: 48,
              height: 48,
              borderRadius: 999,
              background: 'var(--surface-card)',
              display: 'grid',
              placeItems: 'center',
              animation:
                'kkFloat ' +
                (3000 + d) +
                'ms ease-in-out ' +
                (d + 800) +
                'ms infinite',
            },
          },
          icon(k, 22, 'var(--canopy-core)'),
        ),
      );
    return h(
      'div',
      { style: { position: 'absolute', inset: 0 } },
      h(
        'svg',
        {
          width: '100%',
          height: '100%',
          style: {
            position: 'absolute',
            inset: 0,
            overflow: 'visible',
            animation: anim('kkFade', 900, GROW, 1300),
          },
        },
        h('path', {
          d: 'M52 70 C90 34 118 34 144 44 C230 70 300 130 356 186 M70 178 C110 206 140 214 174 218 C240 224 300 206 356 186',
          stroke: 'var(--earth-bark)',
          strokeWidth: 1.5,
          strokeDasharray: '2 7',
          strokeLinecap: 'round',
          fill: 'none',
        }),
      ),
      h(
        'div',
        {
          style: {
            position: 'absolute',
            right: -50,
            top: 0,
            width: 240,
            height: 240,
          },
        },
        rings([210, 300, 390], 'var(--earth-bark)', 4200),
        h(
          'div',
          { style: { position: 'absolute', inset: 0 } },
          mark(240, { delay: 200, sway: true }),
        ),
      ),
      chip('droplet', { left: 28, top: 46 }, 700),
      chip('sun', { left: 120, top: 20 }, 850),
      chip('basket', { left: 46, top: 154 }, 1000),
      chip('mapPin', { left: 150, top: 194 }, 1150),
    );
  },
  farm: () =>
    h(
      'svg',
      {
        viewBox: '0 0 300 124',
        width: '100%',
        height: '100%',
        preserveAspectRatio: 'xMidYMid slice',
      },
      h(
        'g',
        { transform: 'translate(240 14)' },
        h(
          'g',
          {
            style: Object.assign({}, FB, {
              transformOrigin: '50% 50%',
              animation: 'kkSpin 20s linear infinite',
            }),
          },
          h(
            'g',
            { transform: 'scale(1.4)' },
            ip('sun', 'var(--canopy-300)', 1.4),
          ),
        ),
      ),
      [0, 1, 2].map((i) =>
        h('path', {
          key: 'r' + i,
          d: 'M' + (10 - i * 12) + ' ' + (96 + i * 11) + 'H' + (290 + i * 12),
          stroke: 'var(--earth-husk)',
          strokeWidth: 2.5,
          strokeLinecap: 'round',
        }),
      ),
      [34, 82, 130, 178, 226].map((x, i) => sproutAt(x, 60, 1.45, i)),
    ),
  balcony: () =>
    h(
      'svg',
      {
        viewBox: '0 0 300 124',
        width: '100%',
        height: '100%',
        preserveAspectRatio: 'xMidYMid slice',
      },
      h('path', {
        d: 'M10 76H290 M10 112H290',
        stroke: 'var(--earth-husk)',
        strokeWidth: 3,
        strokeLinecap: 'round',
      }),
      Array.from({ length: 14 }, (_, i) =>
        h('path', {
          key: 'b' + i,
          d: 'M' + (20 + i * 20) + ' 76V112',
          stroke: 'var(--earth-husk)',
          strokeWidth: 1.5,
        }),
      ),
      [100, 196].map((x, i) =>
        h(
          'g',
          { key: 'p' + x },
          sproutAt(x - 17, 38, 1.4, i),
          h('path', {
            d: 'M' + (x - 22) + ' 72h44l-5 34h-34z',
            fill: 'var(--canopy-core)',
          }),
          h('path', {
            d: 'M' + (x - 25) + ' 72h50',
            stroke: 'var(--canopy-600)',
            strokeWidth: 5,
            strokeLinecap: 'round',
          }),
        ),
      ),
      h(
        'g',
        { transform: 'translate(189 6)' },
        h(
          'g',
          { style: { animation: 'kkDrop 2.4s ease-in 900ms infinite both' } },
          h(
            'g',
            { transform: 'scale(0.6)' },
            ip('droplet', 'var(--canopy-600)', 2.2),
          ),
        ),
      ),
    ),
  partner: () => {
    const R = 'M40 92 C100 18 200 128 262 40';
    return h(
      'svg',
      {
        viewBox: '0 0 300 124',
        width: '100%',
        height: '100%',
        preserveAspectRatio: 'xMidYMid slice',
      },
      h('path', {
        d: R,
        stroke: 'var(--canopy-300)',
        strokeWidth: 2.5,
        strokeDasharray: '1 9',
        strokeLinecap: 'round',
        fill: 'none',
      }),
      h('circle', { cx: 40, cy: 92, r: 9, fill: 'var(--canopy-core)' }),
      h('circle', {
        cx: 262,
        cy: 40,
        r: 18,
        fill: 'none',
        stroke: 'var(--clay-core)',
        strokeWidth: 1.5,
        style: Object.assign({}, FB, {
          transformOrigin: '50% 50%',
          animation: 'kkHalo 1.8s ' + PROG + ' infinite',
        }),
      }),
      h('circle', { cx: 262, cy: 40, r: 9, fill: 'var(--clay-core)' }),
      h(
        'g',
        {
          style: {
            offsetPath: "path('" + R + "')",
            offsetRotate: '0deg',
            animation: 'kkTravel 3.4s ' + PROG + ' 300ms infinite both',
          },
        },
        h('circle', {
          r: 17,
          fill: 'var(--earth-paper)',
          stroke: 'var(--earth-husk)',
          strokeWidth: 1,
        }),
        h(
          'g',
          { transform: 'translate(-10 -10) scale(0.84)' },
          ip('truck', 'var(--canopy-core)', 1.9),
        ),
      ),
    );
  },
  scan: () =>
    h(
      React.Fragment,
      null,
      rings([110, 190, 270], 'var(--canopy-300)', 2400),
      h(
        'div',
        { style: { animation: 'kkFloat 2.4s ease-in-out infinite' } },
        icon('leaf', 38, 'var(--canopy-core)'),
      ),
    ),
  halo: () =>
    h('span', {
      style: {
        position: 'absolute',
        inset: -4,
        borderRadius: 999,
        border: '2px solid var(--sprout-core)',
        animation: 'kkHalo 2400ms ' + PROG + ' 600ms infinite',
        pointerEvents: 'none',
      },
    }),
};
