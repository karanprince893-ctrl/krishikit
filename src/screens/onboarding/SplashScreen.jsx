export default function SplashScreen({ vm }) {
  const { go, splashArt } = vm;
  return (
    <div
      data-keep-light=""
      data-screen-label="00 Splash"
      onClick={go.landing}
      style={{
        minHeight: 'min(820px, 100vh - 32px)',
        background: 'rgb(31,74,58)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {splashArt}
    </div>
  );
}
