import { ICON_ALIAS, ICON_PATHS } from './iconPaths';

const TONES = {
  core: 'var(--canopy-core)',
  bone: 'var(--earth-bone)',
  mist: 'var(--canopy-mist)',
  soft: 'var(--canopy-300)',
  inverse: 'var(--text-inverse)',
  primary: 'var(--text-primary)',
  secondary: 'var(--text-secondary)',
  sprout: 'var(--sprout-core)',
  clay: 'var(--clay-core)',
};

/**
 * Stroke icon from the shared 24x24 set. `tone` is a named tone or any CSS colour.
 * The wrapper div mirrors the prototype's component host so layouts are unchanged.
 */
export default function UiIcon({ icon = 'sprout', size = 22, tone, style }) {
  const key = icon || 'sprout';
  const d = ICON_PATHS[ICON_ALIAS[key] || key] || ICON_PATHS.sprout;
  const s = +(size || 22);
  const color = TONES[tone] || tone || TONES.core;
  return (
    <div className="kk-host" style={style}>
      <svg
        width={s}
        height={s}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ display: 'block', flex: '0 0 auto', color }}
      >
        <path d={d} />
      </svg>
    </div>
  );
}
