import { RhizaButton } from '../../design-system';

export default function MoneyScreen({ vm }) {
  const { applySub, camBill, go, t } = vm;
  return (
    <div
      data-screen-label="25 Money"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <div
        style={{
          background: 'var(--surface-inverse)',
          color: 'var(--text-inverse)',
          borderRadius: '20px',
          padding: '22px',
        }}
      >
        <div
          style={{
            font: '500 10.5px/1.2 var(--font-mono)',
            letterSpacing: '1px',
            color: 'var(--canopy-mist)',
          }}
        >
          {t.dueH}
        </div>
        <div
          style={{ font: '500 34px/1 var(--font-mono)', margin: '10px 0 6px' }}
        >
          ₹9,840
        </div>
        <div
          style={{
            font: '400 13px/1.4 var(--font-body)',
            color: 'var(--canopy-mist)',
          }}
        >
          {t.dueDate}
        </div>
        <div
          style={{
            height: '6px',
            borderRadius: '6px',
            background: 'var(--canopy-800)',
            marginTop: '14px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '36%',
              background: 'var(--earth-bone)',
              borderRadius: '6px',
            }}
          />
        </div>
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
      >
        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '16px',
          }}
        >
          <div
            style={{
              font: '500 10px/1.3 var(--font-mono)',
              letterSpacing: '1px',
              color: 'var(--text-secondary)',
            }}
          >
            {t.spent}
          </div>
          <div
            style={{ font: '500 20px/1 var(--font-mono)', marginTop: '8px' }}
          >
            ₹18,420
          </div>
        </div>
        <div
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '16px',
          }}
        >
          <div
            style={{
              font: '500 10px/1.3 var(--font-mono)',
              letterSpacing: '1px',
              color: 'var(--text-secondary)',
            }}
          >
            {t.saved}
          </div>
          <div
            style={{
              font: '500 20px/1 var(--font-mono)',
              marginTop: '8px',
              color: 'var(--canopy-core)',
            }}
          >
            ₹2,280
          </div>
        </div>
      </div>
      <div
        style={{
          background: 'var(--status-attention)',
          borderRadius: '20px',
          padding: '18px',
        }}
      >
        <div
          style={{
            font: '500 10.5px/1.2 var(--font-mono)',
            letterSpacing: '1px',
            color: 'var(--text-secondary)',
          }}
        >
          {t.subsidyH}
        </div>
        <div
          style={{
            font: '700 20px/1.2 var(--font-display)',
            letterSpacing: '-0.4px',
            marginTop: '8px',
          }}
        >
          {t.subT}
        </div>
        <div
          style={{
            font: '400 13px/1.45 var(--font-body)',
            color: 'var(--text-secondary)',
            marginTop: '4px',
          }}
        >
          {t.subsidyS}
        </div>
        <div style={{ marginTop: '12px' }}>
          <div className="kk-host-x" style={{ display: 'contents' }}>
            <RhizaButton variant="signal" size="sm" onClick={applySub}>
              {t.applyH}
            </RhizaButton>
          </div>
        </div>
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
      >
        <button
          onClick={go.orders}
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '16px',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              font: '600 15px/1.25 var(--font-body)',
              color: 'var(--text-primary)',
            }}
          >
            {t.orders}
          </div>
          <div
            style={{
              font: '400 12.5px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '2px',
            }}
          >
            {t.arrivingOne}
          </div>
        </button>
        <button
          onClick={camBill}
          style={{
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '16px',
            textAlign: 'left',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              font: '600 15px/1.25 var(--font-body)',
              color: 'var(--text-primary)',
            }}
          >
            {t.billT}
          </div>
          <div
            style={{
              font: '400 12.5px/1.4 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '2px',
            }}
          >
            {t.billS}
          </div>
        </button>
      </div>
      <div
        style={{
          textAlign: 'center',
          font: '400 12.5px/1.4 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.gstBill}
      </div>
    </div>
  );
}
