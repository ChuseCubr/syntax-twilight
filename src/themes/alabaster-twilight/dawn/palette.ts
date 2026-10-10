import * as core from "#core";

export const palette = core.Palette({
  default: {},
  dimmed: { foreground: core.Color("#a0a0a0") },
  bright: {
    foreground: core.Color("#6e6600"),
    background: core.Color("#fffab4"),
  },
  string: {
    foreground: core.Color("#315d00"),
    background: core.Color("#ebfcd6"),
  },
  literal: {
    foreground: core.Color("#9538bb"),
    background: core.Color("#f6ebfa"),
  },
  function: { foreground: core.Color("#1494E4") },
  link: { foreground: core.Color("#1494E4") },
  bold: { bold: true },
  italic: { italic: true },
});
