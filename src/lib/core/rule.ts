import * as $style from "./style.js";

export type Rule<Capture extends string> = {
  capture: Capture;
  style: $style.Style;
};

export const create = <Capture extends string>(
  capture: Capture,
  style: $style.Style,
): Rule<Capture> => ({
  capture,
  style,
});
