import { RhizaButton } from '../../design-system';

export default function CtaBar({ vm }) {
  const { cta, t, wide } = vm;
  return (
    <div
      style={{
        position: 'sticky',
        bottom: '0',
        zIndex: '6',
        padding: '12px 18px 16px',
        background: 'var(--surface-canvas)',
        borderTop: '1px solid var(--border-default)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      {cta.hasTotal ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            marginBottom: '2px',
          }}
        >
          <span
            style={{
              font: '400 14px/1 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            {t.total}
          </span>
          <span
            style={{
              font: '500 20px/1 var(--font-mono)',
              color: 'var(--canopy-core)',
            }}
          >
            {cta.totalV}
          </span>
        </div>
      ) : null}
      <div className="kk-host-x" style={{ width: '100%' }}>
        <RhizaButton variant={cta.p.v} size="lg" onClick={cta.p.on} {...wide}>
          {cta.p.l}
        </RhizaButton>
      </div>
      {cta.hasS ? (
        <div className="kk-host-x" style={{ width: '100%' }}>
          <RhizaButton variant={cta.s.v} size="md" onClick={cta.s.on} {...wide}>
            {cta.s.l}
          </RhizaButton>
        </div>
      ) : null}
    </div>
  );
}
