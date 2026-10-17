export default function BillReadingScreen({ vm }) {
  const { t } = vm;
  return (
    <div
      data-screen-label="28 Reading bill"
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
        {t.billReadT}
      </h2>
      <p
        style={{
          margin: '8px 0 18px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.billReading}
      </p>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '16px',
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        <span
          style={{
            height: '8px',
            borderRadius: '4px',
            background: 'var(--canopy-100)',
            width: '90%',
          }}
        />
        <span
          style={{
            height: '8px',
            borderRadius: '4px',
            background: 'var(--canopy-100)',
            width: '70%',
          }}
        />
        <span
          style={{
            height: '8px',
            borderRadius: '4px',
            background: 'var(--canopy-100)',
            width: '82%',
          }}
        />
        <span
          style={{
            height: '8px',
            borderRadius: '4px',
            background: 'var(--canopy-100)',
            width: '56%',
          }}
        />
        <span
          style={{
            height: '8px',
            borderRadius: '4px',
            background: 'var(--canopy-100)',
            width: '74%',
          }}
        />
      </div>
    </div>
  );
}
