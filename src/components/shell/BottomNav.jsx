import UiIcon from '../UiIcon';

export default function BottomNav({ vm }) {
  const { cartCount, fabRing, nav, openSheet, t } = vm;
  return (
    <nav
      style={{
        flex: '0 0 auto',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-end',
        background: 'var(--surface-card)',
        borderTop: '1px solid var(--border-default)',
        padding: '4px 6px 10px',
      }}
    >
      {nav.map((n, i) => (
        <div
          style={{ flex: '1', display: 'flex', justifyContent: 'center' }}
          key={i}
        >
          {n.isFab ? (
            <button
              onClick={openSheet}
              aria-label={t.scan}
              style={{
                position: 'relative',
                marginTop: '-30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '5px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                padding: '0',
              }}
            >
              <span
                style={{
                  position: 'relative',
                  width: '64px',
                  height: '64px',
                  borderRadius: '999px',
                  background: 'var(--action-primary)',
                  border: '4px solid var(--surface-card)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                {fabRing}
                <UiIcon icon="scan" size="26" tone="sprout" />
              </span>
              <span
                style={{
                  font: '600 11px/1 var(--font-body)',
                  color: 'var(--text-primary)',
                }}
              >
                {t.scan}
              </span>
            </button>
          ) : null}
          {n.isTab ? (
            <button
              onClick={n.go}
              style={{
                position: 'relative',
                width: '100%',
                height: '56px',
                border: 'none',
                background: 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px',
                cursor: 'pointer',
              }}
            >
              {n.on ? (
                <span
                  style={{
                    position: 'absolute',
                    top: '-4px',
                    width: '24px',
                    height: '2px',
                    background: 'var(--nav-indicator)',
                  }}
                />
              ) : null}
              <UiIcon icon={n.ic} size="22" tone={n.tone} />
              <span
                style={{
                  font: '600 11px/1 var(--font-body)',
                  color: n.fg,
                  whiteSpace: 'nowrap',
                }}
              >
                {n.l}
              </span>
              {n.hasBadge ? (
                <span
                  style={{
                    position: 'absolute',
                    top: '4px',
                    left: 'calc(50% + 6px)',
                    minWidth: '18px',
                    height: '18px',
                    borderRadius: '999px',
                    background: 'var(--clay-core)',
                    color: 'var(--text-primary)',
                    font: '500 10px/18px var(--font-mono)',
                    textAlign: 'center',
                    padding: '0 5px',
                  }}
                >
                  {cartCount}
                </span>
              ) : null}
            </button>
          ) : null}
        </div>
      ))}
    </nav>
  );
}
