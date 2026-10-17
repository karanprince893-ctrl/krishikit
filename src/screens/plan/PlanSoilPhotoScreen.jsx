export default function PlanSoilPhotoScreen({ vm }) {
  const { t } = vm;
  return (
    <div
      data-screen-label="15 Plan · Soil photo"
      style={{ padding: '0 18px 16px' }}
    >
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
            background: 'var(--kk-fill)',
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
        {t.q4}
      </h2>
      <p
        style={{
          margin: '8px 0 16px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.q4s}
      </p>
      <div
        style={{
          position: 'relative',
          aspectRatio: '1.15',
          borderRadius: '16px',
          background: 'var(--surface-dark)',
          overflow: 'hidden',
        }}
      >
        <span
          style={{
            position: 'absolute',
            inset: '18%',
            border: '2px solid var(--earth-bone)',
            borderRadius: '18px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: '12px',
            right: '12px',
            bottom: '12px',
            background: 'var(--surface-card)',
            borderRadius: '12px',
            padding: '10px 12px',
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-primary)',
          }}
        >
          {t.vfSoil}
        </div>
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
    </div>
  );
}
