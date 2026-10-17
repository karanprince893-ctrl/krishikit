import { RhizaButton } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function PartnerTripScreen({ vm }) {
  const { callG, handItems, noTrip, t, tripOn, wide } = vm;
  return (
    <div
      data-screen-label="30 Partner trip"
      style={{
        padding: '0 18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      {noTrip ? (
        <div
          style={{
            textAlign: 'center',
            padding: '56px 12px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '999px',
              background: 'var(--surface-media)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <UiIcon icon="truck" size="28" tone="soft" />
          </div>
          <div
            style={{
              font: '400 15px/1.5 var(--font-body)',
              color: 'var(--text-secondary)',
              maxWidth: '260px',
            }}
          >
            {t.noTrip}
          </div>
        </div>
      ) : null}
      {tripOn ? (
        <>
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
            <span
              style={{
                position: 'absolute',
                width: '240px',
                height: '240px',
                borderRadius: '999px',
                border: '1px solid var(--canopy-300)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                width: '140px',
                height: '140px',
                borderRadius: '999px',
                border: '1px solid var(--canopy-300)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '22%',
                top: '62%',
                width: '14px',
                height: '14px',
                borderRadius: '999px',
                background: 'var(--kk-fill)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '74%',
                top: '28%',
                width: '14px',
                height: '14px',
                borderRadius: '999px',
                background: 'var(--clay-core)',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '14px',
                top: '14px',
                font: '500 10.5px/1 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
              }}
            >
              6.2 KM · 19 MIN
            </span>
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
              style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '999px',
                  background: 'var(--kk-fill)',
                  marginTop: '4px',
                  flex: '0 0 auto',
                }}
              />
              <div>
                <div style={{ font: '600 14px/1.3 var(--font-body)' }}>
                  <span className="kk-interp">{t.pickup}</span> ·{' '}
                  <span className="kk-interp">{t.legHub}</span>
                </div>
                <div
                  style={{
                    font: '400 12.5px/1.4 var(--font-body)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {t.legHubS}
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start',
                marginTop: '12px',
              }}
            >
              <span
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '999px',
                  background: 'var(--clay-core)',
                  marginTop: '4px',
                  flex: '0 0 auto',
                }}
              />
              <div>
                <div style={{ font: '600 14px/1.3 var(--font-body)' }}>
                  <span className="kk-interp">{t.dropAt}</span> · Vasanti Rai
                </div>
                <div
                  style={{
                    font: '400 12.5px/1.4 var(--font-body)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <span className="kk-interp">{t.village}</span> · 6.2 km
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
              <div className="kk-host-x" style={{ display: 'contents' }}>
                <RhizaButton variant="primary" size="md" {...wide}>
                  {t.navigate}
                </RhizaButton>
              </div>
              <div className="kk-host-x" style={{ display: 'contents' }}>
                <RhizaButton
                  variant="secondary"
                  size="md"
                  onClick={callG}
                  {...wide}
                >
                  {t.callC}
                </RhizaButton>
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
            {t.itemsToHand}
          </div>
          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '0 18px',
            }}
          >
            {handItems.map((hi, i) => (
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
                    background: 'var(--kk-fill)',
                    color: 'var(--text-inverse)',
                    display: 'grid',
                    placeItems: 'center',
                    font: '700 11px/1 var(--font-body)',
                  }}
                >
                  <UiIcon icon="check" size="13" tone="inverse" />
                </span>
                <span
                  style={{ flex: '1', font: '600 14px/1.3 var(--font-body)' }}
                >
                  {hi.n}
                </span>
                <span
                  style={{
                    font: '500 12.5px/1 var(--font-mono)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {hi.q}
                </span>
              </div>
            ))}
          </div>
          <div
            style={{
              font: '700 18px/1.2 var(--font-display)',
              letterSpacing: '-0.3px',
              marginTop: '8px',
            }}
          >
            {t.askOtp}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: '10px',
            }}
          >
            <div
              style={{
                height: '60px',
                borderRadius: '14px',
                border: '2px solid var(--border-focus)',
                background: 'var(--surface-card)',
                display: 'grid',
                placeItems: 'center',
                font: '500 24px/1 var(--font-mono)',
              }}
            >
              4
            </div>
            <div
              style={{
                height: '60px',
                borderRadius: '14px',
                border: '2px solid var(--border-focus)',
                background: 'var(--surface-card)',
                display: 'grid',
                placeItems: 'center',
                font: '500 24px/1 var(--font-mono)',
              }}
            >
              8
            </div>
            <div
              style={{
                height: '60px',
                borderRadius: '14px',
                border: '2px solid var(--border-focus)',
                background: 'var(--surface-card)',
                display: 'grid',
                placeItems: 'center',
                font: '500 24px/1 var(--font-mono)',
              }}
            >
              1
            </div>
            <div
              style={{
                height: '60px',
                borderRadius: '14px',
                border: '2px solid var(--border-focus)',
                background: 'var(--surface-card)',
                display: 'grid',
                placeItems: 'center',
                font: '500 24px/1 var(--font-mono)',
              }}
            >
              9
            </div>
          </div>
          <div
            style={{
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '16px 18px',
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
              }}
            >
              <span
                style={{
                  font: '600 14px/1.2 var(--font-body)',
                  color: 'var(--text-secondary)',
                }}
              >
                {t.payout}
              </span>
              <span
                style={{
                  font: '500 20px/1 var(--font-mono)',
                  color: 'var(--canopy-core)',
                }}
              >
                ₹92
              </span>
            </div>
            <div
              style={{
                font: '400 12.5px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
                marginTop: '6px',
              }}
            >
              <span className="kk-interp">{t.eBase}</span> ₹40 ·{' '}
              <span className="kk-interp">{t.eDist}</span> ₹32 ·{' '}
              <span className="kk-interp">{t.eInc}</span> ₹20
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}
