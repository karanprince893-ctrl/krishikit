import { RhizaBadge } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function SoilScreen({ vm }) {
  const { labTest, soilRows, t } = vm;
  return (
    <div data-screen-label="17 Your soil" style={{ padding: '0 18px 20px' }}>
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '4px 18px',
        }}
      >
        {soilRows.map((r, i) => (
          <div
            style={{
              padding: '14px 0',
              borderBottom: '1px solid var(--border-default)',
            }}
            key={i}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '8px',
              }}
            >
              <span
                style={{
                  font: '600 13px/1.2 var(--font-body)',
                  color: 'var(--text-secondary)',
                }}
              >
                {r.l}
              </span>
              <div className="kk-host-x" style={{ display: 'contents' }}>
                <RhizaBadge status={r.s} label={r.c} />
              </div>
            </div>
            <div
              style={{
                font: '600 16px/1.3 var(--font-body)',
                marginTop: '4px',
              }}
            >
              {r.v}
            </div>
            <div
              style={{
                height: '5px',
                borderRadius: '5px',
                background: 'var(--canopy-100)',
                marginTop: '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: r.w,
                  background: r.col,
                  borderRadius: '5px',
                }}
              />
            </div>
            <div
              style={{
                font: '400 12.5px/1.45 var(--font-body)',
                color: 'var(--text-secondary)',
                marginTop: '6px',
              }}
            >
              {r.why}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: '12px',
          background: 'var(--surface-media)',
          borderRadius: '16px',
          padding: '14px 16px',
          font: '400 13px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.honest}
      </div>
      <button
        onClick={labTest}
        style={{
          marginTop: '12px',
          width: '100%',
          textAlign: 'left',
          background: 'var(--surface-card)',
          border: '2px solid var(--connection-accent)',
          borderRadius: '20px',
          padding: '16px 18px',
          cursor: 'pointer',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              flex: '1',
              font: '700 16px/1.25 var(--font-display)',
              color: 'var(--text-primary)',
            }}
          >
            {t.labCta}
          </span>
          <UiIcon icon="arrowRight" size="20" />
        </div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '4px',
          }}
        >
          {t.labSub}
        </div>
      </button>
    </div>
  );
}
