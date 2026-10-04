import * as $rule from "#core/rule";
import * as $group from "#core/group";
import * as $capture from "./capture.js";
import * as $zedRule from "./rule.js";
import * as $zedStyle from "./style.js";

export type Config = Partial<Record<$capture.Capture, $zedStyle.ZedStyle>>;
const create = (config: Config): Config => config;

export const fromRules = (rules: Array<$rule.Rule<$capture.Capture>>): Config =>
  fromZedRules($zedRule.fromRules(rules));

const fromZedRules = (rules: Array<$zedRule.ZedRule>): Config =>
  rules.reduce((acc, rule) => {
    acc[rule.capture] = rule.style;
    return acc;
  }, create({}));

export const DEFAULT_CONFIG = fromZedRules(
  $capture.CAPTURES.map((capture) =>
    $zedRule.create(capture, $zedStyle.mergeStyles([])),
  ),
);

export const createGroup = $group.createFactory($capture.CAPTURES);
