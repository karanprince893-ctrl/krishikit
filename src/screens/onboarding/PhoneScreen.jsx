import { RhizaInput } from '../../design-system';

export default function PhoneScreen({ vm }) {
  const { t } = vm;
  return (
    <div data-screen-label="02 Phone" style={{ padding: '4px 18px 16px' }}>
      <div
        style={{
          font: '500 11px/1 var(--font-mono)',
          letterSpacing: '1px',
          color: 'var(--text-secondary)',
        }}
      >
        1 / 3
      </div>
      <h2
        style={{
          margin: '10px 0 0',
          font: '700 30px/1.1 var(--font-display)',
          letterSpacing: '-1px',
        }}
      >
        {t.obPhone}
      </h2>
      <p
        style={{
          margin: '10px 0 24px',
          font: '400 15px/1.5 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.obPhoneS}
      </p>
      <div className="kk-host-x" style={{ display: 'contents' }}>
        <RhizaInput
          label={t.mobLabel}
          placeholder="98765 43210"
          helper={t.mobHelp}
          defaultValue="+91 98765 43210"
          type="tel"
          width="100%"
        />
      </div>
    </div>
  );
}
