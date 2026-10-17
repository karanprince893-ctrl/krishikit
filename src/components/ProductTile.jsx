import UiIcon from './UiIcon';

// Product card used in the shop grid and home rails. `style` positions the host
// wrapper (e.g. a fixed width in a horizontal rail), as in the prototype.
export default function ProductTile({ item, style }) {
  return (
    <div className="kk-host" style={style}>
      <div
        style={{
          height: '100%',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            position: 'relative',
            aspectRatio: '1.3',
            borderRadius: '16px',
            background: 'var(--surface-media)',
            overflow: 'hidden',
            display: 'grid',
            placeItems: 'center',
            marginBottom: '4px',
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: '92px',
              height: '92px',
              borderRadius: '999px',
              border: '1px solid var(--canopy-300)',
            }}
          />
          <span
            style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              borderRadius: '999px',
              border: '1px solid var(--canopy-300)',
            }}
          />
          <UiIcon icon={item.ic} size="26" />
          {item.hasDisc ? (
            <span
              style={{
                position: 'absolute',
                top: '8px',
                left: '8px',
                background: 'var(--surface-card)',
                borderRadius: '8px',
                padding: '4px 8px',
                font: '500 10.5px/1 var(--font-mono)',
                color: 'var(--canopy-core)',
              }}
            >
              {item.disc}
            </span>
          ) : null}
        </div>
        <div
          style={{
            font: '600 14px/1.3 var(--font-body)',
            minHeight: '36px',
            color: 'var(--text-primary)',
          }}
        >
          {item.n}
        </div>
        <div
          style={{
            font: '400 12px/1.3 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          {item.q}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '6px',
            marginTop: 'auto',
            paddingTop: '2px',
          }}
        >
          <span
            style={{
              font: '500 15px/1 var(--font-mono)',
              color: 'var(--text-primary)',
            }}
          >
            {item.price}
          </span>
          <s
            style={{
              font: '400 11px/1 var(--font-mono)',
              color: 'var(--text-secondary)',
            }}
          >
            {item.mrp}
          </s>
        </div>
        {item.notInCart ? (
          <button
            onClick={item.inc}
            style={{
              marginTop: '4px',
              height: '40px',
              borderRadius: '14px',
              border: '1.5px solid var(--border-default)',
              background: 'var(--surface-card)',
              color: 'var(--canopy-core)',
              font: '600 14px/1 var(--font-body)',
              cursor: 'pointer',
            }}
          >
            {item.addL}
          </button>
        ) : null}
        {item.inCart ? (
          <div
            style={{
              marginTop: '4px',
              height: '40px',
              borderRadius: '14px',
              background: 'var(--action-primary)',
              display: 'flex',
              alignItems: 'center',
              color: 'var(--text-inverse)',
            }}
          >
            <button
              onClick={item.dec}
              aria-label="−"
              style={{
                width: '44px',
                height: '40px',
                border: 'none',
                background: 'none',
                color: 'inherit',
                cursor: 'pointer',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <UiIcon icon="minus" size="18" tone="inverse" />
            </button>
            <span
              style={{
                flex: '1',
                textAlign: 'center',
                font: '500 14px/1 var(--font-mono)',
              }}
            >
              {item.qty}
            </span>
            <button
              onClick={item.inc}
              aria-label="+"
              style={{
                width: '44px',
                height: '40px',
                border: 'none',
                background: 'none',
                color: 'inherit',
                cursor: 'pointer',
                display: 'grid',
                placeItems: 'center',
              }}
            >
              <UiIcon icon="plus" size="18" tone="inverse" />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
