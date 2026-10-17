import UiIcon from '../UiIcon';

export default function AppHeader({ vm }) {
  const { go, hdr, lchip, openLang, prof, t } = vm;
  return (
    <div
      style={{
        position: 'sticky',
        top: '0',
        zIndex: '8',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '8px 18px 12px',
        background: 'var(--kk-glass)',
        backdropFilter: 'blur(36px)',
        WebkitBackdropFilter: 'blur(36px)',
      }}
    >
      {hdr.hasBack ? (
        <button
          onClick={hdr.back}
          aria-label="Back"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '13px',
            border: '1.5px solid var(--border-default)',
            background: 'var(--surface-card)',
            color: 'var(--canopy-core)',
            cursor: 'pointer',
            flex: '0 0 auto',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <UiIcon icon="chevronLeft" size="22" />
        </button>
      ) : null}
      <div style={{ flex: '1', minWidth: '0' }}>
        <div
          style={{
            font: '700 20px/1.15 var(--font-display)',
            letterSpacing: '-0.5px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {hdr.title}
        </div>
        {hdr.hasSub ? (
          <div
            style={{
              font: '400 12.5px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {hdr.sub}
          </div>
        ) : null}
      </div>
      <button
        onClick={openLang}
        aria-label={t.lang}
        style={{
          height: '44px',
          minWidth: '44px',
          padding: '0 12px',
          borderRadius: '13px',
          border: '1.5px solid var(--border-default)',
          background: 'var(--surface-card)',
          color: 'var(--canopy-core)',
          font: '600 14px/1 var(--font-body)',
          cursor: 'pointer',
          flex: '0 0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        <UiIcon icon="languages" size="18" />
        {lchip}
      </button>
      {hdr.avatar ? (
        <button
          onClick={go.profile}
          aria-label={t.profile}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '999px',
            border: 'none',
            background: 'var(--surface-inverse)',
            color: 'var(--text-inverse)',
            font: '700 17px/1 var(--font-display)',
            cursor: 'pointer',
            flex: '0 0 auto',
          }}
        >
          {prof.init}
        </button>
      ) : null}
    </div>
  );
}
