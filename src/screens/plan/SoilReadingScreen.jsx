import UiIcon from '../../components/UiIcon';

export default function SoilReadingScreen({ vm }) {
  const { sigPct, sigs, t } = vm;
  return (
    <div
      data-screen-label="16 Reading soil"
      style={{ padding: '8px 18px 24px' }}
    >
      <div
        style={{
          font: '500 10.5px/1 var(--font-mono)',
          letterSpacing: '1px',
          color: 'var(--text-secondary)',
        }}
      >
        {t.working}
      </div>
      <h2
        style={{
          margin: '8px 0 0',
          font: '700 28px/1.12 var(--font-display)',
          letterSpacing: '-0.9px',
        }}
      >
        {t.reading}
      </h2>
      <p
        style={{
          margin: '8px 0 18px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.readingS}
      </p>
      <div
        style={{
          height: '6px',
          borderRadius: '6px',
          background: 'var(--canopy-100)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: sigPct,
            background: 'var(--kk-fill)',
            borderRadius: '6px',
            transition: 'width 380ms var(--motion-progress-ease)',
          }}
        />
      </div>
      <div
        style={{
          marginTop: '16px',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '4px 18px',
        }}
      >
        {sigs.map((sg, i) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 0',
              borderBottom: '1px solid var(--border-default)',
            }}
            key={i}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '999px',
                background: sg.dot,
                display: 'grid',
                placeItems: 'center',
                color: 'var(--text-inverse)',
                font: '700 11px/1 var(--font-body)',
                flex: '0 0 auto',
                transition: 'background-color 300ms var(--motion-grow-ease)',
              }}
            >
              {sg.ok ? <UiIcon icon="check" size="13" tone="inverse" /> : null}
            </span>
            <span
              style={{
                flex: '1',
                font: '500 14px/1.3 var(--font-body)',
                color: sg.fg,
              }}
            >
              {sg.t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
