import UiIcon from '../../components/UiIcon';

export default function PlanLocationScreen({ vm }) {
  const { t } = vm;
  return (
    <div
      data-screen-label="12 Plan · Location"
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
        {t.q1}
      </h2>
      <p
        style={{
          margin: '8px 0 16px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.q1s}
      </p>
      <div
        style={{
          position: 'relative',
          aspectRatio: '4/3',
          borderRadius: '16px',
          background: 'var(--surface-media)',
          overflow: 'hidden',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <span
          style={{
            position: 'absolute',
            width: '220px',
            height: '220px',
            borderRadius: '999px',
            border: '1px solid var(--canopy-300)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            width: '130px',
            height: '130px',
            borderRadius: '999px',
            border: '1px solid var(--canopy-300)',
          }}
        />
        <span
          style={{
            position: 'absolute',
            width: '56px',
            height: '56px',
            borderRadius: '999px',
            background: 'var(--surface-inverse)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <UiIcon icon="nearby" size="22" tone="bone" />
        </span>
        <span
          style={{
            position: 'absolute',
            left: '14px',
            top: '14px',
            font: '500 10.5px/1 var(--font-mono)',
            letterSpacing: '1px',
            color: 'var(--text-secondary)',
          }}
        >
          SURVEY 118/2B · 2.5 AC
        </span>
      </div>
      <div
        style={{
          marginTop: '12px',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '16px 18px',
        }}
      >
        <div style={{ font: '600 15px/1.3 var(--font-body)' }}>{t.village}</div>
        <div
          style={{
            font: '400 13px/1.4 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '2px',
          }}
        >
          {t.soilSeries}
        </div>
      </div>
    </div>
  );
}
