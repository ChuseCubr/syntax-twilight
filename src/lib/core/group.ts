import * as $rule from "./rule.js";
import * as $style from "./style.js";

export type Group<Capture extends string> = Array<Capture>;
export const create = <Capture extends string>(
  group: Group<Capture>,
): Group<Capture> => group;

export const createFactory =
  <Captures extends ReadonlyArray<string>>(
    _: Captures,
  ): Factory<Captures[number]> =>
  (group) =>
    group;

type Factory<Capture extends string> = (
  group: Group<Capture>,
) => Group<Capture>;

export const applyStyle = <Capture extends string>(
  group: Group<Capture>,
  style: $style.Style,
) => group.map((capture) => $rule.create(capture, style));
