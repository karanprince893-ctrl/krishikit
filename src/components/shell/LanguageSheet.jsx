export default function LanguageSheet({ vm }) {
  const { closeLang, langs, t } = vm;
  return (
    <>
      <div
        onClick={closeLang}
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
          gap: '10px',
        }}
      >
        <span
          style={{
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            background: 'var(--border-default)',
            alignSelf: 'center',
            marginBottom: '6px',
          }}
        />
        <div
          style={{
            font: '700 20px/1.2 var(--font-display)',
            letterSpacing: '-0.4px',
          }}
        >
          {t.pickLang}
        </div>
        <div
          style={{
            font: '400 13px/1.4 var(--font-body)',
            color: 'var(--text-secondary)',
            marginBottom: '4px',
          }}
        >
          {t.langNote}
        </div>
        {langs.map((lg, i) => (
          <button
            onClick={lg.pickClose}
            style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'center',
              width: '100%',
              textAlign: 'left',
              padding: '14px 16px',
              borderRadius: '16px',
              border: lg.bd,
              background: 'var(--surface-canvas)',
              cursor: 'pointer',
            }}
            key={i}
          >
            <span
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '999px',
                border: `2px solid ${lg.ring}`,
                display: 'grid',
                placeItems: 'center',
                flex: '0 0 auto',
              }}
            >
              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '999px',
                  background: lg.dot,
                }}
              />
            </span>
            <span
              style={{
                flex: '1',
                font: '600 16px/1.2 var(--font-body)',
                color: 'var(--text-primary)',
              }}
            >
              {lg.n}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
