// Rhiza design system — ported from the prototype's compiled design-system bundle
// (components/cards/RhizaCardRoot.jsx, generated from Figma).
import React from 'react';

// figma node: 3:5983 Rhiza/Card/Root
function RhizaCardRoot(_p = {}) {
  const props = {
    ..._p,
    text1: _p.title ?? _p.text1,
    text2: _p.timestamp ?? _p.text2,
    text3: _p.suggestion ?? _p.text3,
    text4: _p.actionLabel ?? _p.text4,
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: props.className,
      style: {
        width: 400,
        minHeight: 424,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'var(--root-surface)',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        padding: '22px 22px 22px 22px',
        alignItems: 'flex-start',
        flexWrap: 'nowrap',
        boxSizing: 'border-box',
        position: 'relative',
        ...props.style,
      },
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          gap: 12,
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexShrink: 0,
          alignSelf: 'stretch',
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            width: 40,
            height: 40,
            overflow: 'hidden',
            borderRadius: 999,
            backgroundColor: 'var(--surface-inverse)',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'nowrap',
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement(
          'div',
          {
            style: {
              position: 'relative',
              width: 20,
              height: 20,
              overflow: 'hidden',
              flexShrink: 0,
            },
          },
          /*#__PURE__*/ React.createElement(
            'svg',
            {
              width: 0,
              height: 7.5,
              viewBox: '0 0 0 7.500',
              fill: 'none',
              style: {
                position: 'absolute',
                left: 5.834,
                top: 10,
                width: 0.00009999999747378752,
                height: 7.5,
                color: 'var(--sprout-core)',
              },
            },
            /*#__PURE__*/ React.createElement('path', {
              d: 'M -0.729 7.5 C -0.729 7.903 -0.403 8.229 0 8.229 C 0.403 8.229 0.729 7.903 0.729 7.5 L 0 7.5 L -0.729 7.5 Z M 0.729 0 C 0.729 -0.403 0.403 -0.729 0 -0.729 C -0.403 -0.729 -0.729 -0.403 -0.729 0 L 0 0 L 0.729 0 Z M 0 7.5 L 0.729 7.5 L 0.729 0 L 0 0 L -0.729 0 L -0.729 7.5 L 0 7.5 Z',
              fill: 'currentColor',
              fillRule: 'nonzero',
            }),
          ),
          /*#__PURE__*/ React.createElement(
            'svg',
            {
              width: 10,
              height: 8.332,
              viewBox: '0 0 10 8.332',
              fill: 'none',
              style: {
                position: 'absolute',
                left: 5.834,
                top: 3.334,
                width: 10,
                height: 8.332,
                color: 'var(--sprout-core)',
              },
            },
            /*#__PURE__*/ React.createElement('path', {
              d: 'M 0 8.332 L -0.729 8.332 L -0.729 9.061 L 0 9.061 L 0 8.332 Z M 10 0 L 10.729 0 L 10.729 -0.729 L 10 -0.729 L 10 0 Z M 0 8.332 L 0.729 8.332 C 0.729 6.002 1.5 4.135 2.98 2.84 C 4.473 1.534 6.78 0.729 10 0.729 L 10 0 L 10 -0.729 C 6.553 -0.729 3.86 0.132 2.02 1.743 C 0.167 3.364 -0.729 5.663 -0.729 8.332 L 0 8.332 Z M 10 0 L 9.271 0 C 9.271 2.33 8.5 4.197 7.02 5.492 C 5.527 6.798 3.22 7.603 0 7.603 L 0 8.332 L 0 9.061 C 3.447 9.061 6.14 8.2 7.98 6.589 C 9.833 4.968 10.729 2.669 10.729 0 L 10 0 Z',
              fill: 'currentColor',
              fillRule: 'nonzero',
            }),
          ),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            flexGrow: 1,
          },
        },
        /*#__PURE__*/ React.createElement(
          'span',
          {
            style: {
              position: 'relative',
              fontFamily:
                '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
              fontSize: 20,
              whiteSpace: 'nowrap',
              lineHeight: '30px',
              color: 'var(--text-primary)',
              flexShrink: 0,
            },
          },
          props.text1 ?? 'Root suggests',
        ),
        /*#__PURE__*/ React.createElement(
          'span',
          {
            style: {
              position: 'relative',
              fontFamily:
                '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontSize: 11,
              whiteSpace: 'nowrap',
              lineHeight: '16.500px',
              color: 'var(--root-text)',
              flexShrink: 0,
            },
          },
          props.text2 ?? 'just now',
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            width: 20,
            height: 20,
            overflow: 'hidden',
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement(
          'svg',
          {
            width: 14.168,
            height: 16.668,
            viewBox: '0 0 14.168 16.668',
            fill: 'none',
            style: {
              position: 'absolute',
              left: 4.166,
              top: 1.666,
              width: 14.168,
              height: 16.668,
              color: 'var(--earth-soil)',
            },
          },
          /*#__PURE__*/ React.createElement('path', {
            d: 'M 5.834 0 L 6.529 -0.223 L 5.834 -2.39 L 5.139 -0.223 L 5.834 0 Z M 7.251 4.417 L 6.556 4.64 L 6.67 4.997 L 7.028 5.112 L 7.251 4.417 Z M 11.668 5.834 L 11.891 6.529 L 14.058 5.834 L 11.891 5.139 L 11.668 5.834 Z M 7.251 7.251 L 7.028 6.555 L 6.67 6.67 L 6.556 7.028 L 7.251 7.251 Z M 5.834 11.668 L 5.139 11.891 L 5.834 14.058 L 6.529 11.891 L 5.834 11.668 Z M 4.417 7.251 L 5.112 7.028 L 4.998 6.67 L 4.64 6.555 L 4.417 7.251 Z M 0 5.834 L -0.223 5.139 L -2.39 5.834 L -0.223 6.529 L 0 5.834 Z M 4.417 4.417 L 4.64 5.112 L 4.998 4.997 L 5.112 4.64 L 4.417 4.417 Z M 11.668 11.668 L 12.354 11.418 L 11.668 9.532 L 10.982 11.418 L 11.668 11.668 Z M 12.334 13.501 L 11.648 13.751 L 11.765 14.071 L 12.085 14.187 L 12.334 13.501 Z M 14.168 14.168 L 14.417 14.854 L 16.304 14.168 L 14.417 13.482 L 14.168 14.168 Z M 12.334 14.835 L 12.085 14.148 L 11.765 14.265 L 11.648 14.585 L 12.334 14.835 Z M 11.668 16.668 L 10.982 16.917 L 11.668 18.804 L 12.354 16.917 L 11.668 16.668 Z M 11.001 14.835 L 11.687 14.585 L 11.571 14.265 L 11.251 14.148 L 11.001 14.835 Z M 9.168 14.168 L 8.918 13.482 L 7.031 14.168 L 8.918 14.854 L 9.168 14.168 Z M 11.001 13.501 L 11.251 14.187 L 11.571 14.071 L 11.687 13.751 L 11.001 13.501 Z M 5.834 0 L 5.139 0.223 L 6.556 4.64 L 7.251 4.417 L 7.946 4.194 L 6.529 -0.223 L 5.834 0 Z M 7.251 4.417 L 7.028 5.112 L 11.445 6.529 L 11.668 5.834 L 11.891 5.139 L 7.474 3.722 L 7.251 4.417 Z M 11.668 5.834 L 11.445 5.139 L 7.028 6.555 L 7.251 7.251 L 7.474 7.946 L 11.891 6.529 L 11.668 5.834 Z M 7.251 7.251 L 6.556 7.028 L 5.139 11.445 L 5.834 11.668 L 6.529 11.891 L 7.946 7.474 L 7.251 7.251 Z M 5.834 11.668 L 6.529 11.445 L 5.112 7.028 L 4.417 7.251 L 3.722 7.474 L 5.139 11.891 L 5.834 11.668 Z M 4.417 7.251 L 4.64 6.555 L 0.223 5.139 L 0 5.834 L -0.223 6.529 L 4.194 7.946 L 4.417 7.251 Z M 0 5.834 L 0.223 6.529 L 4.64 5.112 L 4.417 4.417 L 4.194 3.722 L -0.223 5.139 L 0 5.834 Z M 4.417 4.417 L 5.112 4.64 L 6.529 0.223 L 5.834 0 L 5.139 -0.223 L 3.722 4.194 L 4.417 4.417 Z M 11.668 11.668 L 10.982 11.917 L 11.648 13.751 L 12.334 13.501 L 13.021 13.252 L 12.354 11.418 L 11.668 11.668 Z M 12.334 13.501 L 12.085 14.187 L 13.919 14.854 L 14.168 14.168 L 14.417 13.482 L 12.584 12.815 L 12.334 13.501 Z M 14.168 14.168 L 13.919 13.482 L 12.085 14.148 L 12.334 14.835 L 12.584 15.521 L 14.417 14.854 L 14.168 14.168 Z M 12.334 14.835 L 11.648 14.585 L 10.982 16.419 L 11.668 16.668 L 12.354 16.917 L 13.021 15.084 L 12.334 14.835 Z M 11.668 16.668 L 12.354 16.419 L 11.687 14.585 L 11.001 14.835 L 10.315 15.084 L 10.982 16.917 L 11.668 16.668 Z M 11.001 14.835 L 11.251 14.148 L 9.417 13.482 L 9.168 14.168 L 8.918 14.854 L 10.752 15.521 L 11.001 14.835 Z M 9.168 14.168 L 9.417 14.854 L 11.251 14.187 L 11.001 13.501 L 10.752 12.815 L 8.918 13.482 L 9.168 14.168 Z M 11.001 13.501 L 11.687 13.751 L 12.354 11.917 L 11.668 11.668 L 10.982 11.418 L 10.315 13.252 L 11.001 13.501 Z',
            fill: 'currentColor',
            fillRule: 'nonzero',
          }),
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        style: {
          position: 'relative',
          fontFamily:
            '"Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeight: 600,
          fontSize: 22,
          lineHeight: '28.600px',
          color: 'var(--text-primary)',
          flexShrink: 0,
          alignSelf: 'stretch',
        },
      },
      props.text3 ??
        'Rain is due Thursday. Move your pickup to Wednesday at 15:00 to keep the maize dry.',
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          position: 'relative',
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexShrink: 0,
        },
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          role: 'button',
          tabIndex: 0,
          onClick: props.onAction,
          style: {
            cursor: 'pointer',
            position: 'relative',
            height: 46,
            overflow: 'hidden',
            borderRadius: 14,
            backgroundColor: 'var(--earth-soil)',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 18px 0px 18px',
            alignItems: 'center',
            flexWrap: 'nowrap',
            boxSizing: 'border-box',
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement(
          'span',
          {
            style: {
              position: 'relative',
              fontFamily:
                '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: 'nowrap',
              lineHeight: '21px',
              color: 'var(--text-inverse)',
              flexShrink: 0,
            },
          },
          props.text4 ?? 'Reschedule',
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          role: 'button',
          tabIndex: 0,
          onClick: props.onWhy,
          style: {
            cursor: 'pointer',
            position: 'relative',
            height: 46,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'row',
            padding: '0px 18px 0px 18px',
            alignItems: 'center',
            flexWrap: 'nowrap',
            boxSizing: 'border-box',
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement(
          'span',
          {
            style: {
              position: 'relative',
              fontFamily:
                '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 600,
              fontSize: 14,
              whiteSpace: 'nowrap',
              lineHeight: '21px',
              color: 'var(--text-primary)',
              textDecoration: 'underline',
              flexShrink: 0,
            },
          },
          'Why?',
        ),
      ),
    ),
  );
}

export default RhizaCardRoot;
export { RhizaCardRoot };
