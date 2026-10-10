/** For enforcing invariants */
declare const brand: unique symbol;
type Branded<T> = T & { [brand]: T };

/** The target output of adapters; allows for different formats */
export type Snippet = { language: string; text: string };
export const Snippet = (snippet: Snippet): Snippet => snippet;

/**
 * The canonical theme configuration format
 *
 * @see {@link Palette}
 * @see {@link Mapping}
 */
export type Theme<Key extends string, Capture extends string> = {
  palette: Palette<Key>;
  mapping: Mapping<NoInfer<Key>, Capture>;
};
export const Theme = <Key extends string, Capture extends string>(
  _captures: ReadonlyArray<Capture>,
  theme: Theme<Key, NoInfer<Capture>>,
): Theme<Key, Capture> => theme;

/** A mapping of style names to editor-specific captures/scopes/groups */
export type Mapping<PaletteKey extends string, Capture extends string> = Record<
  PaletteKey,
  Array<Capture>
>;

/** A collection of named styles */
export type Palette<Key extends string> = Record<Key, Style>;
export const Palette = <Key extends string>(
  palette: Palette<Key>,
): Palette<Key> => palette;

/** The canonical portable style format */
export type Style = Partial<{
  foreground: Color;
  background: Color;
  bold: boolean;
  italic: boolean;
}>;
export const Style = (style: Style): Style => style as any;

const colorFormat = /^#[a-fA-F0-9]{6}$/;
/** A 6-digit HEX color code */
export type Color = Branded<string>;
export const Color = (color: string): Color => {
  switch (colorFormat.test(color)) {
    case true:
      return color as any;
    case false:
      throw new Error(`invalid color: ${color}`);
  }
};

/** A helper for typed iteration over objects */
export const keys = <K extends PropertyKey>(obj: Record<K, any>): Array<K> =>
  Object.keys(obj) as any;

/** A helper for typed iteration over objects */
export const entries = <K extends PropertyKey, V>(
  obj: Record<K, V>,
): Array<[K, V]> => Object.entries(obj) as any;
