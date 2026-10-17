export default function ServiceBookingScreen({ vm }) {
  const { kitsOpt, matFee, sizes, slots, spaces, suns, svcFee, t } = vm;
  return (
    <div
      data-screen-label="34 Book gardener"
      style={{ padding: '0 18px 20px' }}
    >
      <div
        style={{
          font: '700 17px/1.2 var(--font-display)',
          margin: '4px 0 10px',
        }}
      >
        {t.whereGrow}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {spaces.map((o, i) => (
          <button
            onClick={o.pick}
            style={{
              height: '44px',
              padding: '0 14px',
              borderRadius: '12px',
              border: `1.5px solid ${o.bd}`,
              background: o.bg,
              color: o.fg,
              font: '600 13px/1 var(--font-body)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {o.n}
          </button>
        ))}
      </div>
      <div
        style={{
          font: '700 17px/1.2 var(--font-display)',
          margin: '22px 0 10px',
        }}
      >
        {t.howBig}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {sizes.map((o, i) => (
          <button
            onClick={o.pick}
            style={{
              height: '44px',
              padding: '0 14px',
              borderRadius: '12px',
              border: `1.5px solid ${o.bd}`,
              background: o.bg,
              color: o.fg,
              font: '600 13px/1 var(--font-body)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {o.n}
          </button>
        ))}
      </div>
      <div
        style={{
          font: '700 17px/1.2 var(--font-display)',
          margin: '22px 0 10px',
        }}
      >
        {t.sunHours}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {suns.map((o, i) => (
          <button
            onClick={o.pick}
            style={{
              height: '44px',
              padding: '0 14px',
              borderRadius: '12px',
              border: `1.5px solid ${o.bd}`,
              background: o.bg,
              color: o.fg,
              font: '600 13px/1 var(--font-body)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {o.n}
          </button>
        ))}
      </div>
      <div
        style={{
          font: '700 17px/1.2 var(--font-display)',
          margin: '22px 0 10px',
        }}
      >
        {t.whatGrow}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {kitsOpt.map((o, i) => (
          <button
            onClick={o.pick}
            style={{
              height: '44px',
              padding: '0 14px',
              borderRadius: '12px',
              border: `1.5px solid ${o.bd}`,
              background: o.bg,
              color: o.fg,
              font: '600 13px/1 var(--font-body)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {o.n}
          </button>
        ))}
      </div>
      <div
        style={{
          font: '700 17px/1.2 var(--font-display)',
          margin: '22px 0 10px',
        }}
      >
        {t.pickSlot}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        {slots.map((o, i) => (
          <button
            onClick={o.pick}
            style={{
              height: '44px',
              padding: '0 14px',
              borderRadius: '12px',
              border: `1.5px solid ${o.bd}`,
              background: o.bg,
              color: o.fg,
              font: '500 13px/1 var(--font-mono)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {o.n}
          </button>
        ))}
      </div>
      <div
        style={{
          font: '700 17px/1.2 var(--font-display)',
          margin: '22px 0 10px',
        }}
      >
        {t.yourGard}
      </div>
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '16px 18px',
        }}
      >
        <span
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '999px',
            background: 'var(--surface-inverse)',
            color: 'var(--text-inverse)',
            display: 'grid',
            placeItems: 'center',
            font: '700 17px/1 var(--font-display)',
            flex: '0 0 auto',
          }}
        >
          MP
        </span>
        <div style={{ flex: '1', minWidth: '0' }}>
          <div style={{ font: '700 16px/1.2 var(--font-display)' }}>
            {t.gName}
          </div>
          <div
            style={{
              font: '400 12.5px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '2px',
            }}
          >
            {t.gQual}
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: '12px',
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
          <span>{t.visitFee}</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
            }}
          >
            {svcFee}
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
          <span>{t.matCost}</span>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              color: 'var(--text-primary)',
            }}
          >
            {matFee}
          </span>
        </div>
        <div
          style={{
            font: '400 12.5px/1.4 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          {t.gstBill}
        </div>
      </div>
    </div>
  );
}
