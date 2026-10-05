import * as $color from "#core/color";
import * as $style from "#core/style";

const create = (style: ZedStyle): ZedStyle => style;
export type ZedStyle = Partial<{
  color: ZedColor;
  background_color: ZedColor;
  font_style: "italic";
  font_weight: typeof FONT_WEIGHT.bold;
}>;

export const mergeStyles = (styles: Array<$style.Style>): ZedStyle =>
  styles.reduce(
    (acc, style) => ({
      ...acc,
      ...$style.match(style, {
        onForeground: (color) => create({ color: ZedColorCode(color) }),
        onBackground: (color) =>
          create({ background_color: ZedColorCode(color) }),
        onBold: () => create({ font_weight: FONT_WEIGHT.bold }),
        onItalic: () => create({ font_style: "italic" }),
      }),
    }),
    create({}),
  );

type ZedColor = string & { __brand: "ZedColor" };
const ZedColorCode = (colorCode: $color.Color): ZedColor =>
  `${colorCode}ff` as any;

const FONT_WEIGHT = {
  bold: 700,
} as const;
