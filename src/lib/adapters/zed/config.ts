import * as $config from "#core/config";
import * as $rule from "#core/rule";
import * as $zedRule from "./rule.js";
import * as $zedStyle from "./style.js";

export type ZedConfig<Capture extends string> = Partial<
  Record<Capture, $zedStyle.ZedStyle>
>;

export const deriveDefault = <Capture extends string>(
  captures: ReadonlyArray<Capture>,
): ZedConfig<Capture> =>
  fromZedRules(
    captures.map((capture) =>
      $zedRule.create(capture, $zedStyle.mergeStyles([])),
    ),
  );

export const fromRules = <Capture extends string>(
  rules: Array<$rule.Rule<Capture>>,
): ZedConfig<Capture> => fromZedRules($zedRule.fromRules(rules));

const create = <Capture extends string>(
  config: ZedConfig<Capture>,
): ZedConfig<Capture> => config;

const fromZedRules = <Capture extends string>(
  rules: Array<$zedRule.ZedRule<Capture>>,
): ZedConfig<Capture> =>
  rules.reduce((acc, rule) => {
    acc[rule.capture] = rule.style;
    return acc;
  }, create<Capture>({}));

export const toConfig = <Capture extends string>(
  config: ZedConfig<Capture>,
): $config.Config =>
  $config.create({ language: "json", config: JSON.stringify(config, null, 2) });

export const captures = [
  "attribute",
  "boolean",
  "comment",
  "comment.doc",
  "constant",
  "constant.builtin",
  "constructor",
  "embedded",
  "emphasis",
  "emphasis.strong",
  "enum",
  "function",
  "hint",
  "keyword",
  "label",
  "link_text",
  "link_uri",
  "number",
  "operator",
  "predictive",
  "preproc",
  "primary",
  "property",
  "punctuation",
  "punctuation.bracket",
  "punctuation.delimiter",
  "punctuation.list_marker",
  "punctuation.special",
  "string",
  "string.escape",
  "string.regex",
  "string.special",
  "string.special.symbol",
  "tag",
  "tag.doctype",
  "text.literal",
  "title",
  "type",
  "type.builtin",
  "variable",
  "variable.special",
  "variable.parameter",
  "variant",
] as const;
