import * as $palette from "#core/palette";
import * as $color from "#core/color";

export const palette = $palette.create({
  foreground: {
    dimmed: $color.create("#a0a0a0"),
    bright: $color.create("#6e6600"),
    string: $color.create("#315d00"),
    literal: $color.create("#9538bb"),
    function: $color.create("#1494E4"),
    link: $color.create("#1494E4"),
  },
  background: {
    bright: $color.create("#fffab4"),
    string: $color.create("#ebfcd6"),
    literal: $color.create("#f6ebfa"),
  },
});
