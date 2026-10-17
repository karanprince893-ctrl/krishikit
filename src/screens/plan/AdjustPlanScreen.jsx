export default function AdjustPlanScreen({ vm }) {
  const { adjItems, cap, capS, onCap, org, over, overText, t, toggleOrganic } =
    vm;
  return (
    <div
      data-screen-label="19 Change plan"
      style={{
        padding: '0 18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start',
        }}
      >
        <div style={{ flex: '1' }}>
          <div style={{ font: '600 15px/1.25 var(--font-body)' }}>
            {t.organic}
          </div>
          <div
            style={{
              font: '400 13px/1.45 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '4px',
            }}
          >
            {t.organicS}
          </div>
        </div>
        <button
          onClick={toggleOrganic}
          role="switch"
          aria-label={t.organic}
          style={{
            position: 'relative',
            width: '48px',
            height: '28px',
            borderRadius: '999px',
            border: 'none',
            background: org.togBg,
            cursor: 'pointer',
            flex: '0 0 auto',
            transition: 'background-color 200ms var(--motion-grow-ease)',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '3px',
              left: org.x,
              width: '22px',
              height: '22px',
              borderRadius: '999px',
              background: 'var(--earth-paper)',
              transition: 'left 200ms var(--motion-grow-ease)',
            }}
          />
        </button>
      </div>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <span style={{ font: '600 15px/1.25 var(--font-body)' }}>
            {t.budget}
          </span>
          <span
            style={{
              font: '500 16px/1 var(--font-mono)',
              color: 'var(--canopy-core)',
            }}
          >
            {capS}
          </span>
        </div>
        <input
          type="range"
          min="8000"
          max="40000"
          step="500"
          value={cap}
          onChange={onCap}
          aria-label={t.budget}
          style={{ width: '100%', margin: '16px 0 4px' }}
        />
        {over ? (
          <div
            style={{
              marginTop: '8px',
              background: 'var(--status-attention)',
              borderRadius: '12px',
              padding: '10px 12px',
              font: '400 13px/1.45 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            {overText}
          </div>
        ) : null}
      </div>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '0 18px',
        }}
      >
        {adjItems.map((a, i) => (
          <div
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              padding: '12px 0',
              borderBottom: '1px solid var(--border-default)',
              opacity: a.op,
            }}
            key={i}
          >
            <div style={{ flex: '1', minWidth: '0' }}>
              <div style={{ font: '600 14px/1.3 var(--font-body)' }}>{a.n}</div>
              <div
                style={{
                  font: '400 12px/1.3 var(--font-body)',
                  color: 'var(--text-secondary)',
                  marginTop: '2px',
                }}
              >
                <span className="kk-interp">{a.q}</span> ·{' '}
                <span style={{ fontFamily: 'var(--font-mono)' }}>
                  {a.price}
                </span>
              </div>
            </div>
            <button
              onClick={a.toggle}
              role="switch"
              aria-label={a.n}
              style={{
                position: 'relative',
                width: '48px',
                height: '28px',
                borderRadius: '999px',
                border: 'none',
                background: a.togBg,
                cursor: 'pointer',
                flex: '0 0 auto',
                transition: 'background-color 200ms var(--motion-grow-ease)',
              }}
            >
              <span
                style={{
                  position: 'absolute',
                  top: '3px',
                  left: a.x,
                  width: '22px',
                  height: '22px',
                  borderRadius: '999px',
                  background: 'var(--earth-paper)',
                  transition: 'left 200ms var(--motion-grow-ease)',
                }}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
