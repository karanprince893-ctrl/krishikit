import { RhizaButton } from '../../design-system';
import UiIcon from '../UiIcon';

export default function CameraOverlay({ vm }) {
  const {
    camChecks,
    camGuide,
    camHint,
    camLive,
    camShot,
    camStatus,
    camTitle,
    closeCam,
    retake,
    shoot,
    shutFill,
    shutRing,
    t,
    usePhoto,
    wide,
  } = vm;
  return (
    <div
      data-keep-light=""
      style={{
        position: 'absolute',
        inset: '0',
        zIndex: '50',
        background: 'var(--surface-dark)',
        color: 'var(--text-inverse)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 18px 12px',
        }}
      >
        <button
          onClick={closeCam}
          aria-label="×"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '13px',
            border: '1px solid var(--border-on-dark)',
            background: 'none',
            color: 'var(--text-inverse)',
            cursor: 'pointer',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <UiIcon icon="x" size="22" tone="bone" />
        </button>
        <span style={{ flex: '1', font: '700 18px/1.2 var(--font-display)' }}>
          {camTitle}
        </span>
      </div>
      <div
        style={{
          flex: '1',
          position: 'relative',
          margin: '0 18px',
          borderRadius: '20px',
          background: 'var(--earth-bark)',
          overflow: 'hidden',
        }}
      >
        {camLive ? (
          <>
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: '44%',
                transform: 'translate(-50%,-50%)',
                width: '62%',
                aspectRatio: '1',
                border: `2px solid ${camGuide}`,
                borderRadius: '18px',
                transition: 'border-color 300ms var(--motion-grow-ease)',
              }}
            />{' '}
            <span
              style={{
                position: 'absolute',
                left: '50%',
                top: '14px',
                transform: 'translateX(-50%)',
                background: 'var(--surface-dark)',
                borderRadius: '999px',
                padding: '8px 14px',
                font: '600 12px/1.2 var(--font-body)',
                whiteSpace: 'nowrap',
                maxWidth: '90%',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {camHint}
            </span>
            <div
              style={{
                position: 'absolute',
                left: '14px',
                right: '14px',
                bottom: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {camChecks.map((ck, i) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    font: '600 13px/1.3 var(--font-body)',
                    color: ck.fg,
                  }}
                  key={i}
                >
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '999px',
                      border: `1.5px solid ${ck.bd}`,
                      background: ck.bg,
                      display: 'grid',
                      placeItems: 'center',
                      font: '700 10px/1 var(--font-body)',
                      color: 'var(--canopy-core)',
                      flex: '0 0 auto',
                    }}
                  >
                    {ck.ok ? (
                      <UiIcon icon="check" size="11" tone="core" />
                    ) : null}
                  </span>
                  {ck.t}
                </div>
              ))}
            </div>
          </>
        ) : null}
        {camShot ? (
          <span
            style={{
              position: 'absolute',
              left: '14px',
              top: '14px',
              background: 'var(--surface-dark)',
              borderRadius: '8px',
              padding: '7px 10px',
              font: '500 10.5px/1 var(--font-mono)',
              letterSpacing: '1px',
            }}
          >
            {t.camShot}
          </span>
        ) : null}
      </div>
      {camLive ? (
        <>
          <div
            style={{
              textAlign: 'center',
              padding: '12px 18px 0',
              font: '400 13px/1.3 var(--font-body)',
              color: 'var(--text-on-dark-muted)',
            }}
          >
            {camStatus}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '14px 0 24px',
            }}
          >
            <button
              onClick={shoot}
              aria-label={t.takePhoto}
              style={{
                width: '72px',
                height: '72px',
                borderRadius: '999px',
                border: `4px solid ${shutRing}`,
                background: 'none',
                display: 'grid',
                placeItems: 'center',
                cursor: 'pointer',
                transition: 'border-color 300ms var(--motion-grow-ease)',
              }}
            >
              <span
                style={{
                  width: '54px',
                  height: '54px',
                  borderRadius: '999px',
                  background: shutFill,
                  transition: 'background-color 300ms var(--motion-grow-ease)',
                }}
              />
            </button>
          </div>
        </>
      ) : null}
      {camShot ? (
        <div
          style={{ display: 'flex', gap: '10px', padding: '16px 18px 24px' }}
        >
          <button
            onClick={retake}
            style={{
              flex: '1',
              height: '52px',
              borderRadius: '14px',
              border: '1.5px solid var(--border-on-dark)',
              background: 'none',
              color: 'var(--text-inverse)',
              font: '600 14px/1 var(--font-body)',
              cursor: 'pointer',
            }}
          >
            {t.retake}
          </button>
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaButton
              variant="inverse"
              size="lg"
              onClick={usePhoto}
              {...wide}
            >
              {t.usePhoto}
            </RhizaButton>
          </div>
        </div>
      ) : null}
    </div>
  );
}
