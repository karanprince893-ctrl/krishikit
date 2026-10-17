import { RhizaButton } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function ProfileScreen({ vm }) {
  const {
    langName,
    openLang,
    prof,
    reset,
    t,
    thTog,
    themeName,
    toggleTheme,
    wide,
  } = vm;
  return (
    <div
      data-screen-label="27 Profile"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
        }}
      >
        <span
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '999px',
            background: 'var(--surface-inverse)',
            color: 'var(--text-inverse)',
            display: 'grid',
            placeItems: 'center',
            font: '700 22px/1 var(--font-display)',
            flex: '0 0 auto',
          }}
        >
          {prof.init}
        </span>
        <div>
          <div style={{ font: '700 19px/1.2 var(--font-display)' }}>
            {prof.name}
          </div>
          <div
            style={{
              font: '400 13px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '2px',
            }}
          >
            {prof.sub}
          </div>
        </div>
      </div>
      {prof.showRefer ? (
        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '18px',
          }}
        >
          <div style={{ font: '700 17px/1.2 var(--font-display)' }}>
            {t.refer}
          </div>
          <div
            style={{
              font: '400 13px/1.45 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '4px',
            }}
          >
            {t.referS}
          </div>
          <span
            style={{
              display: 'inline-block',
              marginTop: '10px',
              border: '1px dashed var(--border-default)',
              borderRadius: '8px',
              padding: '6px 10px',
              font: '500 12px/1 var(--font-mono)',
              letterSpacing: '1.2px',
              color: 'var(--canopy-core)',
            }}
          >
            SURESH200
          </span>
        </div>
      ) : null}
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '0 18px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 0',
            borderBottom: '1px solid var(--border-default)',
          }}
        >
          <div style={{ flex: '1' }}>
            <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
              {prof.landL}
            </div>
            <div
              style={{
                font: '400 12.5px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {prof.landV}
            </div>
          </div>
        </div>
        <button
          onClick={openLang}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 0',
            border: 'none',
            borderBottom: '1px solid var(--border-default)',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          <div style={{ flex: '1' }}>
            <div
              style={{
                font: '600 14px/1.25 var(--font-body)',
                color: 'var(--text-primary)',
              }}
            >
              {t.lang}
            </div>
            <div
              style={{
                font: '400 12.5px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {langName}
            </div>
          </div>
          <UiIcon icon="arrowRight" size="20" />
        </button>{' '}
        <button
          onClick={toggleTheme}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 0',
            border: 'none',
            borderBottom: '1px solid var(--border-default)',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          <div style={{ flex: '1' }}>
            <div
              style={{
                font: '600 14px/1.25 var(--font-body)',
                color: 'var(--text-primary)',
              }}
            >
              {t.themeL}
            </div>
            <div
              style={{
                font: '400 12.5px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {themeName}
            </div>
          </div>
          <span
            style={{
              position: 'relative',
              width: '48px',
              height: '28px',
              borderRadius: '999px',
              background: thTog.togBg,
              flex: '0 0 auto',
              transition: 'background-color 200ms var(--motion-grow-ease)',
            }}
          >
            <span
              style={{
                position: 'absolute',
                top: '3px',
                left: thTog.x,
                width: '22px',
                height: '22px',
                borderRadius: '999px',
                background: 'var(--earth-paper)',
                transition: 'left 200ms var(--motion-grow-ease)',
              }}
            />
          </span>
        </button>{' '}
        <button
          onClick={prof.row3}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '14px 0',
            border: 'none',
            background: 'none',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          <div style={{ flex: '1' }}>
            <div
              style={{
                font: '600 14px/1.25 var(--font-body)',
                color: 'var(--text-primary)',
              }}
            >
              {prof.row3L}
            </div>
            <div
              style={{
                font: '400 12.5px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {prof.row3S}
            </div>
          </div>
          <UiIcon icon="arrowRight" size="20" />
        </button>
      </div>
      <div className="kk-host-x" style={{ width: '100%' }}>
        <RhizaButton variant="ghost" size="lg" onClick={reset} {...wide}>
          {t.reset}
        </RhizaButton>
      </div>
    </div>
  );
}
