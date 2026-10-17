import rootSparkle from '../../assets/images/root-sparkle.svg';
import UiIcon from '../UiIcon';

export default function ScanSheet({ vm }) {
  const { closeSheet, scanOpts, t } = vm;
  return (
    <>
      <div
        onClick={closeSheet}
        style={{
          position: 'absolute',
          inset: '0',
          background: 'rgba(26,24,20,0.45)',
          zIndex: '40',
        }}
      />
      <div
        style={{
          position: 'absolute',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '41',
          background: 'var(--surface-card)',
          borderRadius: '20px 20px 0 0',
          padding: '10px 18px 22px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        <span
          style={{
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            background: 'var(--border-default)',
            alignSelf: 'center',
          }}
        />
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
          <div style={{ flex: '1' }}>
            <div
              style={{
                font: '700 22px/1.2 var(--font-display)',
                letterSpacing: '-0.5px',
              }}
            >
              {t.scanPick}
            </div>
            <div
              style={{
                font: '400 13px/1.45 var(--font-body)',
                color: 'var(--text-secondary)',
                marginTop: '4px',
              }}
            >
              {t.scanSub}
            </div>
          </div>
          <button
            onClick={closeSheet}
            aria-label="×"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '13px',
              border: '1.5px solid var(--border-default)',
              background: 'var(--surface-card)',
              cursor: 'pointer',
              display: 'grid',
              placeItems: 'center',
              flex: '0 0 auto',
            }}
          >
            <UiIcon icon="x" size="20" tone="primary" />
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
            gap: '8px',
          }}
        >
          {scanOpts.map((so, i) => (
            <button
              onClick={so.on}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '10px',
                padding: '14px 12px',
                borderRadius: '20px',
                border: '1px solid var(--border-default)',
                background: 'var(--surface-canvas)',
                cursor: 'pointer',
                textAlign: 'left',
                minHeight: '156px',
              }}
              key={i}
            >
              <span
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: 'var(--surface-inverse)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <UiIcon icon={so.ic} size="24" tone="sprout" />
              </span>
              <span
                style={{
                  font: '700 15px/1.2 var(--font-display)',
                  color: 'var(--text-primary)',
                }}
              >
                {so.l}
              </span>
              <span
                style={{
                  font: '400 12px/1.35 var(--font-body)',
                  color: 'var(--text-secondary)',
                }}
              >
                {so.s}
              </span>
            </button>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            background: 'var(--root-surface)',
            borderRadius: '14px',
            padding: '12px 14px',
          }}
        >
          <img src={rootSparkle} alt="" width="14" height="17" />
          <span
            style={{
              font: '600 13px/1.4 var(--font-body)',
              color: 'var(--root-text)',
            }}
          >
            {t.scanTrust}
          </span>
        </div>
      </div>
    </>
  );
}
