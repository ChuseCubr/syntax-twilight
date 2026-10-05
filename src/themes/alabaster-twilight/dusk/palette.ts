import * as $style from "#core/style";

export const foreground = {
  dimmed: $style.Foreground($style.ColorCode("#506070")),
  bright: $style.Foreground($style.ColorCode("#ffee6c")),
  string: $style.Foreground($style.ColorCode("#85cd79")),
  literal: $style.Foreground($style.ColorCode("#d787cd")),
  function_: $style.Foreground($style.ColorCode("#5dafec")),
  link: $style.Foreground($style.ColorCode("#5dafec")),
} as const;
