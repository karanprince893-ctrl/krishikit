import rootSparkle from '../../assets/images/root-sparkle.svg';
import { RhizaBadge, RhizaButton, RhizaCardRoot } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function FeedScreen({ vm }) {
  const {
    feed,
    feedCom,
    feedMine,
    feedTabs,
    go,
    groups,
    posts,
    rootProps,
    rootWhy,
    t,
  } = vm;
  return (
    <div
      data-screen-label="10 Updates"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4px',
          background: 'var(--earth-mist)',
          borderRadius: '14px',
          padding: '4px',
        }}
      >
        {feedTabs.map((ft, i) => (
          <button
            onClick={ft.pick}
            style={{
              height: '40px',
              borderRadius: '11px',
              border: 'none',
              background: ft.bg,
              boxShadow: ft.sh,
              font: '600 14px/1 var(--font-body)',
              color: 'var(--text-primary)',
              cursor: 'pointer',
            }}
            key={i}
          >
            {ft.l}
          </button>
        ))}
      </div>
      {feedMine ? (
        <>
          <button
            onClick={go.doctor}
            style={{
              minHeight: '52px',
              borderRadius: '14px',
              border: 'none',
              background: 'var(--root-surface)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px 16px',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <img src={rootSparkle} alt="" width="15" height="18" />
            <span
              style={{
                flex: '1',
                font: '600 14px/1.3 var(--font-body)',
                color: 'var(--root-text)',
              }}
            >
              {t.askAi}
            </span>
          </button>
          <div data-root-light="" style={{ display: 'flex' }}>
            <div className="kk-host-x" style={{ width: '100%' }}>
              <RhizaCardRoot
                title={t.rootTitle}
                timestamp={t.rootTime}
                suggestion={t.rootText}
                actionLabel={t.moveSpray}
                {...rootProps}
              />
            </div>
          </div>
          {rootWhy ? (
            <div
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: '16px',
                padding: '14px 16px',
                font: '400 13px/1.5 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              <strong style={{ color: 'var(--text-primary)' }}>
                {t.whyShown}
              </strong>
              {t.rootWhyT}
            </div>
          ) : null}
          {feed.map((f, i) => (
            <div
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: '20px',
                padding: '18px',
              }}
              key={i}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '12px',
                    background: 'var(--surface-media)',
                    display: 'grid',
                    placeItems: 'center',
                    flex: '0 0 auto',
                  }}
                >
                  <UiIcon icon={f.ic} size="20" tone="core" />
                </span>
                <span
                  style={{
                    flex: '1',
                    font: '500 10.5px/1.2 var(--font-mono)',
                    letterSpacing: '1px',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {f.k}
                </span>
                <span
                  style={{
                    font: '500 10.5px/1 var(--font-mono)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {f.when}
                </span>
              </div>
              <div
                style={{
                  font: '700 17px/1.3 var(--font-display)',
                  letterSpacing: '-0.2px',
                }}
              >
                {f.t}
              </div>
              <p
                style={{
                  margin: '6px 0 0',
                  font: '400 14px/1.5 var(--font-body)',
                  color: 'var(--text-secondary)',
                  textWrap: 'pretty',
                }}
              >
                {f.b}
              </p>
              {f.price ? (
                <div
                  style={{
                    marginTop: '12px',
                    background: 'var(--surface-canvas)',
                    borderRadius: '12px',
                    padding: '12px',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '10px',
                  }}
                >
                  <div>
                    <div style={{ font: '500 20px/1 var(--font-mono)' }}>
                      ₹48,200
                    </div>
                    <div
                      style={{
                        font: '400 12px/1.3 var(--font-body)',
                        color: 'var(--text-secondary)',
                        marginTop: '4px',
                      }}
                    >
                      {t.perQuintal}
                    </div>
                  </div>
                  <svg width="96" height="34" viewBox="0 0 96 34" fill="none">
                    <polyline
                      points="2,26 14,24 26,27 38,20 50,22 62,15 74,12 94,6"
                      stroke="var(--canopy-core)"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="94" cy="6" r="3.5" fill="var(--clay-core)" />
                  </svg>
                </div>
              ) : null}
              {f.whyOpen ? (
                <div
                  style={{
                    marginTop: '12px',
                    paddingTop: '12px',
                    borderTop: '1px dashed var(--border-default)',
                    font: '400 13px/1.45 var(--font-body)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <strong style={{ color: 'var(--text-primary)' }}>
                    {t.whyShown}
                  </strong>
                  {f.w}
                </div>
              ) : null}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  marginTop: '14px',
                }}
              >
                <div className="kk-host-x" style={{ display: 'contents' }}>
                  <RhizaButton variant="primary" size="sm" onClick={f.act}>
                    {f.actL}
                  </RhizaButton>
                </div>
                <button
                  onClick={f.toggleWhy}
                  style={{
                    height: '44px',
                    padding: '0 14px',
                    border: 'none',
                    background: 'none',
                    font: '600 14px/1 var(--font-body)',
                    color: 'var(--text-primary)',
                    textDecoration: 'underline',
                    cursor: 'pointer',
                  }}
                >
                  {t.why}
                </button>
              </div>
            </div>
          ))}
          <p
            style={{
              margin: '4px 0 0',
              textAlign: 'center',
              font: '400 12px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            {t.feedNote}
          </p>
        </>
      ) : null}
      {feedCom ? (
        <>
          <button
            onClick={go.doctor}
            style={{
              height: '52px',
              borderRadius: '14px',
              border: '1.5px solid var(--border-default)',
              background: 'var(--surface-card)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '0 16px',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <UiIcon icon="users" size="22" tone="core" />
            <span
              style={{
                flex: '1',
                font: '400 15px/1 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.askCom}
            </span>
          </button>
          <div
            className="kk-rail"
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              margin: '0 -18px',
              padding: '0 18px',
              scrollbarWidth: 'none',
            }}
          >
            {groups.map((g, i) => (
              <button
                onClick={g.pick}
                style={{
                  flex: '0 0 auto',
                  height: '44px',
                  padding: '0 16px',
                  borderRadius: '12px',
                  border: `1.5px solid ${g.bd}`,
                  background: g.bg,
                  color: g.fg,
                  font: '600 13px/1 var(--font-body)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
                key={i}
              >
                {g.n}
              </button>
            ))}
          </div>
          {posts.map((p, i) => (
            <div
              style={{
                background: 'var(--surface-card)',
                border: '1px solid var(--border-default)',
                borderRadius: '20px',
                padding: '18px',
              }}
              key={i}
            >
              <div
                style={{
                  display: 'flex',
                  gap: '10px',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <span
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '999px',
                    background: 'var(--surface-media)',
                    color: 'var(--canopy-core)',
                    display: 'grid',
                    placeItems: 'center',
                    font: '700 13px/1 var(--font-display)',
                    flex: '0 0 auto',
                  }}
                >
                  {p.i}
                </span>
                <div style={{ flex: '1', minWidth: '0' }}>
                  <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
                    {p.a}
                  </div>
                  <div
                    style={{
                      font: '400 12px/1.4 var(--font-body)',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {p.meta}
                  </div>
                </div>
                {p.vr ? (
                  <div className="kk-host-x" style={{ display: 'contents' }}>
                    <RhizaBadge status="available" label={t.verified} />
                  </div>
                ) : null}
              </div>
              <div style={{ font: '700 16px/1.35 var(--font-display)' }}>
                {p.t}
              </div>
              <p
                style={{
                  margin: '6px 0 0',
                  font: '400 14px/1.5 var(--font-body)',
                  color: 'var(--text-secondary)',
                }}
              >
                {p.b}
              </p>
              <div
                style={{
                  display: 'flex',
                  gap: '6px',
                  marginTop: '12px',
                  paddingTop: '8px',
                  borderTop: '1px solid var(--border-default)',
                }}
              >
                <button
                  onClick={p.like}
                  style={{
                    height: '44px',
                    padding: '0 10px',
                    border: 'none',
                    background: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    font: '600 13px/1 var(--font-body)',
                    color: p.likeFg,
                    cursor: 'pointer',
                  }}
                >
                  <UiIcon icon="sprout" size="18" tone="core" />
                  <span className="kk-interp">{p.likes}</span>{' '}
                  <span className="kk-interp">{t.helpful}</span>
                </button>
                <button
                  onClick={p.open}
                  style={{
                    height: '44px',
                    padding: '0 10px',
                    border: 'none',
                    background: 'none',
                    font: '600 13px/1 var(--font-body)',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                  }}
                >
                  <span className="kk-interp">{p.rp}</span>{' '}
                  <span className="kk-interp">{t.replies}</span>
                </button>
              </div>
            </div>
          ))}
          <p
            style={{
              margin: '4px 0 0',
              textAlign: 'center',
              font: '400 12px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            {t.comRule}
          </p>
        </>
      ) : null}
    </div>
  );
}
