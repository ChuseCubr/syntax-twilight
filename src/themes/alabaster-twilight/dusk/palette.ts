import * as $palette from "#core/palette";
import * as $color from "#core/color";

export const palette = $palette.create({
  foreground: {
    dimmed: $color.create("#506070"),
    bright: $color.create("#ffee6c"),
    string: $color.create("#85cd79"),
    literal: $color.create("#d787cd"),
    function: $color.create("#5dafec"),
    link: $color.create("#5dafec"),
  },
});
