import * as $rule from "#core/rule";
import * as $style from "#core/style";
import * as $capture from "./capture.js";
import * as $zedStyle from "./style.js";

export type ZedRule = { capture: $capture.Capture; style: $zedStyle.ZedStyle };
export const create = (
  capture: $capture.Capture,
  style: $zedStyle.ZedStyle,
) => ({
  capture,
  style,
});

export const fromRules = (
  rules: Array<$rule.Rule<$capture.Capture>>,
): Array<ZedRule> => {
  const captureToStyles = rules.reduce<
    Map<$capture.Capture, Array<$style.Style>>
  >((acc, rule) => {
    const styles = acc.get(rule.capture);
    acc.set(rule.capture, [...(styles ?? []), rule.style]);
    return acc;
  }, new Map());

  return captureToStyles
    .entries()
    .map(([capture, styles]) => create(capture, $zedStyle.mergeStyles(styles)))
    .toArray();
};
