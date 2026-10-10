import * as core from "#core";

export const palette = core.Palette({
  default: {},
  dimmed: { foreground: core.Color("#506070") },
  bright: { foreground: core.Color("#ffee6c") },
  string: { foreground: core.Color("#85cd79") },
  literal: { foreground: core.Color("#d787cd") },
  function: { foreground: core.Color("#5dafec") },
  link: { foreground: core.Color("#5dafec") },
  bold: { bold: true },
  italic: { italic: true },
});
