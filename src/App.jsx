import { useKrishiKit } from './app/useKrishiKit';
import { readStartState } from './app/startState';
import { SCREEN_COMPONENTS } from './screens';
import AppHeader from './components/shell/AppHeader';
import BottomNav from './components/shell/BottomNav';
import CameraOverlay from './components/shell/CameraOverlay';
import CartBar from './components/shell/CartBar';
import CtaBar from './components/shell/CtaBar';
import LanguageSheet from './components/shell/LanguageSheet';
import ScanSheet from './components/shell/ScanSheet';
import Toast from './components/shell/Toast';

const startState = readStartState();

// Phone-sized app frame: scrollable viewport (header + current screen + sticky bars),
// bottom nav, and overlays (scan sheet, language sheet, camera, toast).
export default function App() {
  const vm = useKrishiKit(startState);
  const { screen } = vm;
  const Screen = SCREEN_COMPONENTS[screen];

  return (
    <div
      data-theme={vm.theme}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 12px',
        background: 'var(--kk-page)',
        transition: 'background-color 300ms var(--motion-grow-ease)',
      }}
    >
      <div
        data-screen-label="KrishiKit app"
        style={{
          position: 'relative',
          width: '390px',
          maxWidth: '100%',
          height: 'min(820px, calc(100vh - 32px))',
          background: 'var(--surface-canvas)',
          border: '1px solid var(--border-default)',
          borderRadius: '34px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className="kk-vp"
          ref={vm.vpRef}
          style={{
            flex: '1 1 auto',
            overflowY: 'auto',
            position: 'relative',
            scrollbarWidth: 'none',
          }}
        >
          <div
            style={{
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {vm.hdr.show ? <AppHeader vm={vm} /> : null}
            <div style={{ flex: '1 0 auto' }}>
              {Screen ? <Screen vm={vm} /> : null}
            </div>
            {vm.showCartBar ? <CartBar vm={vm} /> : null}
            {vm.cta.show ? <CtaBar vm={vm} /> : null}
          </div>
        </div>
        {vm.showNav ? <BottomNav vm={vm} /> : null}
        {vm.sheet ? <ScanSheet vm={vm} /> : null}
        {vm.langSheet ? <LanguageSheet vm={vm} /> : null}
        {vm.camOn ? <CameraOverlay vm={vm} /> : null}
        {vm.hasToast ? <Toast vm={vm} /> : null}
      </div>
    </div>
  );
}
