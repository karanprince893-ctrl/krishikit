import { RhizaBadge } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function OrdersScreen({ vm }) {
  const { earlierTitle, orderTitle, t, track } = vm;
  return (
    <div
      data-screen-label="26 Orders"
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
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaBadge status="available" label={t.arriving} />
          </div>
          <span
            style={{
              font: '500 11px/1 var(--font-mono)',
              color: 'var(--text-secondary)',
            }}
          >
            #KK-2841
          </span>
        </div>
        <div
          style={{
            font: '700 17px/1.25 var(--font-display)',
            marginTop: '12px',
          }}
        >
          {orderTitle}
        </div>
        <div
          style={{
            font: '400 13px/1.4 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '2px',
          }}
        >
          {t.orderItems}
        </div>
        <div
          style={{
            height: '1px',
            background: 'var(--border-default)',
            margin: '14px 0',
          }}
        />
        {track.map((tr, i) => (
          <div
            style={{ display: 'flex', gap: '12px', paddingBottom: tr.pb }}
            key={i}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                flex: '0 0 auto',
              }}
            >
              <span
                style={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '999px',
                  background: tr.dotBg,
                  border: `2px solid ${tr.dotBd}`,
                  display: 'grid',
                  placeItems: 'center',
                  color: 'var(--text-inverse)',
                  font: '700 10px/1 var(--font-body)',
                }}
              >
                {tr.ok ? (
                  <UiIcon icon="check" size="12" tone="inverse" />
                ) : null}
              </span>
              <span
                style={{
                  flex: '1',
                  width: '2px',
                  background: tr.line,
                  marginTop: '2px',
                }}
              />
            </div>
            <div
              style={{ font: '500 14px/1.35 var(--font-body)', color: tr.fg }}
            >
              {tr.n}
            </div>
          </div>
        ))}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            background: 'var(--surface-canvas)',
            borderRadius: '16px',
            padding: '12px 14px',
            marginTop: '6px',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
              Ramesh Poojary
            </div>
            <div
              style={{
                font: '400 12px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.agentR}
            </div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                font: '500 9.5px/1.2 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
              }}
            >
              {t.otp}
            </div>
            <div
              style={{
                font: '500 18px/1 var(--font-mono)',
                color: 'var(--canopy-core)',
                marginTop: '5px',
                letterSpacing: '3px',
              }}
            >
              4819
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          marginTop: '8px',
        }}
      >
        {t.earlier}
      </div>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '16px 18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div>
          <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
            {earlierTitle}
          </div>
          <div
            style={{
              font: '400 12.5px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '2px',
            }}
          >
            <span className="kk-interp">{t.deliveredOn}</span> ·{' '}
            <span style={{ fontFamily: 'var(--font-mono)' }}>₹11,060</span>
          </div>
        </div>
        <div className="kk-host-x" style={{ display: 'contents' }}>
          <RhizaBadge status="reserved" label={t.tDone} />
        </div>
      </div>
    </div>
  );
}
