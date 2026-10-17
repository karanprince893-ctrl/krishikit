import { RhizaBadge } from '../../design-system';

export default function BillCheckScreen({ vm }) {
  const { billLines, billOver, billPaid, t } = vm;
  return (
    <div
      data-screen-label="29 Bill check"
      style={{
        padding: '0 18px 20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          background: 'var(--surface-dark)',
          color: 'var(--text-inverse)',
          borderRadius: '20px',
          padding: '22px',
        }}
      >
        <div
          style={{
            font: '500 10.5px/1.2 var(--font-mono)',
            letterSpacing: '1px',
            color: 'var(--text-on-dark-muted)',
          }}
        >
          {t.billOver}
        </div>
        <div
          style={{
            font: '500 34px/1 var(--font-mono)',
            color: 'var(--clay-light)',
            marginTop: '10px',
          }}
        >
          {billOver}
        </div>
        <div
          style={{
            font: '400 13px/1.4 var(--font-body)',
            color: 'var(--text-on-dark-muted)',
            marginTop: '6px',
          }}
        >
          <span className="kk-interp">{t.billOn}</span>{' '}
          <span className="kk-interp">{billPaid}</span>
        </div>
      </div>
      <div
        style={{
          background: 'var(--status-attention)',
          borderRadius: '20px',
          padding: '16px 18px',
        }}
      >
        <div style={{ font: '700 16px/1.3 var(--font-display)' }}>{t.bv1}</div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '4px',
          }}
        >
          {t.bv1s}
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
        <div style={{ font: '700 16px/1.3 var(--font-display)' }}>{t.bv2}</div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '4px',
          }}
        >
          {t.bv2s}
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
        <div style={{ font: '700 16px/1.3 var(--font-display)' }}>{t.bv3}</div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '4px',
          }}
        >
          {t.bv3s}
        </div>
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          margin: '14px 0 2px',
        }}
      >
        {t.billLines}
      </div>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '0 16px',
        }}
      >
        {billLines.map((bl, i) => (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 0',
              borderBottom: '1px solid var(--border-default)',
            }}
            key={i}
          >
            <span
              style={{
                flex: '1',
                minWidth: '0',
                font: '600 13.5px/1.35 var(--font-body)',
              }}
            >
              {bl.n}
            </span>
            <span style={{ font: '500 13px/1 var(--font-mono)' }}>
              {bl.paid}
            </span>
            <div className="kk-host-x" style={{ display: 'contents' }}>
              <RhizaBadge status={bl.st} label={bl.lab} />
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          font: '400 12.5px/1.45 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.billNote}
      </div>
    </div>
  );
}
