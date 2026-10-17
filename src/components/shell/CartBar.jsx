import UiIcon from '../UiIcon';

export default function CartBar({ vm }) {
  const { cartCount, cartSave, cartValue, go, t } = vm;
  return (
    <div
      style={{
        position: 'sticky',
        bottom: '0',
        zIndex: '6',
        padding: '0 14px 12px',
      }}
    >
      <button
        onClick={go.cart}
        style={{
          width: '100%',
          border: 'none',
          borderRadius: '16px',
          background: 'var(--action-primary)',
          color: 'var(--text-inverse)',
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <UiIcon icon="basket" size="22" tone="bone" />
        <span style={{ flex: '1' }}>
          <span
            style={{ display: 'block', font: '600 14px/1.2 var(--font-body)' }}
          >
            <span className="kk-interp">{cartCount}</span>{' '}
            <span className="kk-interp">{t.items}</span> ·{' '}
            <span className="kk-interp">{cartValue}</span>
          </span>
          <span
            style={{
              display: 'block',
              font: '400 12px/1.3 var(--font-body)',
              color: 'var(--canopy-mist)',
            }}
          >
            <span className="kk-interp">{t.save}</span>{' '}
            <span className="kk-interp">{cartSave}</span>
          </span>
        </span>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            font: '600 14px/1 var(--font-body)',
          }}
        >
          {t.viewCart}
          <UiIcon icon="arrowRight" size="18" tone="bone" />
        </span>
      </button>
    </div>
  );
}
