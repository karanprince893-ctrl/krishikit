// Rhiza design system — ported from the prototype's compiled design-system bundle
// (components/cards/RhizaCardProduct.jsx, generated from Figma).
import React from 'react';

// figma node: 3:6002 Rhiza/Card/Product
function RhizaCardProduct(_p = {}) {
  const props = {
    ..._p,
    text1: _p.distance ?? _p.text1,
    text2: _p.producer ?? _p.text2,
    text3: _p.productName ?? _p.text3,
    text4: _p.price ?? _p.text4,
  };
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: props.className,
      style: {
        width: 400,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'var(--surface-card)',
        borderTop: '1px solid var(--border-default)',
        borderRight: '1px solid var(--border-default)',
        borderBottom: '1px solid var(--border-default)',
        borderLeft: '1px solid var(--border-default)',
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
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
          height: 180,
          overflow: 'hidden',
          borderRadius: 16,
          backgroundColor: 'rgb(232,227,215)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'nowrap',
          flexShrink: 0,
          alignSelf: 'stretch',
        },
      },
      /*#__PURE__*/ React.createElement('div', {
        style: {
          position: 'absolute',
          left: 73,
          top: -15,
          width: 210,
          height: 210,
          opacity: 0.45,
          borderRadius: '50%',
          boxShadow: 'inset 0 0 0 1px var(--canopy-300)',
        },
      }),
      /*#__PURE__*/ React.createElement('div', {
        style: {
          position: 'absolute',
          left: 113,
          top: 25,
          width: 130,
          height: 130,
          opacity: 0.45,
          borderRadius: '50%',
          boxShadow: 'inset 0 0 0 1px var(--canopy-300)',
        },
      }),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'relative',
            width: 64,
            height: 64,
            overflow: 'hidden',
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement(
          'svg',
          {
            width: 0,
            height: 24,
            viewBox: '0 0 0 24',
            fill: 'none',
            style: {
              position: 'absolute',
              left: 18.669,
              top: 32,
              width: 0.00009999999747378752,
              height: 24,
              color: 'var(--border-focus)',
            },
          },
          /*#__PURE__*/ React.createElement('path', {
            d: 'M -2.333 24 C -2.333 25.289 -1.289 26.333 0 26.333 C 1.289 26.333 2.333 25.289 2.333 24 L 0 24 L -2.333 24 Z M 2.333 0 C 2.333 -1.289 1.289 -2.333 0 -2.333 C -1.289 -2.333 -2.333 -1.289 -2.333 0 L 0 0 L 2.333 0 Z M 0 24 L 2.333 24 L 2.333 0 L 0 0 L -2.333 0 L -2.333 24 L 0 24 Z',
            fill: 'currentColor',
            fillRule: 'nonzero',
          }),
        ),
        /*#__PURE__*/ React.createElement(
          'svg',
          {
            width: 32,
            height: 26.662,
            viewBox: '0 0 32 26.662',
            fill: 'none',
            style: {
              position: 'absolute',
              left: 18.669,
              top: 10.669,
              width: 32,
              height: 26.662,
              color: 'var(--border-focus)',
            },
          },
          /*#__PURE__*/ React.createElement('path', {
            d: 'M 0 26.662 L -2.333 26.662 L -2.333 28.996 L 0 28.996 L 0 26.662 Z M 32 0 L 34.333 0 L 34.333 -2.333 L 32 -2.333 L 32 0 Z M 0 26.662 L 2.333 26.662 C 2.333 19.206 4.8 13.232 9.536 9.088 C 14.314 4.909 21.697 2.333 32 2.333 L 32 0 L 32 -2.333 C 20.97 -2.333 12.353 0.424 6.464 5.576 C 0.533 10.764 -2.333 18.121 -2.333 26.662 L 0 26.662 Z M 32 0 L 29.667 0 C 29.667 7.456 27.2 13.43 22.464 17.574 C 17.686 21.754 10.303 24.329 0 24.329 L 0 26.662 L 0 28.996 C 11.03 28.996 19.647 26.239 25.536 21.086 C 31.467 15.898 34.333 8.541 34.333 0 L 32 0 Z',
            fill: 'currentColor',
            fillRule: 'nonzero',
          }),
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            position: 'absolute',
            left: 12,
            top: 12,
            overflow: 'hidden',
            borderRadius: 8,
            backgroundColor: 'var(--surface-card)',
            display: 'flex',
            flexDirection: 'row',
            padding: '6px 9px 6px 9px',
            alignItems: 'flex-start',
            flexWrap: 'nowrap',
            boxSizing: 'border-box',
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
              fontSize: 11,
              whiteSpace: 'nowrap',
              lineHeight: '100%',
              color: 'var(--canopy-core)',
              flexShrink: 0,
            },
          },
          props.text1 ?? '38 km away',
        ),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        style: {
          position: 'relative',
          fontFamily:
            '"JetBrains Mono", ui-monospace, "SF Mono", Menlo, Consolas, monospace',
          fontWeight: 500,
          fontSize: 11,
          whiteSpace: 'nowrap',
          lineHeight: '16px',
          letterSpacing: '1.100px',
          color: 'var(--text-secondary)',
          textTransform: 'uppercase',
          flexShrink: 0,
        },
      },
      props.text2 ?? 'Kgosi farms',
    ),
    /*#__PURE__*/ React.createElement(
      'span',
      {
        style: {
          position: 'relative',
          fontFamily:
            '"Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          fontWeight: 600,
          fontSize: 24,
          lineHeight: '26.400px',
          color: 'var(--text-primary)',
          flexShrink: 0,
          alignSelf: 'stretch',
          whiteSpace: 'nowrap',
        },
      },
      props.text3 ?? 'Heirloom tomato seedlings',
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        style: {
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
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
            display: 'flex',
            flexDirection: 'row',
            gap: 6,
            alignItems: 'baseline',
            flexWrap: 'nowrap',
            flexShrink: 0,
          },
        },
        /*#__PURE__*/ React.createElement(
          'span',
          {
            style: {
              position: 'relative',
              fontFamily:
                '"Bricolage Grotesque", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 700,
              fontSize: 24,
              whiteSpace: 'nowrap',
              lineHeight: '100%',
              color: 'var(--text-primary)',
              flexShrink: 0,
            },
          },
          props.text4 ?? 'R48',
        ),
        /*#__PURE__*/ React.createElement(
          'span',
          {
            style: {
              position: 'relative',
              fontFamily:
                '"Hanken Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              fontSize: 13,
              whiteSpace: 'nowrap',
              lineHeight: '19.500px',
              color: 'var(--text-secondary)',
              flexShrink: 0,
            },
          },
          props.unit ?? '/ tray',
        ),
      ),
      /*#__PURE__*/ React.createElement(
        'button',
        {
          type: 'button',
          'aria-label': props.addLabel ?? 'Add to basket',
          onClick: props.onAdd,
          style: {
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            position: 'relative',
            width: 46,
            height: 46,
            overflow: 'hidden',
            borderRadius: 14,
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
              width: 13.332,
              height: 12.5,
              viewBox: '0 0 13.332 12.500',
              fill: 'none',
              style: {
                position: 'absolute',
                left: 3.334,
                top: 3.334,
                width: 13.332,
                height: 12.5,
                color: 'var(--earth-bone)',
              },
            },
            /*#__PURE__*/ React.createElement('path', {
              d: 'M 0 5 L 0 4.271 L -0.909 4.271 L -0.712 5.158 L 0 5 Z M 13.332 5 L 14.044 5.158 L 14.241 4.271 L 13.332 4.271 L 13.332 5 Z M 11.665 12.5 L 11.665 13.229 L 12.25 13.229 L 12.377 12.658 L 11.665 12.5 Z M 1.666 12.5 L 0.955 12.658 L 1.082 13.229 L 1.666 13.229 L 1.666 12.5 Z M 2.726 4.596 C 2.503 4.931 2.593 5.383 2.929 5.607 C 3.264 5.83 3.716 5.74 3.94 5.404 L 3.333 5 L 2.726 4.596 Z M 6.666 0 L 7.273 -0.404 L 6.666 -1.315 L 6.059 -0.404 L 6.666 0 Z M 9.392 5.404 C 9.616 5.74 10.068 5.83 10.403 5.607 C 10.739 5.383 10.829 4.931 10.606 4.596 L 9.999 5 L 9.392 5.404 Z M 0 5 L 0 5.729 L 13.332 5.729 L 13.332 5 L 13.332 4.271 L 0 4.271 L 0 5 Z M 13.332 5 L 12.62 4.842 L 10.954 12.342 L 11.665 12.5 L 12.377 12.658 L 14.044 5.158 L 13.332 5 Z M 11.665 12.5 L 11.665 11.771 L 1.666 11.771 L 1.666 12.5 L 1.666 13.229 L 11.665 13.229 L 11.665 12.5 Z M 1.666 12.5 L 2.378 12.342 L 0.712 4.842 L 0 5 L -0.712 5.158 L 0.955 12.658 L 1.666 12.5 Z M 3.333 5 L 3.94 5.404 L 7.273 0.404 L 6.666 0 L 6.059 -0.404 L 2.726 4.596 L 3.333 5 Z M 6.666 0 L 6.059 0.404 L 9.392 5.404 L 9.999 5 L 10.606 4.596 L 7.273 -0.404 L 6.666 0 Z',
              fill: 'currentColor',
              fillRule: 'nonzero',
            }),
          ),
        ),
      ),
    ),
  );
}

export default RhizaCardProduct;
export { RhizaCardProduct };
