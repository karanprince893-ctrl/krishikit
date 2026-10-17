export default function Toast({ vm }) {
  const { toast } = vm;
  return (
    <div
      style={{
        position: 'absolute',
        left: '16px',
        right: '16px',
        bottom: '88px',
        zIndex: '60',
        background: 'var(--surface-dark)',
        color: 'var(--text-inverse)',
        borderRadius: '14px',
        padding: '14px 16px',
        font: '600 14px/1.35 var(--font-body)',
      }}
    >
      {toast}
    </div>
  );
}
