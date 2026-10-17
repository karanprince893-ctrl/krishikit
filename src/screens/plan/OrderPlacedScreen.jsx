import UiIcon from '../../components/UiIcon';

export default function OrderPlacedScreen({ vm }) {
  const { doneIsPlan, doneMsg, stages, t } = vm;
  return (
    <div data-screen-label="21 Order placed">
      <div
        data-keep-light=""
        style={{
          background: 'var(--surface-inverse)',
          color: 'var(--text-inverse)',
          padding: '40px 24px 32px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '999px',
            background: 'var(--earth-bone)',
            color: 'var(--canopy-core)',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto',
            font: '700 30px/1 var(--font-body)',
          }}
        >
          <UiIcon icon="check" size="34" tone="core" />
        </div>
        <h2
          style={{
            margin: '20px 0 0',
            font: '700 32px/1.1 var(--font-display)',
            letterSpacing: '-1px',
          }}
        >
          {t.ordered}
        </h2>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--font-body)',
            color: 'var(--canopy-mist)',
          }}
        >
          {doneMsg}
        </p>
      </div>
      {doneIsPlan ? (
        <div style={{ padding: '22px 18px 20px' }}>
          <div
            style={{
              font: '700 18px/1.2 var(--font-display)',
              letterSpacing: '-0.3px',
              marginBottom: '12px',
            }}
          >
            {t.yourShip}
          </div>
          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '6px 18px',
            }}
          >
            {stages.map((st, i) => (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: '10px',
                  padding: '12px 0',
                  borderBottom: '1px dashed var(--border-default)',
                }}
                key={i}
              >
                <span style={{ font: '400 14px/1.35 var(--font-body)' }}>
                  <span className="kk-interp">{st.i}</span>.{' '}
                  <span className="kk-interp">{st.n}</span>
                </span>
                <span
                  style={{
                    font: '500 12px/1.35 var(--font-mono)',
                    color: 'var(--text-secondary)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {st.date}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              font: '400 12.5px/1.45 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '8px',
            }}
          >
            {t.trackN}
          </div>
        </div>
      ) : null}
    </div>
  );
}
