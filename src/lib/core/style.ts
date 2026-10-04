export type Style = Foreground | Background | Italic | Bold;

export const Foreground = (color: ColorCode): Style => ({
  tag: "foreground",
  value: color,
});
export const Background = (color: ColorCode): Style => ({
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
    onForeground: (color: ColorCode) => T;
    onBackground: (color: ColorCode) => T;
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

type Foreground = { tag: "foreground"; value: ColorCode };
type Background = { tag: "background"; value: ColorCode };
type Bold = { tag: "bold" };
type Italic = { tag: "italic" };

const colorCodeFormat = /^#[a-fA-F0-9]{6}$/;
export type ColorCode = string & { __brand: "ColorCode" };
export const ColorCode = (colorCode: string): ColorCode => {
  if (!colorCodeFormat.test(colorCode)) {
    throw new Error(`invalid color code: ${colorCode}`);
  }
  return colorCode as any;
};
