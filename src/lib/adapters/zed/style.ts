import * as $style from "#core/style";

const create = (style: ZedStyle): ZedStyle => style;
export type ZedStyle = Partial<{
  color: ZedColorCode;
  background_color: ZedColorCode;
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

export type ZedColorCode = string & { __brand: "ZedColorCode" };
const ZedColorCode = (colorCode: $style.ColorCode): ZedColorCode =>
  `${colorCode}ff` as any;

const FONT_WEIGHT = {
  bold: 700,
} as const;
