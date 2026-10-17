import { RhizaBadge, RhizaButton } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function CartScreen({ vm }) {
  const { cartEmpty, cartItems, cartSave, cartValue, go, hasCart, t } = vm;
  return (
    <div data-screen-label="09 Cart" style={{ padding: '0 18px 20px' }}>
      {cartEmpty ? (
        <div
          style={{
            textAlign: 'center',
            padding: '56px 12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '999px',
              background: 'var(--surface-media)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <UiIcon icon="basket" size="22" tone="soft" />
          </div>
          <div
            style={{
              font: '700 20px/1.2 var(--font-display)',
              marginTop: '6px',
            }}
          >
            {t.cartEmpty}
          </div>
          <div
            style={{
              font: '400 14px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            {t.cartEmptyS}
          </div>
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaButton variant="primary" size="md" onClick={go.shop}>
              {t.goShop}
            </RhizaButton>
          </div>
        </div>
      ) : null}
      {hasCart ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {cartItems.map((item, i) => (
            <div
              style={{
                display: 'flex',
                gap: '12px',
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: '20px',
                padding: '12px',
              }}
              key={i}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  background: 'var(--surface-media)',
                  display: 'grid',
                  placeItems: 'center',
                  flex: '0 0 auto',
                }}
              >
                <UiIcon icon={item.ic} size="22" tone="core" />
              </div>
              <div style={{ flex: '1', minWidth: '0' }}>
                <div style={{ font: '600 14px/1.3 var(--font-body)' }}>
                  {item.n}
                </div>
                <div
                  style={{
                    font: '400 12px/1.3 var(--font-body)',
                    color: 'var(--text-secondary)',
                    margin: '2px 0 8px',
                  }}
                >
                  {item.q}
                </div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                  }}
                >
                  <span style={{ font: '500 14px/1 var(--font-mono)' }}>
                    {item.lineTotal}
                  </span>
                  <div
                    style={{
                      width: '116px',
                      height: '44px',
                      borderRadius: '12px',
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
                        height: '44px',
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
                        font: '500 13px/1 var(--font-mono)',
                      }}
                    >
                      {item.qty}
                    </span>
                    <button
                      onClick={item.inc}
                      aria-label="+"
                      style={{
                        width: '44px',
                        height: '44px',
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
                </div>
              </div>
            </div>
          ))}
          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                font: '400 14px/1.2 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              <span>{t.itemsL}</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-primary)',
                }}
              >
                {cartValue}
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                font: '400 14px/1.2 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              <span>{t.delivery}</span>
              <div className="kk-host-x" style={{ display: 'contents' }}>
                <RhizaBadge status="available" label={t.free} />
              </div>
            </div>
            <div
              style={{ height: '1px', background: 'var(--border-default)' }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <span style={{ font: '700 16px/1 var(--font-display)' }}>
                {t.total}
              </span>
              <span
                style={{
                  font: '500 20px/1 var(--font-mono)',
                  color: 'var(--canopy-core)',
                }}
              >
                {cartValue}
              </span>
            </div>
            <div
              style={{
                font: '400 13px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              <span className="kk-interp">{t.save}</span>{' '}
              <span className="kk-interp">{cartSave}</span>.{' '}
              <span className="kk-interp">{t.genuineN}</span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
