import { RhizaButton, RhizaLogo } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function LandingScreen({ vm }) {
  const { go, heroArt, langs, logoSm, t, wide } = vm;
  return (
    <div
      data-keep-light=""
      data-screen-label="01 Landing"
      style={{
        minHeight: 'min(820px, 100vh - 32px)',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--surface-dark)',
        color: 'var(--text-inverse)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{ padding: '16px 24px 0', position: 'relative', zIndex: '2' }}
      >
        <div className="kk-host-x" style={{ display: 'contents' }}>
          <RhizaLogo appearance="reversed" text1="krishikit" {...logoSm} />
        </div>
      </div>
      <div style={{ position: 'relative', height: '236px', flex: '0 0 auto' }}>
        {heroArt}
      </div>
      <div
        style={{
          padding: '0 24px 24px',
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          position: 'relative',
          zIndex: '2',
        }}
      >
        <div
          style={{
            font: '500 11px/1.4 var(--font-mono)',
            letterSpacing: '1.1px',
            color: 'var(--text-on-dark-muted)',
          }}
        >
          {t.splashTag}
        </div>
        <h1
          style={{
            margin: '8px 0 0',
            font: '700 36px/1.08 var(--font-display)',
            letterSpacing: '-1.3px',
            textWrap: 'pretty',
          }}
        >
          {t.landT}
        </h1>
        <p
          style={{
            margin: '10px 0 0',
            font: '400 15px/1.55 var(--font-body)',
            color: 'var(--text-on-dark-muted)',
            textWrap: 'pretty',
          }}
        >
          {t.landS}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            marginTop: '18px',
          }}
        >
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <UiIcon icon="scan" size="22" tone="mist" />
            <span style={{ font: '600 14px/1.35 var(--font-body)' }}>
              {t.f1}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <UiIcon icon="calendar" size="22" tone="mist" />
            <span style={{ font: '600 14px/1.35 var(--font-body)' }}>
              {t.f2}
            </span>
          </div>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <UiIcon icon="shield" size="22" tone="mist" />
            <span style={{ font: '600 14px/1.35 var(--font-body)' }}>
              {t.f3}
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '18px',
          }}
        >
          {langs.map((lg, i) => (
            <button
              onClick={lg.pick}
              style={{
                height: '44px',
                padding: '0 16px',
                borderRadius: '12px',
                border: `1.5px solid ${lg.bdDark}`,
                background: lg.bgDark,
                color: 'var(--text-inverse)',
                font: '600 14px/1 var(--font-body)',
                cursor: 'pointer',
              }}
              key={i}
            >
              {lg.n}
            </button>
          ))}
        </div>
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div className="kk-host-x" style={{ width: '100%' }}>
            <RhizaButton
              variant="inverse"
              size="lg"
              onClick={go.obPhone}
              {...wide}
            >
              {t.getStarted}
            </RhizaButton>
          </div>
          <div
            style={{
              textAlign: 'center',
              font: '400 12px/1.4 var(--font-body)',
              color: 'var(--earth-ash)',
            }}
          >
            {t.proto}
          </div>
        </div>
      </div>
    </div>
  );
}
