import { RhizaBadge } from '../../design-system';

export default function PaymentScreen({ vm }) {
  const {
    feeS,
    hasUpiDisc,
    inputsS,
    isCredit,
    payOpts,
    payTotal,
    repayLine,
    t,
    upiDisc,
  } = vm;
  return (
    <div
      data-screen-label="20 Payment"
      style={{
        padding: '0 18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {payOpts.map((o, i) => (
        <button
          onClick={o.pick}
          style={{
            width: '100%',
            textAlign: 'left',
            background: 'var(--surface-card)',
            border: o.bd,
            padding: o.pd,
            borderRadius: '20px',
            cursor: 'pointer',
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
          }}
          key={i}
        >
          <span
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '999px',
              border: `2px solid ${o.ring}`,
              display: 'grid',
              placeItems: 'center',
              flex: '0 0 auto',
              marginTop: '1px',
            }}
          >
            <span
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '999px',
                background: o.dot,
              }}
            />
          </span>
          <span style={{ flex: '1' }}>
            <span
              style={{
                display: 'block',
                font: '600 15px/1.25 var(--font-body)',
                color: 'var(--text-primary)',
              }}
            >
              {o.n}
            </span>
            <span
              style={{
                display: 'block',
                font: '400 13px/1.45 var(--font-body)',
                color: 'var(--text-secondary)',
                marginTop: '4px',
              }}
            >
              {o.s}
            </span>
          </span>
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
            alignItems: 'center',
            font: '400 14px/1.2 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          <span>{t.delivery}</span>
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaBadge status="available" label={t.free} />
          </div>
        </div>
        {hasUpiDisc ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              font: '400 14px/1.2 var(--font-body)',
              color: 'var(--canopy-core)',
            }}
          >
            <span>{t.upiOff}</span>
            <span style={{ fontFamily: 'var(--font-mono)' }}>
              − <span className="kk-interp">{upiDisc}</span>
            </span>
          </div>
        ) : null}
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
            {payTotal}
          </span>
        </div>
        {isCredit ? (
          <div
            style={{
              font: '400 13px/1.45 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            {repayLine}
          </div>
        ) : null}
      </div>
      <div
        style={{
          textAlign: 'center',
          font: '400 12.5px/1.4 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.gstBill}
      </div>
    </div>
  );
}
