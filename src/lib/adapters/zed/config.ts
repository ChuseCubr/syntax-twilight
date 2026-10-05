import * as $config from "#core/config";
import * as $group from "#core/group";
import * as $rule from "#core/rule";
import * as $capture from "./capture.js";
import * as $zedRule from "./rule.js";
import * as $zedStyle from "./style.js";

export type ZedConfig = Partial<Record<$capture.Capture, $zedStyle.ZedStyle>>;
const create = (config: ZedConfig): ZedConfig => config;

export const fromRules = (
  rules: Array<$rule.Rule<$capture.Capture>>,
): ZedConfig => fromZedRules($zedRule.fromRules(rules));

const fromZedRules = (rules: Array<$zedRule.ZedRule>): ZedConfig =>
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
export const toConfig = (config: ZedConfig): $config.Config =>
  $config.create({ language: "json", config: JSON.stringify(config, null, 2) });
