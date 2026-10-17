import UiIcon from '../../components/UiIcon';
import ProductTile from '../../components/ProductTile';

export default function FarmerHomeScreen({ vm }) {
  const {
    addBordeaux,
    camLeaf,
    camSoil,
    cd,
    deals,
    go,
    homeCats,
    lchip,
    openLang,
    probs,
    prof,
    promoDots,
    promoX,
    promos,
    rec,
    t,
  } = vm;
  return (
    <div data-screen-label="05 Farmer home" style={{ paddingBottom: '24px' }}>
      <div
        data-keep-light=""
        style={{
          background: 'var(--surface-inverse)',
          color: 'var(--text-inverse)',
          padding: '6px 18px 18px',
          borderRadius: '0 0 24px 24px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: '1', minWidth: '0' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                font: '500 10.5px/1.2 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--canopy-mist)',
              }}
            >
              <UiIcon icon="truck" size="14" tone="mist" />
              {t.etaK}
            </div>
            <div
              style={{
                font: '700 24px/1.1 var(--font-display)',
                letterSpacing: '-0.7px',
                marginTop: '4px',
              }}
            >
              {t.etaT}
            </div>
            <div
              style={{
                font: '400 12.5px/1.4 var(--font-body)',
                color: 'var(--canopy-mist)',
                marginTop: '2px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              <span className="kk-interp">{t.village}</span> · Survey 118/2B
            </div>
          </div>
          <button
            onClick={openLang}
            aria-label={t.lang}
            style={{
              height: '44px',
              minWidth: '44px',
              padding: '0 12px',
              borderRadius: '13px',
              border: '1px solid var(--border-on-dark)',
              background: 'none',
              color: 'var(--text-inverse)',
              font: '600 14px/1 var(--font-body)',
              cursor: 'pointer',
              flex: '0 0 auto',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <UiIcon icon="languages" size="18" tone="bone" />
            {lchip}
          </button>
          <button
            onClick={go.profile}
            aria-label={t.profile}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '999px',
              border: 'none',
              background: 'var(--earth-bone)',
              color: 'var(--canopy-core)',
              font: '700 17px/1 var(--font-display)',
              cursor: 'pointer',
              flex: '0 0 auto',
            }}
          >
            {prof.init}
          </button>
        </div>
        <button
          onClick={go.shop}
          style={{
            marginTop: '14px',
            width: '100%',
            height: '52px',
            borderRadius: '14px',
            border: 'none',
            background: 'var(--earth-paper)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            padding: '0 8px 0 16px',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              flex: '1',
              font: '400 15px/1 var(--font-body)',
              color: 'var(--earth-bark)',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {t.srch1}
          </span>
          <span
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '11px',
              background: 'var(--canopy-100)',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <UiIcon icon="mic" size="20" tone="core" />
          </span>
        </button>
      </div>
      <div style={{ padding: '16px 18px 0' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'flex',
              transform: `translateX(${promoX})`,
              transition: 'transform 600ms var(--motion-grow-ease)',
            }}
          >
            {promos.map((pm, i) => (
              <div
                style={{
                  flex: '0 0 100%',
                  minHeight: '168px',
                  background: pm.bg,
                  color: pm.fg,
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
                key={i}
              >
                <span
                  style={{
                    position: 'absolute',
                    right: '-30px',
                    top: '50%',
                    width: '170px',
                    height: '170px',
                    marginTop: '-85px',
                    borderRadius: '999px',
                    border: `1px solid ${pm.ring}`,
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '0',
                    top: '50%',
                    width: '110px',
                    height: '110px',
                    marginTop: '-55px',
                    borderRadius: '999px',
                    border: `1px solid ${pm.ring}`,
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    right: '28px',
                    top: '50%',
                    marginTop: '-26px',
                    width: '52px',
                    height: '52px',
                    borderRadius: '999px',
                    background: pm.chipBg,
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  <UiIcon icon={pm.ic} size="26" tone={pm.icTone} />
                </span>
                <span
                  style={{
                    font: '500 10.5px/1.2 var(--font-mono)',
                    letterSpacing: '1px',
                    padding: '5px 8px',
                    borderRadius: '8px',
                    background: pm.tagBg,
                  }}
                >
                  {pm.k}
                </span>
                <div
                  style={{
                    font: '700 22px/1.12 var(--font-display)',
                    letterSpacing: '-0.6px',
                    marginTop: '10px',
                    maxWidth: '220px',
                    textWrap: 'pretty',
                  }}
                >
                  {pm.t}
                </div>
                <div
                  style={{
                    font: '400 13px/1.4 var(--font-body)',
                    marginTop: '6px',
                    maxWidth: '210px',
                    color: pm.sub,
                  }}
                >
                  {pm.s}
                </div>
                <button
                  onClick={pm.go}
                  style={{
                    marginTop: 'auto',
                    height: '40px',
                    padding: '0 14px',
                    borderRadius: '12px',
                    border: 'none',
                    background: pm.btnBg,
                    color: pm.btnFg,
                    font: '600 13px/1 var(--font-body)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    position: 'relative',
                  }}
                >
                  {pm.cta}
                  <UiIcon icon="arrowRight" size="16" tone={pm.btnTone} />
                </button>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '6px',
            marginTop: '10px',
          }}
        >
          {promoDots.map((d, i) => (
            <button
              onClick={d.pick}
              aria-label={d.l}
              style={{
                width: d.w,
                height: '6px',
                borderRadius: '999px',
                border: 'none',
                padding: '0',
                background: d.bg,
                cursor: 'pointer',
                transition: 'width 300ms var(--motion-grow-ease)',
              }}
              key={i}
            />
          ))}
        </div>
        <button
          onClick={addBordeaux}
          style={{
            marginTop: '14px',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--status-attention)',
            border: 'none',
            borderRadius: '16px',
            padding: '12px 12px 12px 14px',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          <span
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'var(--surface-card)',
              display: 'grid',
              placeItems: 'center',
              flex: '0 0 auto',
            }}
          >
            <UiIcon icon="droplet" size="20" tone="clay" />
          </span>
          <span style={{ flex: '1', minWidth: '0' }}>
            <span
              style={{
                display: 'block',
                font: '600 14px/1.25 var(--font-body)',
                color: 'var(--text-primary)',
              }}
            >
              {t.sprayGoodT}
            </span>
            <span
              style={{
                display: 'block',
                font: '400 12px/1.35 var(--font-body)',
                color: 'var(--text-secondary)',
                marginTop: '2px',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {t.winTask}
            </span>
          </span>
          <span
            style={{
              font: '500 13px/1 var(--font-mono)',
              color: 'var(--text-primary)',
              background: 'var(--surface-card)',
              borderRadius: '8px',
              padding: '7px 8px',
            }}
          >
            <span className="kk-interp">{cd.h}</span>:
            <span className="kk-interp">{cd.m}</span>:
            <span className="kk-interp">{cd.s}</span>
          </span>
        </button>
        <div
          style={{
            font: '700 18px/1.2 var(--font-display)',
            letterSpacing: '-0.3px',
            margin: '26px 0 12px',
          }}
        >
          {t.cats}
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
            gap: '12px 8px',
          }}
        >
          {homeCats.map((c, i) => (
            <button
              onClick={c.pick}
              style={{
                background: 'none',
                border: 'none',
                padding: '0',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
              key={i}
            >
              <span
                style={{
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: '16px',
                  background: c.bg,
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                {c.art}
                {c.hasTag ? (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-6px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--clay-core)',
                      color: 'var(--earth-soil)',
                      font: '500 9px/1 var(--font-mono)',
                      letterSpacing: '.5px',
                      padding: '4px 6px',
                      borderRadius: '6px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {c.tag}
                  </span>
                ) : null}
              </span>
              <span
                style={{
                  font: '600 11.5px/1.25 var(--font-body)',
                  color: 'var(--text-primary)',
                  textAlign: 'center',
                }}
              >
                {c.n}
              </span>
            </button>
          ))}
        </div>
        <div
          style={{
            marginTop: '26px',
            background: 'var(--surface-card)',
            border: '1px solid var(--border-default)',
            borderRadius: '20px',
            padding: '16px 0 16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0 16px',
            }}
          >
            <span
              style={{
                flex: '1',
                font: '700 18px/1.2 var(--font-display)',
                letterSpacing: '-0.3px',
              }}
            >
              {t.dealT}
            </span>
            <span
              style={{
                font: '400 12px/1 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.endsIn}
            </span>
            <span
              style={{
                font: '500 13px/1 var(--font-mono)',
                color: 'var(--earth-soil)',
                background: 'var(--clay-core)',
                borderRadius: '8px',
                padding: '6px 8px',
              }}
            >
              <span className="kk-interp">{cd.h}</span>:
              <span className="kk-interp">{cd.m}</span>:
              <span className="kk-interp">{cd.s}</span>
            </span>
          </div>
          <div
            className="kk-rail"
            style={{
              display: 'flex',
              gap: '10px',
              overflowX: 'auto',
              padding: '14px 16px 0',
              scrollbarWidth: 'none',
            }}
          >
            {deals.map((item, i) => (
              <div style={{ flex: '0 0 148px', display: 'flex' }} key={i}>
                <ProductTile item={item} style={{ width: '148px' }} />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={go.pb1}
          data-keep-light=""
          style={{
            marginTop: '14px',
            width: '100%',
            textAlign: 'left',
            border: 'none',
            cursor: 'pointer',
            background: 'var(--surface-dark)',
            color: 'var(--text-inverse)',
            borderRadius: '20px',
            padding: '18px',
            display: 'flex',
            gap: '14px',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <span style={{ flex: '1', position: 'relative' }}>
            <span
              style={{
                display: 'block',
                font: '500 10.5px/1.2 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--text-on-dark-muted)',
              }}
            >
              <span className="kk-interp">{t.newPlan}</span> ·{' '}
              <span className="kk-interp">{t.newPlanS}</span>
            </span>
            <span
              style={{
                display: 'block',
                font: '700 19px/1.2 var(--font-display)',
                letterSpacing: '-0.4px',
                marginTop: '6px',
              }}
            >
              {t.planBanT}
            </span>
            <span
              style={{
                display: 'block',
                font: '400 13px/1.4 var(--font-body)',
                color: 'var(--text-on-dark-muted)',
                marginTop: '4px',
              }}
            >
              {t.planBanS}
            </span>
          </span>
          <span
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '999px',
              background: 'var(--earth-bone)',
              display: 'grid',
              placeItems: 'center',
              flex: '0 0 auto',
            }}
          >
            <UiIcon icon="arrowRight" size="22" tone="core" />
          </span>
        </button>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
            gap: '8px',
            marginTop: '14px',
          }}
        >
          <button
            onClick={camSoil}
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '16px',
              padding: '12px',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <UiIcon icon="scan" size="22" tone="core" />
            <span>
              <span
                style={{
                  display: 'block',
                  font: '600 14px/1.2 var(--font-body)',
                  color: 'var(--text-primary)',
                }}
              >
                {t.scanSoil}
              </span>
              <span
                style={{
                  display: 'block',
                  font: '400 12px/1.3 var(--font-body)',
                  color: 'var(--text-secondary)',
                }}
              >
                {t.scanSoilS}
              </span>
            </span>
          </button>
          <button
            onClick={camLeaf}
            style={{
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '16px',
              padding: '12px',
              cursor: 'pointer',
              textAlign: 'left',
            }}
          >
            <UiIcon icon="bug" size="22" tone="core" />
            <span>
              <span
                style={{
                  display: 'block',
                  font: '600 14px/1.2 var(--font-body)',
                  color: 'var(--text-primary)',
                }}
              >
                {t.scanLeaf}
              </span>
              <span
                style={{
                  display: 'block',
                  font: '400 12px/1.3 var(--font-body)',
                  color: 'var(--text-secondary)',
                }}
              >
                {t.scanLeafS}
              </span>
            </span>
          </button>
        </div>
        <div
          style={{
            font: '700 18px/1.2 var(--font-display)',
            letterSpacing: '-0.3px',
            margin: '26px 0 12px',
          }}
        >
          {t.shopBy}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {probs.map((pr, i) => (
            <button
              onClick={go.shop}
              style={{
                minHeight: '44px',
                padding: '0 14px',
                borderRadius: '12px',
                border: '1.5px solid var(--border-default)',
                background: 'var(--surface-card)',
                font: '600 13px/1.3 var(--font-body)',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
              key={i}
            >
              {pr}
            </button>
          ))}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '26px 0 12px',
          }}
        >
          <span
            style={{
              flex: '1',
              font: '700 18px/1.2 var(--font-display)',
              letterSpacing: '-0.3px',
            }}
          >
            {t.bestT}
          </span>
          <button
            onClick={go.shop}
            style={{
              background: 'none',
              border: 'none',
              font: '600 14px/1 var(--font-body)',
              color: 'var(--canopy-core)',
              cursor: 'pointer',
              padding: '12px 0',
            }}
          >
            {t.viewAll}
          </button>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '10px',
          }}
        >
          {rec.map((item, i) => (
            <ProductTile item={item} key={i} />
          ))}
        </div>
        <div
          style={{
            font: '700 18px/1.2 var(--font-display)',
            letterSpacing: '-0.3px',
            margin: '26px 0 12px',
          }}
        >
          {t.offers}
        </div>
        <div
          className="kk-rail"
          style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            margin: '0 -18px',
            padding: '0 18px',
            scrollbarWidth: 'none',
          }}
        >
          <div
            style={{
              flex: '0 0 228px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ font: '700 16px/1.2 var(--font-display)' }}>
              {t.o1}
            </div>
            <div
              style={{
                font: '400 13px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.o1s}
            </div>
            <span
              style={{
                alignSelf: 'flex-start',
                marginTop: '6px',
                border: '1px dashed var(--border-default)',
                borderRadius: '8px',
                padding: '5px 8px',
                font: '500 10.5px/1 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--canopy-core)',
              }}
            >
              SEASON0
            </span>
          </div>
          <div
            style={{
              flex: '0 0 228px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ font: '700 16px/1.2 var(--font-display)' }}>
              {t.o2}
            </div>
            <div
              style={{
                font: '400 13px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.o2s}
            </div>
            <span
              style={{
                alignSelf: 'flex-start',
                marginTop: '6px',
                border: '1px dashed var(--border-default)',
                borderRadius: '8px',
                padding: '5px 8px',
                font: '500 10.5px/1 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--canopy-core)',
              }}
            >
              SOIL300
            </span>
          </div>
          <div
            style={{
              flex: '0 0 228px',
              background: 'var(--surface-card)',
              border: '1px solid var(--border-default)',
              borderRadius: '20px',
              padding: '18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <div style={{ font: '700 16px/1.2 var(--font-display)' }}>
              {t.o3}
            </div>
            <div
              style={{
                font: '400 13px/1.4 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.o3s}
            </div>
            <span
              style={{
                alignSelf: 'flex-start',
                marginTop: '6px',
                border: '1px dashed var(--border-default)',
                borderRadius: '8px',
                padding: '5px 8px',
                font: '500 10.5px/1 var(--font-mono)',
                letterSpacing: '1px',
                color: 'var(--canopy-core)',
              }}
            >
              HARVEST
            </span>
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
            gap: '8px',
            marginTop: '26px',
            padding: '14px 0',
            borderTop: '1px solid var(--border-default)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              textAlign: 'center',
            }}
          >
            <UiIcon icon="shield" size="20" tone="core" />
            <span
              style={{
                font: '600 11.5px/1.3 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.trust1}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              textAlign: 'center',
            }}
          >
            <UiIcon icon="scan" size="20" tone="core" />
            <span
              style={{
                font: '600 11.5px/1.3 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.trust2}
            </span>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '6px',
              textAlign: 'center',
            }}
          >
            <UiIcon icon="receipt" size="20" tone="core" />
            <span
              style={{
                font: '600 11.5px/1.3 var(--font-body)',
                color: 'var(--text-secondary)',
              }}
            >
              {t.trust3}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
