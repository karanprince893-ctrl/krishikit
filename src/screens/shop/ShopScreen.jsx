import ProductTile from '../../components/ProductTile';

export default function ShopScreen({ vm }) {
  const { allCat, cats, clearCat, shopList, shopTitle, t } = vm;
  return (
    <div data-screen-label="08 Shop" style={{ padding: '0 18px 24px' }}>
      <div
        style={{
          height: '52px',
          borderRadius: '14px',
          border: '1.5px solid var(--border-default)',
          background: 'var(--surface-card)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          font: '400 15px/1 var(--font-body)',
          color: 'var(--text-secondary)',
        }}
      >
        {t.srch2}
      </div>
      <div
        className="kk-rail"
        style={{
          display: 'flex',
          gap: '8px',
          overflowX: 'auto',
          margin: '14px -18px 0',
          padding: '0 18px',
          scrollbarWidth: 'none',
        }}
      >
        <button
          onClick={clearCat}
          style={{
            flex: '0 0 auto',
            height: '44px',
            padding: '0 16px',
            borderRadius: '12px',
            border: `1.5px solid ${allCat.bd}`,
            background: allCat.bg,
            color: allCat.fg,
            font: '600 13px/1 var(--font-body)',
            cursor: 'pointer',
          }}
        >
          {t.all}
        </button>
        {cats.map((c, i) => (
          <button
            onClick={c.pick}
            style={{
              flex: '0 0 auto',
              height: '44px',
              padding: '0 16px',
              borderRadius: '12px',
              border: `1.5px solid ${c.bd}`,
              background: c.bg,
              color: c.fg,
              font: '600 13px/1 var(--font-body)',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
            key={i}
          >
            {c.n}
          </button>
        ))}
      </div>
      <div
        style={{
          font: '700 18px/1.2 var(--font-display)',
          letterSpacing: '-0.3px',
          margin: '22px 0 12px',
        }}
      >
        {shopTitle}
      </div>
      <div
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}
      >
        {shopList.map((item, i) => (
          <ProductTile item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
