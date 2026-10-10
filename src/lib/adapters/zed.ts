import * as core from "#core";

declare const brand: unique symbol;
type Branded<T> = T & { [brand]: void };

/**
 * Converts a canonical theme to a Zed syntax theme snippet
 */
export const toSnippet = <Key extends string, Capture extends string>(
  theme: core.Theme<Key, Capture>,
): core.Snippet => {
  const zedTheme = fromModel(theme);
  const snippet = JSON.stringify(zedTheme, null, 2);
  return core.Snippet({ text: snippet, language: "json" });
};

type Theme<Capture extends string> = Partial<Record<Capture, Style>>;
const Theme = <Capture extends string>(theme: Theme<Capture>): Theme<Capture> =>
  theme;

const fromModel = <Key extends string, Capture extends string>(
  theme: core.Theme<Key, Capture>,
): Theme<Capture> => {
  return core.keys(theme.palette).reduce((acc, key) => {
    const captures = theme.mapping[key];
    const part = captures.reduce(
      (acc, capture) => Theme({ ...acc, [capture]: Style(theme.palette[key]) }),
      Theme({}),
    );
    return Theme({
      ...acc,
      ...part,
    });
  }, Theme({}));
};

type Style = Partial<{
  color: Color;
  background_color: Color;
  font_weight: FontWeight;
  font_style: "italic";
}>;
const Style = (style: core.Style): Style => ({
  ...(style.foreground ? { color: Color(style.foreground) } : {}),
  ...(style.background ? { background_color: Color(style.background) } : {}),
  ...(style.bold ? { font_weight: FontWeights.bold } : {}),
  ...(style.italic ? { font_style: "italic" } : {}),
});

type Color = Branded<string>;
const Color = (color: core.Color): Color => (color + "ff") as any;

type FontWeight = (typeof FontWeights)[keyof typeof FontWeights];
const FontWeights = { bold: 700 } as const;

/**
 * Official capture list
 *
 * @see https://zed.dev/docs/extensions/languages#syntax-highlighting
 */
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
