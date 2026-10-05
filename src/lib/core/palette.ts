import * as $color from "./color.js";

export type Palette<
  Foreground extends string,
  Background extends string,
> = Partial<{
  foreground: Record<Foreground, $color.Color>;
  background: Record<Background, $color.Color>;
}>;

export const create = <Foreground extends string, Background extends string>(
  palette: Palette<Foreground, Background>,
): Palette<Foreground, Background> => palette;

export const foregrounds = <Foreground extends string>(
  palette: Palette<Foreground, any>,
): Array<[Foreground, $color.Color]> =>
  palette.foreground ? (Object.entries(palette.foreground) as any) : [];

export const backgrounds = <Background extends string>(
  palette: Palette<any, Background>,
): Array<[Background, $color.Color]> =>
  palette.background ? (Object.entries(palette.background) as any) : [];
