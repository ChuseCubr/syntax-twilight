import * as $rule from "#core/rule";
import * as $style from "#core/style";
import * as $zedStyle from "./style.js";

export type ZedRule<Capture extends string> = {
  capture: Capture;
  style: $zedStyle.ZedStyle;
};
export const create = <Capture extends string>(
  capture: Capture,
  style: $zedStyle.ZedStyle,
) => ({
  capture,
  style,
});

export const fromRules = <Capture extends string>(
  rules: Array<$rule.Rule<Capture>>,
): Array<ZedRule<Capture>> => {
  const captureToStyles = rules.reduce<Map<Capture, Array<$style.Style>>>(
    (acc, rule) => {
      const styles = acc.get(rule.capture);
      acc.set(rule.capture, [...(styles ?? []), rule.style]);
      return acc;
    },
    new Map(),
  );

  return captureToStyles
    .entries()
    .map(([capture, styles]) => create(capture, $zedStyle.mergeStyles(styles)))
    .toArray();
};
