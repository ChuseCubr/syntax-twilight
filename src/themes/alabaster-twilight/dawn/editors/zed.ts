import * as $config from "#config-adapter/zed";
import * as $group from "#core/group";
import * as $palette from "../palette.js";

const dimmed = $config.createGroup([
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
const bright = $config.createGroup(["comment", "comment.doc"]);
const string = $config.createGroup(["string"]);
const literal = $config.createGroup([
  "boolean",
  "constant",
  "constant.builtin",
  "number",
  "string.escape",
  "string.regex",
  "string.special",
  "string.special.symbol",
]);
const function_ = $config.createGroup(["function"]);

export const config = {
  ...$config.DEFAULT_CONFIG,
  ...$config.fromRules([
    ...$group.applyStyle(bright, $palette.background.bright),
    ...$group.applyStyle(literal, $palette.background.literal),
    ...$group.applyStyle(string, $palette.background.string),

    ...$group.applyStyle(bright, $palette.foreground.bright),
    ...$group.applyStyle(dimmed, $palette.foreground.dimmed),
    ...$group.applyStyle(function_, $palette.foreground.function_),
    ...$group.applyStyle(literal, $palette.foreground.literal),
    ...$group.applyStyle(string, $palette.foreground.string),
  ]),
};
