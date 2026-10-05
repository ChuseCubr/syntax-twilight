import * as $zedConfig from "#config-adapter/zed";
import * as $theme from "#core/theme";
import * as $palette from "../palette.js";

const theme = $theme.define($zedConfig.captures, {
  colors: $palette.palette,
  mapping: {
    colors: {
      dimmed: [
        "hint",
        "keyword",
        "operator",
        "link_uri",
        "predictive",
        "preproc",
        "punctuation",
        "punctuation.bracket",
        "punctuation.delimiter",
        "punctuation.list_marker",
        "punctuation.special",
      ],
      bright: ["comment", "comment.doc"],
      string: ["string", "text.literal"],
      literal: [
        "boolean",
        "constant",
        "constant.builtin",
        "number",

        // I like to differentiate these concepts from plain strings
        "string.escape",
        "string.regex",
        "string.special",
        "string.special.symbol",
      ],
      function: [
        "function",
        "tag", // JSX/TSX tags can be seen as declarative UI-building functions
      ],
      link: ["link_text"],
    },
    bold: ["emphasis.strong", "title"],
    italic: ["emphasis"],
  },
});

export const config = $zedConfig.toConfig({
  ...$zedConfig.deriveDefault($zedConfig.captures),
  ...$zedConfig.fromRules($theme.toRules(theme)),
});
