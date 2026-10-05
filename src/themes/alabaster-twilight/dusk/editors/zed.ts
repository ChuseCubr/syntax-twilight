import * as $zedConfig from "#config-adapter/zed";
import * as $group from "#core/group";
import * as $palette from "../palette.js";

const dimmed = $zedConfig.createGroup([
  "hint",
  "keyword",
  "operator",
  "predictive",
  "preproc",
  "punctuation",
  "punctuation.bracket",
  "punctuation.delimiter",
  "punctuation.list_marker",
  "punctuation.special",
]);
const bright = $zedConfig.createGroup(["comment", "comment.doc"]);
const string = $zedConfig.createGroup(["string"]);
const literal = $zedConfig.createGroup([
  "boolean",
  "constant",
  "constant.builtin",
  "number",
  "string.escape",
  "string.regex",
  "string.special",
  "string.special.symbol",
]);
const function_ = $zedConfig.createGroup(["function"]);

export const config = $zedConfig.toConfig({
  ...$zedConfig.DEFAULT_CONFIG,
  ...$zedConfig.fromRules([
    ...$group.applyStyle(bright, $palette.foreground.bright),
    ...$group.applyStyle(dimmed, $palette.foreground.dimmed),
    ...$group.applyStyle(function_, $palette.foreground.function_),
    ...$group.applyStyle(literal, $palette.foreground.literal),
    ...$group.applyStyle(string, $palette.foreground.string),
  ]),
});
