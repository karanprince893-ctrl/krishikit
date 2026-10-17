import { RhizaBadge, RhizaButton } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function DiagnosisScreen({ vm }) {
  const { go, pestRec, t, wide } = vm;
  return (
    <div
      data-screen-label="23 Diagnosis"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div
        style={{
          background: 'var(--surface-card)',
          border: '2px solid var(--connection-accent)',
          borderRadius: '20px',
          padding: '17px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <div
            style={{
              font: '700 22px/1.15 var(--font-display)',
              letterSpacing: '-0.6px',
            }}
          >
            {t.kolerogaN}
          </div>
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaBadge status="lowstock" label={t.match} />
          </div>
        </div>
        <div
          style={{
            font: '400 14px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '6px',
          }}
        >
          {t.severity}
        </div>
        <div
          style={{ marginTop: '12px', font: '600 15px/1.3 var(--font-body)' }}
        >
          {t.actNow}
        </div>
      </div>
      <div
        style={{
          background: 'var(--surface-media)',
          borderRadius: '16px',
          padding: '14px 16px',
          font: '400 13px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.confirmed}
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          marginTop: '10px',
        }}
      >
        {t.needNow}
      </div>
      {pestRec.map((item, i) => (
        <div
          style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '12px',
          }}
          key={i}
        >
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '12px',
              background: 'var(--surface-media)',
              display: 'grid',
              placeItems: 'center',
              flex: '0 0 auto',
            }}
          >
            <UiIcon icon={item.ic} size="22" tone="core" />
          </div>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ font: '600 14px/1.3 var(--font-body)' }}>
              {item.n}
            </div>
            <div
              style={{
                font: '400 12px/1.3 var(--font-body)',
                color: 'var(--text-secondary)',
                marginTop: '2px',
              }}
            >
              <span className="kk-interp">{item.q}</span> ·{' '}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-primary)',
                }}
              >
                {item.price}
              </span>
            </div>
          </div>
          {item.notInCart ? (
            <button
              onClick={item.inc}
              style={{
                height: '44px',
                padding: '0 16px',
                borderRadius: '14px',
                border: '1.5px solid var(--border-default)',
                background: 'var(--surface-card)',
                color: 'var(--canopy-core)',
                font: '600 14px/1 var(--font-body)',
                cursor: 'pointer',
              }}
            >
              {t.add}
            </button>
          ) : null}
          {item.inCart ? (
            <span
              style={{
                height: '44px',
                padding: '0 16px',
                borderRadius: '14px',
                background: 'var(--action-primary)',
                color: 'var(--text-inverse)',
                display: 'grid',
                placeItems: 'center',
                font: '500 14px/1 var(--font-mono)',
              }}
            >
              {item.qty}
            </span>
          ) : null}
        </div>
      ))}
      <div className="kk-host-x" style={{ width: '100%' }}>
        <RhizaButton
          variant="secondary"
          size="lg"
          onClick={go.doctor}
          {...wide}
        >
          {t.talkDoc}
        </RhizaButton>
      </div>
    </div>
  );
}
