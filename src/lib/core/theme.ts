import * as $group from "./group.js";
import * as $palette from "./palette.js";
import * as $rule from "./rule.js";
import * as $style from "./style.js";

export const define = <
  Foreground extends string,
  Background extends string,
  Capture extends string,
>(
  _captures: ReadonlyArray<Capture>,
  theme: Theme<Foreground, Background, Capture>,
): Theme<Foreground, Background, Capture> => theme;

export type Theme<
  Foreground extends string,
  Background extends string,
  Capture extends string,
> = {
  colors: $palette.Palette<Foreground, Background>;
  mapping: {
    colors: Partial<Record<Foreground | Background, $group.Group<Capture>>>;
    bold: $group.Group<Capture>;
    italic: $group.Group<Capture>;
  };
};

export const toRules = <
  Foreground extends string,
  Background extends string,
  Capture extends string,
>(
  theme: Theme<Foreground, Background, Capture>,
): Array<$rule.Rule<Capture>> =>
  [
    $palette
      .foregrounds(theme.colors)
      .map(([group, color]) =>
        theme.mapping.colors[group]
          ? $group.applyStyle(
              theme.mapping.colors[group],
              $style.Foreground(color),
            )
          : [],
      )
      .flat(),
    $palette
      .backgrounds(theme.colors)
      .map(([group, color]) =>
        theme.mapping.colors[group]
          ? $group.applyStyle(
              theme.mapping.colors[group],
              $style.Background(color),
            )
          : [],
      )
      .flat(),
    $group.applyStyle(theme.mapping.bold, $style.Bold()),
    $group.applyStyle(theme.mapping.italic, $style.Italic()),
  ].flat();
