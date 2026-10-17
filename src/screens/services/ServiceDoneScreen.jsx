import { RhizaButton } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function ServiceDoneScreen({ vm }) {
  const { brings, callG, t } = vm;
  return (
    <div data-screen-label="35 Booked">
      <div
        data-keep-light=""
        style={{
          background: 'var(--surface-inverse)',
          color: 'var(--text-inverse)',
          padding: '40px 24px 32px',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: '72px',
            height: '72px',
            borderRadius: '999px',
            background: 'var(--earth-bone)',
            color: 'var(--canopy-core)',
            display: 'grid',
            placeItems: 'center',
            margin: '0 auto',
            font: '700 30px/1 var(--font-body)',
          }}
        >
          <UiIcon icon="check" size="34" tone="core" />
        </div>
        <h2
          style={{
            margin: '20px 0 0',
            font: '700 32px/1.1 var(--font-display)',
            letterSpacing: '-1px',
          }}
        >
          {t.booked}
        </h2>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.5 var(--font-body)',
            color: 'var(--canopy-mist)',
          }}
        >
          {t.bookedS}
        </p>
      </div>
      <div
        style={{
          padding: '22px 18px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
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
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaButton variant="secondary" size="sm" onClick={callG}>
              {t.callC}
            </RhizaButton>
          </div>
        </div>
        <div
          style={{
            font: '700 18px/1.2 var(--font-display)',
            letterSpacing: '-0.3px',
            marginTop: '8px',
          }}
        >
          {t.brings}
        </div>
        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '0 18px',
          }}
        >
          {brings.map((br, i) => (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 0',
                borderBottom: '1px solid var(--border-default)',
              }}
              key={i}
            >
              <span
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '999px',
                  background: 'var(--kk-fill)',
                  color: 'var(--text-inverse)',
                  display: 'grid',
                  placeItems: 'center',
                  font: '700 11px/1 var(--font-body)',
                  flex: '0 0 auto',
                }}
              >
                <UiIcon icon="check" size="13" tone="inverse" />
              </span>
              <div style={{ flex: '1' }}>
                <div style={{ font: '600 14px/1.3 var(--font-body)' }}>
                  {br.n}
                </div>
                <div
                  style={{
                    font: '400 12px/1.4 var(--font-body)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {br.s}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: 'var(--surface-media)',
            borderRadius: '20px',
            padding: '16px 18px',
          }}
        >
          <div style={{ font: '700 16px/1.25 var(--font-display)' }}>
            {t.aftercare}
          </div>
          <div
            style={{
              font: '400 13px/1.45 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '4px',
            }}
          >
            {t.aftercareS}
          </div>
        </div>
      </div>
    </div>
  );
}
