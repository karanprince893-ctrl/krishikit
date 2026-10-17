import { RhizaBadge, RhizaButton } from '../../design-system';

export default function AgriDoctorScreen({ vm }) {
  const { addBordeaux, t } = vm;
  return (
    <div
      data-screen-label="24 Agri-doctor"
      style={{
        padding: '0 18px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
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
          padding: '14px 16px',
          marginBottom: '6px',
        }}
      >
        <span
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '999px',
            background: 'var(--surface-inverse)',
            color: 'var(--text-inverse)',
            display: 'grid',
            placeItems: 'center',
            font: '700 16px/1 var(--font-display)',
            flex: '0 0 auto',
          }}
        >
          SB
        </span>
        <div style={{ flex: '1', minWidth: '0' }}>
          <div style={{ font: '600 15px/1.25 var(--font-body)' }}>{t.agri}</div>
          <div
            style={{
              font: '400 12px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
            }}
          >
            {t.agriShort}
          </div>
        </div>
        <div className="kk-host-x" style={{ display: 'contents' }}>
          <RhizaBadge status="available" label={t.online} />
        </div>
      </div>
      <div
        style={{
          maxWidth: '86%',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '16px 16px 16px 4px',
          padding: '12px 14px',
          font: '400 14px/1.5 var(--font-body)',
        }}
      >
        {t.ch1}
      </div>
      <div
        style={{
          maxWidth: '86%',
          alignSelf: 'flex-end',
          background: 'var(--action-primary)',
          color: 'var(--text-inverse)',
          borderRadius: '16px 16px 4px 16px',
          padding: '12px 14px',
          font: '400 14px/1.5 var(--font-body)',
        }}
      >
        {t.ch2}
      </div>
      <div
        style={{
          maxWidth: '86%',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '16px 16px 16px 4px',
          padding: '12px 14px',
          font: '400 14px/1.5 var(--font-body)',
        }}
      >
        {t.ch3}
        <div style={{ marginTop: '10px' }}>
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaButton variant="signal" size="sm" onClick={addBordeaux}>
              {t.getNow}
            </RhizaButton>
          </div>
        </div>
      </div>
    </div>
  );
}
