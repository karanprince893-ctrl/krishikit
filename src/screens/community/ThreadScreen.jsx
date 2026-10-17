import { RhizaBadge } from '../../design-system';

export default function ThreadScreen({ vm }) {
  const { go, t, thread } = vm;
  return (
    <div
      data-screen-label="11 Thread"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
        }}
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
            }}
          >
            {thread.i}
          </span>
          <div>
            <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
              {thread.a}
            </div>
            <div
              style={{
                font: '400 12px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {thread.meta}
            </div>
          </div>
        </div>
        <div style={{ font: '700 18px/1.3 var(--font-display)' }}>
          {thread.t}
        </div>
        <p
          style={{
            margin: '6px 0 0',
            font: '400 14px/1.5 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          {thread.b}
        </p>
      </div>
      <div
        style={{
          marginLeft: '18px',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
        }}
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
              background: 'var(--surface-inverse)',
              color: 'var(--text-inverse)',
              display: 'grid',
              placeItems: 'center',
              font: '700 13px/1 var(--font-display)',
              flex: '0 0 auto',
            }}
          >
            SB
          </span>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
              {t.agri}
            </div>
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
            <RhizaBadge status="available" label={t.verified} />
          </div>
        </div>
        <p
          style={{
            margin: '0',
            font: '400 14px/1.5 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          {t.ch3}
        </p>
      </div>
      <div
        style={{
          marginLeft: '18px',
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
        }}
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
            }}
          >
            VR
          </span>
          <div>
            <div style={{ font: '600 14px/1.25 var(--font-body)' }}>
              Vasanti Rai
            </div>
            <div
              style={{
                font: '400 12px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              Kedila · 2 h
            </div>
          </div>
        </div>
        <p
          style={{
            margin: '0',
            font: '400 14px/1.5 var(--font-body)',
            color: 'var(--text-secondary)',
          }}
        >
          {t.c1r}
        </p>
      </div>
      <button
        onClick={go.doctor}
        style={{
          marginTop: '6px',
          height: '52px',
          borderRadius: '14px',
          border: '1.5px solid var(--border-default)',
          background: 'var(--surface-card)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          cursor: 'pointer',
          textAlign: 'left',
          font: '400 15px/1 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.askCom}
      </button>
    </div>
  );
}
