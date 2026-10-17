import { RhizaBadge } from '../../design-system';
import UiIcon from '../../components/UiIcon';

export default function PartnerDoneScreen({ vm }) {
  const { t } = vm;
  return (
    <div
      data-keep-light=""
      data-screen-label="31 Delivery complete"
      style={{
        background: 'var(--surface-inverse)',
        color: 'var(--text-inverse)',
        padding: '48px 24px 36px',
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
        {t.payoutT}
      </h2>
      <p
        style={{
          margin: '10px 0 16px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--canopy-mist)',
        }}
      >
        {t.dropsToday}
      </p>
      <div className="kk-host-x" style={{ display: 'contents' }}>
        <RhizaBadge status="available" label={t.incT} />
      </div>
    </div>
  );
}
