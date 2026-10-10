import * as core from "#core";
import * as adapter from "#adapters/zed";
import * as palette from "../palette.js";

export const snippet = adapter.toSnippet(
  core.Theme(adapter.captures, {
    palette: palette.palette,
    mapping: {
      default: [...adapter.captures],
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
      bold: ["emphasis.strong", "title"],
      italic: ["emphasis"],
    },
  }),
);
