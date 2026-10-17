// Rhiza design system — ported from the prototype's compiled design-system bundle
// (components/forms/RhizaInput.jsx, generated from Figma).
import React from 'react';

// figma: Rhiza/Input (3:6048) — State. Label + 52px field + helper. Radius 14 · border 1.5 / focus 2.
function RhizaInput({
  label = 'Farm name',
  placeholder = 'Enter farm name',
  helper = 'The name buyers will see.',
  error,
  state,
  value,
  defaultValue,
  onChange,
  disabled,
  type = 'text',
  id,
  width = 260,
  className,
  style,
}) {
  const [focused, setFocused] = React.useState(false);
  const isDisabled = disabled || state === 'disabled';
  const isError = !!error || state === 'error';
  const isFocus = !isDisabled && (state === 'focus' || focused);
  const border = isDisabled
    ? '1.5px solid var(--border-default)'
    : isError
      ? '2px solid var(--connection-accent)'
      : isFocus
        ? '2px solid var(--border-focus)'
        : '1.5px solid var(--border-default)';
  const muted = isDisabled ? 'var(--text-disabled)' : 'var(--text-secondary)';
  const autoId = React.useId ? React.useId() : undefined;
  const inputId = id || autoId;
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: className,
      style: {
        width,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'flex-start',
        ...style,
      },
    },
    /*#__PURE__*/ React.createElement(
      'label',
      {
        htmlFor: inputId,
        style: {
          fontFamily: 'var(--font-body)',
          fontWeight: 600,
          fontSize: 14,
          lineHeight: '100%',
          color: isDisabled ? 'var(--text-disabled)' : 'var(--text-primary)',
        },
      },
      label,
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          height: 52,
          alignSelf: 'stretch',
          borderRadius: 14,
          backgroundColor: isDisabled
            ? 'var(--surface-disabled)'
            : 'var(--surface-card)',
          border,
          display: 'flex',
          alignItems: 'center',
          padding: '0px 16px',
          boxSizing: 'border-box',
        },
      },
      /*#__PURE__*/ React.createElement('input', {
        id: inputId,
        type: type,
        value: value,
        defaultValue: defaultValue,
        onChange: onChange,
        disabled: isDisabled,
        placeholder: placeholder,
        onFocus: () => setFocused(true),
        onBlur: () => setFocused(false),
        style: {
          flex: 1,
          minWidth: 0,
          border: 'none',
          outline: 'none',
          background: 'transparent',
          padding: 0,
          fontFamily: 'var(--font-body)',
          fontWeight: 400,
          fontSize: 17,
          lineHeight: '27.2px',
          color: isDisabled ? 'var(--text-disabled)' : 'var(--text-primary)',
        },
      }),
    ),
    (error || helper) &&
      /*#__PURE__*/ React.createElement(
        'span',
        {
          style: {
            alignSelf: 'stretch',
            fontFamily: 'var(--font-body)',
            fontWeight: 400,
            fontSize: 13,
            lineHeight: '19.5px',
            color: muted,
          },
        },
        error || helper,
      ),
  );
}

export default RhizaInput;
export { RhizaInput };
