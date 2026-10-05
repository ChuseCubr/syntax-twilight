const colorFormat = /^#[a-fA-F0-9]{6}$/;
export type Color = string & { __brand: "Color" };
export const create = (color: string): Color => {
  if (!colorFormat.test(color)) {
    throw new Error(`invalid color code: ${color}`);
  }
  return color as any;
};
