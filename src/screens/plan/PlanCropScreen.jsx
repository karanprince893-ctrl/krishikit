import { RhizaBadge } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function PlanCropScreen({ vm }) {
  const { crops, t } = vm;
  return (
    <div data-screen-label="14 Plan · Crop" style={{ padding: '0 18px 16px' }}>
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
      </div>
      <h2
        style={{
          margin: '0',
          font: '700 28px/1.12 var(--font-display)',
          letterSpacing: '-0.9px',
        }}
      >
        {t.q3}
      </h2>
      <p
        style={{
          margin: '8px 0 16px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.q3s}
      </p>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
      >
        {crops.map((c, i) => (
          <button
            onClick={c.pick}
            style={{
              background: 'var(--surface-card)',
              border: c.bd,
              padding: c.pd,
              borderRadius: '20px',
              textAlign: 'left',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
            key={i}
          >
            <UiIcon icon={c.ic} size="22" tone="core" />
            <span
              style={{
                font: '700 16px/1.2 var(--font-display)',
                color: 'var(--text-primary)',
              }}
            >
              {c.n}
            </span>
            <div className="kk-host-x" style={{ display: 'contents' }}>
              <RhizaBadge status={c.st} label={c.f} />
            </div>
            <span
              style={{
                font: '400 12px/1.35 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {c.s}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
