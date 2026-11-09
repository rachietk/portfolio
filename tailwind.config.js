const c = n => `rgb(var(--${n}) / <alpha-value>)`;
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { bg: c('bg'), panel: c('panel'), line: c('line'), ink: c('ink'), mute: c('mute'), chip: c('chip'), ok: c('ok'), accent: c('accent') },
    fontFamily: { sans: ['Figtree', 'system-ui', 'sans-serif'], serif: ['Instrument Serif', 'Georgia', 'serif'], mono: ['JetBrains Mono', 'ui-monospace', 'monospace'] } } },
};
