import { RhizaBadge } from '../../design-system';

export default function SeasonPlanScreen({ vm }) {
  const { dealerSave, feeS, inputsS, stages, t, tiers, totalS } = vm;
  return (
    <div
      data-screen-label="18 Season plan"
      style={{
        padding: '0 18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {tiers.map((tt, i) => (
        <button
          onClick={tt.pick}
          style={{
            width: '100%',
            textAlign: 'left',
            background: 'var(--surface-card)',
            border: tt.bd,
            padding: tt.pd,
            borderRadius: '20px',
            cursor: 'pointer',
          }}
          key={i}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '8px',
            }}
          >
            <div>
              <div
                style={{
                  font: '700 18px/1.1 var(--font-display)',
                  color: 'var(--text-primary)',
                }}
              >
                {tt.n}
              </div>
              <div
                style={{
                  font: '500 10.5px/1.2 var(--font-mono)',
                  letterSpacing: '1px',
                  color: 'var(--text-secondary)',
                  marginTop: '6px',
                }}
              >
                <span className="kk-interp">{tt.k}</span> ·{' '}
                <span className="kk-interp">{tt.feeS}</span>
              </div>
            </div>
            {tt.rec ? (
              <div className="kk-host-x" style={{ display: 'contents' }}>
                <RhizaBadge status="available" label={t.recommended} />
              </div>
            ) : null}
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              marginTop: '10px',
            }}
          >
            {tt.b.map((bl, i) => (
              <div
                style={{
                  font: '400 13px/1.45 var(--font-body)',
                  color: 'var(--text-secondary)',
                }}
                key={i}
              >
                · <span className="kk-interp">{bl}</span>
              </div>
            ))}
          </div>
        </button>
      ))}
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            font: '400 14px/1.2 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          <span>{t.planFee}</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
            }}
          >
            {feeS}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '8px',
            font: '400 14px/1.2 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          <span>{t.inputsC}</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
            }}
          >
            {inputsS}
          </span>
        </div>
        <div style={{ height: '1px', background: 'var(--border-default)' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
          }}
        >
          <span style={{ font: '700 16px/1 var(--font-display)' }}>
            {t.total}
          </span>
          <span
            style={{
              font: '500 22px/1 var(--font-mono)',
              color: 'var(--canopy-core)',
            }}
          >
            {totalS}
          </span>
        </div>
        <div className="kk-host-x" style={{ display: 'contents' }}>
          <RhizaBadge status="available" label={dealerSave} />
        </div>
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          margin: '16px 0 2px',
        }}
      >
        {t.yieldR}
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
            font: '700 26px/1.1 var(--font-display)',
            letterSpacing: '-0.8px',
            color: 'var(--canopy-core)',
          }}
        >
          {t.yieldV}
        </div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '6px',
          }}
        >
          {t.yieldN}
        </div>
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          margin: '16px 0 2px',
        }}
      >
        {t.signedBy}
      </div>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
        }}
      >
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          <span
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '999px',
              background: 'var(--surface-inverse)',
              color: 'var(--text-inverse)',
              display: 'grid',
              placeItems: 'center',
              font: '700 16px/1 var(--font-display)',
              flex: '0 0 auto',
            }}
          >
            SB
          </span>
          <div>
            <div style={{ font: '600 15px/1.25 var(--font-body)' }}>
              {t.agri}
            </div>
            <div
              style={{
                font: '400 12.5px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.agriQ}
            </div>
          </div>
        </div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '10px',
          }}
        >
          {t.agriN}
        </div>
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          margin: '16px 0 2px',
        }}
      >
        {t.shipments}
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
        }}
      >
        {t.trackN}
      </div>
    </div>
  );
}
