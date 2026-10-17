import { RhizaBadge, RhizaButton } from '../../design-system';

export default function PartnerHomeScreen({ vm }) {
  const { acceptReq, duty, earnParts, reqShow, skipReq, sos, t, wide } = vm;
  return (
    <div
      data-screen-label="07 Partner home"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div
        style={{
          background: duty.cardBg,
          color: duty.fg,
          borderRadius: '20px',
          padding: '18px 22px',
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
        }}
      >
        <div style={{ flex: '1' }}>
          <div
            style={{
              font: '700 19px/1.2 var(--font-display)',
              letterSpacing: '-0.4px',
            }}
          >
            {duty.title}
          </div>
          <div
            style={{
              font: '400 13px/1.4 var(--font-body)',
              marginTop: '3px',
              color: duty.sub,
            }}
          >
            {duty.desc}
          </div>
        </div>
        <button
          onClick={duty.toggle}
          role="switch"
          aria-label={duty.title}
          style={{
            position: 'relative',
            width: '58px',
            height: '32px',
            borderRadius: '999px',
            border: 'none',
            background: duty.togBg,
            cursor: 'pointer',
            flex: '0 0 auto',
            transition: 'background-color 200ms var(--motion-grow-ease)',
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '3px',
              left: duty.x,
              width: '26px',
              height: '26px',
              borderRadius: '999px',
              background: 'var(--earth-paper)',
              transition: 'left 200ms var(--motion-grow-ease)',
            }}
          />
        </button>
      </div>
      {reqShow ? (
        <div
          style={{
            background: 'var(--surface-card)',
            border: '2px solid var(--connection-accent)',
            borderRadius: '20px',
            padding: '17px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                font: '500 10.5px/1.2 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--text-secondary)',
              }}
            >
              {t.newReq}
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
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginTop: '12px',
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
                  {t.legHub}
                </div>
                <div
                  style={{
                    font: '400 12.5px/1.4 var(--font-body)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {t.kmAway}
                </div>
              </div>
            </div>
            <div
              style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}
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
                  Vasanti Rai · Kedila
                </div>
                <div
                  style={{
                    font: '400 12.5px/1.4 var(--font-body)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {t.dropDesc}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '8px', marginTop: '14px' }}>
            <div className="kk-host-x" style={{ display: 'contents' }}>
              <RhizaButton
                variant="primary"
                size="md"
                onClick={acceptReq}
                {...wide}
              >
                {t.accept}
              </RhizaButton>
            </div>
            <div className="kk-host-x" style={{ display: 'contents' }}>
              <RhizaButton
                variant="secondary"
                size="md"
                onClick={skipReq}
                {...wide}
              >
                {t.skipIt}
              </RhizaButton>
            </div>
          </div>
        </div>
      ) : null}
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
          <span
            style={{
              font: '500 10.5px/1.2 var(--font-mono)',
              letterSpacing: '1px',
              color: 'var(--text-secondary)',
            }}
          >
            {t.todayEarn}
          </span>
          <span
            style={{
              font: '400 12.5px/1 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            7 <span className="kk-interp">{t.drops}</span>
          </span>
        </div>
        <div
          style={{
            font: '500 32px/1 var(--font-mono)',
            color: 'var(--canopy-core)',
            margin: '10px 0 12px',
          }}
        >
          ₹842
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {earnParts.map((ep, i) => (
            <div className="kk-host-x" key={i} style={{ display: 'contents' }}>
              <RhizaBadge status="reserved" label={ep} />
            </div>
          ))}
        </div>
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
            gap: '10px',
          }}
        >
          <span style={{ font: '700 16px/1.25 var(--font-display)' }}>
            {t.incT}
          </span>
          <span
            style={{
              font: '500 12px/1 var(--font-mono)',
              color: 'var(--text-secondary)',
            }}
          >
            9/12
          </span>
        </div>
        <div
          style={{
            height: '8px',
            borderRadius: '8px',
            background: 'var(--canopy-100)',
            marginTop: '12px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '75%',
              background: 'var(--kk-fill)',
              borderRadius: '8px',
            }}
          />
        </div>
        <div
          style={{
            font: '400 12.5px/1.4 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '8px',
          }}
        >
          {t.incS}
        </div>
      </div>
      <div
        style={{
          background: 'var(--status-attention)',
          borderRadius: '20px',
          padding: '16px 18px',
        }}
      >
        <div style={{ font: '700 16px/1.25 var(--font-display)' }}>
          {t.hotZone}
        </div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '4px',
          }}
        >
          {t.hotZoneS}
        </div>
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          marginTop: '12px',
        }}
      >
        {t.perf}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '8px',
        }}
      >
        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '16px',
            padding: '14px',
          }}
        >
          <div
            style={{
              font: '500 9.5px/1.3 var(--font-mono)',
              letterSpacing: '.8px',
              color: 'var(--text-secondary)',
            }}
          >
            {t.pAcc}
          </div>
          <div
            style={{ font: '500 20px/1 var(--font-mono)', marginTop: '8px' }}
          >
            94%
          </div>
        </div>
        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '16px',
            padding: '14px',
          }}
        >
          <div
            style={{
              font: '500 9.5px/1.3 var(--font-mono)',
              letterSpacing: '.8px',
              color: 'var(--text-secondary)',
            }}
          >
            {t.pTime}
          </div>
          <div
            style={{
              font: '500 20px/1 var(--font-mono)',
              marginTop: '8px',
              color: 'var(--canopy-core)',
            }}
          >
            97%
          </div>
        </div>
        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '16px',
            padding: '14px',
          }}
        >
          <div
            style={{
              font: '500 9.5px/1.3 var(--font-mono)',
              letterSpacing: '.8px',
              color: 'var(--text-secondary)',
            }}
          >
            {t.pRate}
          </div>
          <div
            style={{ font: '500 20px/1 var(--font-mono)', marginTop: '8px' }}
          >
            4.8
          </div>
        </div>
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
            font: '500 10.5px/1.2 var(--font-mono)',
            letterSpacing: '1px',
            color: 'var(--text-secondary)',
          }}
        >
          {t.cashHand}
        </div>
        <div style={{ font: '500 22px/1 var(--font-mono)', marginTop: '8px' }}>
          ₹2,340
        </div>
        <div
          style={{
            font: '400 12.5px/1.4 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '6px',
          }}
        >
          {t.cashHandS}
        </div>
      </div>
      <div className="kk-host-x" style={{ width: '100%' }}>
        <RhizaButton variant="signal" size="lg" onClick={sos} {...wide}>
          {t.sosT}
        </RhizaButton>
      </div>
    </div>
  );
}
