// Rhiza design system — ported from the prototype's compiled design-system bundle
// (components/feedback/RhizaBadge.jsx, generated from Figma).
import React from 'react';

// figma: Rhiza/Badge (3:6049) — Status. Hanken 13/600 · radius 8 · inset 6/12. Text carries the meaning.
const RZ_BADGE = {
  available: {
    bg: 'var(--status-available)',
    fg: 'var(--canopy-core)',
    text: 'Available',
  },
  reserved: {
    bg: 'var(--surface-canvas)',
    fg: 'var(--text-secondary)',
    text: 'Reserved',
  },
  lowstock: {
    bg: 'var(--status-attention)',
    fg: 'var(--text-secondary)',
    text: 'Low stock',
  },
  unavailable: {
    bg: 'var(--surface-disabled)',
    fg: 'var(--text-secondary)',
    text: 'Unavailable',
  },
  local: {
    bg: 'var(--surface-canvas)',
    fg: 'var(--canopy-core)',
    text: '38 km away',
  },
  root: {
    bg: 'var(--root-surface)',
    fg: 'var(--root-text)',
    text: 'Root suggestion',
  },
};
function RhizaBadge({
  status = 'available',
  label,
  children,
  className,
  style,
}) {
  const b = RZ_BADGE[status] || RZ_BADGE.available;
  return /*#__PURE__*/ React.createElement(
    'span',
    {
      className: className,
      style: {
        display: 'inline-flex',
        width: 'fit-content',
        borderRadius: 8,
        backgroundColor: b.bg,
        padding: '6px 12px',
        boxSizing: 'border-box',
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 13,
        lineHeight: '19.5px',
        whiteSpace: 'nowrap',
        color: b.fg,
        ...style,
      },
    },
    children ?? label ?? b.text,
  );
}

export default RhizaBadge;
export { RhizaBadge };
