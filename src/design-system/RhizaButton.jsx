// Rhiza design system — ported from the prototype's compiled design-system bundle
// (components/actions/RhizaButton.jsx, generated from Figma).
import React from 'react';

function _extends() {
  return (
    (_extends = Object.assign
      ? Object.assign.bind()
      : function (n) {
          for (var e = 1; e < arguments.length; e++) {
            var t = arguments[e];
            for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
          }
          return n;
        }),
    _extends.apply(null, arguments)
  );
}
// figma: Rhiza/Button (3:6047) — Variant × Size. Hanken 14/600 · radius 14 · insets 14/18/24.
const RZ_BUTTON_SIZES = {
  sm: {
    height: 36,
    padding: '0px 14px',
  },
  md: {
    height: 46,
    padding: '0px 18px',
  },
  lg: {
    height: 52,
    padding: '0px 24px',
  },
};
const RZ_BUTTON_VARIANTS = {
  primary: {
    bg: 'var(--action-primary)',
    hover: 'var(--action-hover)',
    fg: 'var(--text-inverse)',
    border: null,
  },
  secondary: {
    bg: 'var(--surface-card)',
    hover: 'var(--surface-canvas)',
    fg: 'var(--canopy-core)',
    border: '1.5px solid var(--border-default)',
  },
  signal: {
    bg: 'var(--connection-accent)',
    hover: 'var(--clay-light)',
    fg: 'var(--text-primary)',
    border: null,
  },
  inverse: {
    bg: 'var(--surface-canvas)',
    hover: 'var(--surface-card)',
    fg: 'var(--canopy-core)',
    border: null,
  },
  ghost: {
    bg: 'rgba(0,0,0,0)',
    hover: 'rgba(31,74,58,0.06)',
    fg: 'var(--canopy-core)',
    border: null,
  },
};
function RhizaButton({
  label,
  children,
  variant = 'primary',
  size = 'sm',
  disabled = false,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
  className,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = RZ_BUTTON_VARIANTS[variant] || RZ_BUTTON_VARIANTS.primary;
  const s = RZ_BUTTON_SIZES[size] || RZ_BUTTON_SIZES.sm;
  const bg = disabled ? 'var(--surface-disabled)' : hover ? v.hover : v.bg;
  return /*#__PURE__*/ React.createElement(
    'button',
    _extends(
      {
        type: type,
        className: className,
        disabled: disabled,
        onClick: onClick,
        onMouseEnter: () => setHover(true),
        onMouseLeave: () => setHover(false),
        style: {
          height: s.height,
          padding: s.padding,
          borderRadius: 14,
          backgroundColor: bg,
          border: v.border || 'none',
          display: 'inline-flex',
          flexDirection: 'row',
          gap: 10,
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box',
          cursor: disabled ? 'not-allowed' : 'pointer',
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '21px',
          whiteSpace: 'nowrap',
          color: disabled ? 'var(--text-disabled)' : v.fg,
          transition: 'background-color 160ms var(--motion-grow-ease)',
          ...style,
        },
      },
      rest,
    ),
    iconLeft,
    /*#__PURE__*/ React.createElement(
      'span',
      null,
      children ?? label ?? 'Add to basket',
    ),
    iconRight,
  );
}

export default RhizaButton;
export { RhizaButton };
