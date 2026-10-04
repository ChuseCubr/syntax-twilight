import * as $style from "#core/style";

export const foreground = {
  dimmed: $style.Foreground($style.ColorCode("#a0a0a0")),
  bright: $style.Foreground($style.ColorCode("#6e6600")),
  string: $style.Foreground($style.ColorCode("#315d00")),
  literal: $style.Foreground($style.ColorCode("#9538bb")),
  function_: $style.Foreground($style.ColorCode("#1494E4")),
};

export const background = {
  bright: $style.Background($style.ColorCode("#fffab4")),
  string: $style.Background($style.ColorCode("#ebfcd6")),
  literal: $style.Background($style.ColorCode("#f6ebfa")),
};
