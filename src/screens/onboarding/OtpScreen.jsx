export default function OtpScreen({ vm }) {
  const { t } = vm;
  return (
    <div data-screen-label="03 Code" style={{ padding: '4px 18px 16px' }}>
      <div
        style={{
          font: '500 11px/1 var(--font-mono)',
          letterSpacing: '1px',
          color: 'var(--text-secondary)',
        }}
      >
        2 / 3
      </div>
      <h2
        style={{
          margin: '10px 0 0',
          font: '700 30px/1.1 var(--font-display)',
          letterSpacing: '-1px',
        }}
      >
        {t.obOtp}
      </h2>
      <p
        style={{
          margin: '10px 0 24px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.sentTo}
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '10px',
        }}
      >
        <div
          style={{
            height: '64px',
            borderRadius: '14px',
            border: '2px solid var(--border-focus)',
            background: 'var(--surface-card)',
            display: 'grid',
            placeItems: 'center',
            font: '500 26px/1 var(--font-mono)',
          }}
        >
          4
        </div>
        <div
          style={{
            height: '64px',
            borderRadius: '14px',
            border: '2px solid var(--border-focus)',
            background: 'var(--surface-card)',
            display: 'grid',
            placeItems: 'center',
            font: '500 26px/1 var(--font-mono)',
          }}
        >
          8
        </div>
        <div
          style={{
            height: '64px',
            borderRadius: '14px',
            border: '2px solid var(--border-focus)',
            background: 'var(--surface-card)',
            display: 'grid',
            placeItems: 'center',
            font: '500 26px/1 var(--font-mono)',
          }}
        >
          1
        </div>
        <div
          style={{
            height: '64px',
            borderRadius: '14px',
            border: '2px solid var(--border-focus)',
            background: 'var(--surface-card)',
            display: 'grid',
            placeItems: 'center',
            font: '500 26px/1 var(--font-mono)',
          }}
        >
          9
        </div>
      </div>
      <p
        style={{
          margin: '14px 0 0',
          textAlign: 'center',
          font: '400 13px/1.4 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.autoSms}
      </p>
    </div>
  );
}
