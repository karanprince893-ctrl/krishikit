export default function PlanAreaScreen({ vm }) {
  const { areaShow, conv, keys, t, units } = vm;
  return (
    <div data-screen-label="13 Plan · Area" style={{ padding: '0 18px 16px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          gap: '4px',
          marginBottom: '16px',
        }}
      >
        <span
          style={{
            height: '3px',
            borderRadius: '3px',
            background: 'var(--kk-fill)',
          }}
        />
        <span
          style={{
            height: '3px',
            borderRadius: '3px',
            background: 'var(--kk-fill)',
          }}
        />
        <span
          style={{
            height: '3px',
            borderRadius: '3px',
            background: 'var(--border-default)',
          }}
        />
        <span
          style={{
            height: '3px',
            borderRadius: '3px',
            background: 'var(--border-default)',
          }}
        />
      </div>
      <h2
        style={{
          margin: '0',
          font: '700 28px/1.12 var(--font-display)',
          letterSpacing: '-0.9px',
        }}
      >
        {t.q2}
      </h2>
      <p
        style={{
          margin: '8px 0 0',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.q2s}
      </p>
      <div style={{ textAlign: 'center', padding: '16px 0 6px' }}>
        <div
          style={{
            font: '700 64px/1 var(--font-display)',
            letterSpacing: '-2.4px',
            color: 'var(--canopy-core)',
          }}
        >
          {areaShow}
        </div>
        <div
          style={{
            font: '500 12px/1 var(--font-mono)',
            color: 'var(--text-secondary)',
            marginTop: '8px',
          }}
        >
          {conv}
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginTop: '10px',
        }}
      >
        {units.map((u, i) => (
          <button
            onClick={u.pick}
            style={{
              height: '44px',
              padding: '0 16px',
              borderRadius: '12px',
              border: `1.5px solid ${u.bd}`,
              background: u.bg,
              color: u.fg,
              font: '600 14px/1 var(--font-body)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {u.n}
          </button>
        ))}
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: '8px',
          marginTop: '16px',
        }}
      >
        {keys.map((k, i) => (
          <button
            onClick={k.press}
            style={{
              height: '52px',
              borderRadius: '14px',
              border: '1px solid var(--border-default)',
              background: 'var(--surface-card)',
              font: '500 20px/1 var(--font-mono)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {k.k}
          </button>
        ))}
      </div>
    </div>
  );
}
