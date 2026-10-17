export default function PartnerEarningsScreen({ vm }) {
  const { bars, t, tripLog } = vm;
  return (
    <div
      data-screen-label="32 Earnings"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
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
            font: '500 10.5px/1.2 var(--font-mono)',
            letterSpacing: '1px',
            color: 'var(--text-secondary)',
          }}
        >
          {t.thisWeek}
        </div>
        <div
          style={{
            font: '500 32px/1 var(--font-mono)',
            color: 'var(--canopy-core)',
            marginTop: '10px',
          }}
        >
          ₹5,940
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '8px',
            height: '96px',
            marginTop: '18px',
          }}
        >
          {bars.map((br, i) => (
            <div
              style={{
                flex: '1',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
                gap: '6px',
              }}
              key={i}
            >
              <div
                style={{
                  width: '100%',
                  height: br.h,
                  background: br.bg,
                  borderRadius: '6px 6px 0 0',
                }}
              />
              <span
                style={{
                  font: '500 10px/1 var(--font-mono)',
                  color: 'var(--text-secondary)',
                }}
              >
                {br.d}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          background: 'var(--surface-inverse)',
          color: 'var(--text-inverse)',
          borderRadius: '20px',
          padding: '18px 22px',
        }}
      >
        <div
          style={{
            font: '500 10.5px/1.2 var(--font-mono)',
            letterSpacing: '1px',
            color: 'var(--canopy-mist)',
          }}
        >
          {t.nextPay}
        </div>
        <div style={{ font: '500 22px/1 var(--font-mono)', marginTop: '8px' }}>
          ₹5,940
        </div>
        <div
          style={{
            font: '400 13px/1.4 var(--font-body)',
            color: 'var(--canopy-mist)',
            marginTop: '6px',
          }}
        >
          {t.nextPayS}
        </div>
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          marginTop: '8px',
        }}
      >
        {t.tripLog}
      </div>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '0 18px',
        }}
      >
        {tripLog.map((tl, i) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '13px 0',
              borderBottom: '1px solid var(--border-default)',
            }}
            key={i}
          >
            <div style={{ flex: '1' }}>
              <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
                {tl.n}
              </div>
              <div
                style={{
                  font: '500 11.5px/1.4 var(--font-mono)',
                  color: 'var(--text-secondary)',
                }}
              >
                {tl.tm}
              </div>
            </div>
            <span
              style={{
                font: '500 14px/1 var(--font-mono)',
                color: 'var(--canopy-core)',
              }}
            >
              {tl.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
