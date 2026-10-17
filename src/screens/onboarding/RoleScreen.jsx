import UiIcon from '../../components/UiIcon';

export default function RoleScreen({ vm }) {
  const { roles, t } = vm;
  return (
    <div data-screen-label="04 Role" style={{ padding: '4px 18px 24px' }}>
      <div
        style={{
          font: '500 11px/1 var(--font-mono)',
          letterSpacing: '1px',
          color: 'var(--text-secondary)',
        }}
      >
        3 / 3
      </div>
      <h2
        style={{
          margin: '10px 0 0',
          font: '700 30px/1.1 var(--font-display)',
          letterSpacing: '-1px',
        }}
      >
        {t.obWho}
      </h2>
      <p
        style={{
          margin: '10px 0 18px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.obWhoS}
      </p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {roles.map((r, i) => (
          <button
            onClick={r.pick}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '10px 10px 14px',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
            key={i}
          >
            <span
              style={{
                display: 'block',
                height: '124px',
                borderRadius: '16px',
                background: 'var(--surface-media)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {r.art}
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '0 8px',
              }}
            >
              <span style={{ flex: '1' }}>
                <span
                  style={{
                    display: 'block',
                    font: '700 18px/1.2 var(--font-display)',
                    color: 'var(--text-primary)',
                  }}
                >
                  {r.n}
                </span>
                <span
                  style={{
                    display: 'block',
                    font: '400 13px/1.4 var(--font-body)',
                    color: 'var(--text-secondary)',
                    marginTop: '3px',
                  }}
                >
                  {r.s}
                </span>
              </span>
              <span
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '999px',
                  background: 'var(--action-primary)',
                  display: 'grid',
                  placeItems: 'center',
                  flex: '0 0 auto',
                }}
              >
                <UiIcon icon="arrowRight" size="20" tone="inverse" />
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
