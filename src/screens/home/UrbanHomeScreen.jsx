import rootSparkle from '../../assets/images/root-sparkle.svg';
import { RhizaButton } from '../../design-system';
import UiIcon from '../../components/UiIcon';
import ProductTile from '../../components/ProductTile';

export default function UrbanHomeScreen({ vm }) {
  const { go, kitsList, t, watered } = vm;
  return (
    <div
      data-screen-label="06 Grower home"
      style={{
        padding: '0 18px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <button
        onClick={go.doctor}
        style={{
          height: '52px',
          borderRadius: '14px',
          border: 'none',
          background: 'var(--root-surface)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '0 16px',
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
      <div
        style={{
          background: 'var(--surface-card)',
          border: '1px solid var(--border-default)',
          borderRadius: '20px',
          padding: '18px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start',
        }}
      >
        <span
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'var(--surface-media)',
            display: 'grid',
            placeItems: 'center',
            flex: '0 0 auto',
          }}
        >
          <UiIcon icon="water" size="22" tone="core" />
        </span>
        <div style={{ flex: '1' }}>
          <div style={{ font: '700 17px/1.2 var(--font-display)' }}>
            {t.water}
          </div>
          <div
            style={{
              font: '400 13px/1.45 var(--font-body)',
              color: 'var(--text-secondary)',
              marginTop: '4px',
            }}
          >
            {t.waterS}
          </div>
        </div>
        <div className="kk-host-x" style={{ display: 'contents' }}>
          <RhizaButton variant="primary" size="sm" onClick={watered}>
            {t.doneL}
          </RhizaButton>
        </div>
      </div>
      <button
        onClick={go.services}
        style={{
          width: '100%',
          textAlign: 'left',
          background: 'var(--surface-inverse)',
          color: 'var(--text-inverse)',
          border: 'none',
          borderRadius: '20px',
          padding: '22px',
          cursor: 'pointer',
          display: 'flex',
          gap: '14px',
          alignItems: 'center',
        }}
      >
        <span style={{ flex: '1' }}>
          <span
            style={{
              display: 'block',
              font: '700 20px/1.2 var(--font-display)',
              letterSpacing: '-0.4px',
            }}
          >
            {t.svcT}
          </span>
          <span
            style={{
              display: 'block',
              font: '400 13px/1.45 var(--font-body)',
              color: 'var(--canopy-mist)',
              marginTop: '6px',
            }}
          >
            {t.svcS}
          </span>
        </span>
        <UiIcon icon="arrowRight" size="22" tone="bone" />
      </button>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          marginTop: '16px',
        }}
      >
        {t.kits}
      </div>
      <div
        style={{
          font: '400 13px/1.4 var(--font-body)',
          color: 'var(--text-secondary)',
          marginTop: '-6px',
        }}
      >
        {t.kitsS}
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
      >
        {kitsList.map((item, i) => (
          <ProductTile item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
