import { RhizaBadge } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function ServicesScreen({ vm }) {
  const { svcs, t } = vm;
  return (
    <div
      data-screen-label="33 Services"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <p
        style={{
          margin: '0 0 4px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.svcS}
      </p>
      {svcs.map((sv, i) => (
        <button
          onClick={sv.pick}
          style={{
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
            width: '100%',
            textAlign: 'left',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '18px',
            cursor: 'pointer',
          }}
          key={i}
        >
          <span
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '16px',
              background: 'var(--surface-media)',
              display: 'grid',
              placeItems: 'center',
              flex: '0 0 auto',
            }}
          >
            <UiIcon icon={sv.ic} size="22" tone="core" />
          </span>
          <span style={{ flex: '1', minWidth: '0' }}>
            <span
              style={{
                display: 'block',
                font: '700 17px/1.2 var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              {sv.n}
            </span>
            <span
              style={{
                display: 'block',
                font: '400 13px/1.45 var(--font-body)',
                color: 'var(--text-secondary)',
                margin: '4px 0 10px',
              }}
            >
              {sv.s}
            </span>
            <span style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <div className="kk-host-x" style={{ display: 'contents' }}>
                <RhizaBadge status="available" label={sv.from} />
              </div>
              <span
                style={{
                  font: '500 12px/1 var(--font-mono)',
                  color: 'var(--text-secondary)',
                }}
              >
                4.9 / 5
              </span>
            </span>
          </span>
          <UiIcon icon="arrowRight" size="20" />
        </button>
      ))}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'center',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '16px 18px',
          marginTop: '6px',
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
    </div>
  );
}
