import * as $color from "./color.js";

export type Style = Foreground | Background | Italic | Bold;

export const Foreground = (color: $color.Color): Style => ({
  tag: "foreground",
  value: color,
});
export const Background = (color: $color.Color): Style => ({
  tag: "background",
  value: color,
});
export const Bold = (): Style => ({
  tag: "bold",
});
export const Italic = (): Style => ({
  tag: "italic",
});

export const match = <T>(
  style: Style,
  arms: {
    onForeground: (color: $color.Color) => T;
    onBackground: (color: $color.Color) => T;
    onItalic: () => T;
    onBold: () => T;
  },
): T => {
  switch (style.tag) {
    case "foreground":
      return arms.onForeground(style.value);
    case "background":
      return arms.onBackground(style.value);
    case "bold":
      return arms.onBold();
    case "italic":
      return arms.onItalic();
  }
};

type Foreground = { tag: "foreground"; value: $color.Color };
type Background = { tag: "background"; value: $color.Color };
type Bold = { tag: "bold" };
type Italic = { tag: "italic" };
