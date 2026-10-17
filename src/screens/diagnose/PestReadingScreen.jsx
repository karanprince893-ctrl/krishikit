export default function PestReadingScreen({ vm }) {
  const { scanArt, t } = vm;
  return (
    <div
      data-screen-label="22 Checking plant"
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
        {t.checkingT}
      </h2>
      <p
        style={{
          margin: '8px 0 18px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.checkingS}
      </p>
      <div
        style={{
          position: 'relative',
          aspectRatio: '16/10',
          borderRadius: '16px',
          background: 'var(--surface-media)',
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {scanArt}
      </div>
    </div>
  );
}
