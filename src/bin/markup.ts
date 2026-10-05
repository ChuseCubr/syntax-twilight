import * as $config from "#core/config";

type Markup = Header | Verbatim;

type Header = { tag: "header"; level: number; text: string };
export const Header = (level: number, text: string): Header => ({
  tag: "header",
  text,
  level,
});
const renderHeader = (header: Header): string =>
  `${"#".repeat(header.level)} ${header.text}\n`;

type Verbatim = { tag: "verbatim"; language: string; text: string };
export const verbatimFromConfig = (config: $config.Config): Verbatim => ({
  tag: "verbatim",
  language: config.language,
  text: config.config,
});
const renderVerbatim = (block: Verbatim): string =>
  "```" + `${block.language}\n${block.text}` + "\n```\n";

export const renderAll = (blocks: Array<Markup>): string =>
  blocks.map(render).join("\n");

export const render = (block: Markup): string => {
  switch (block.tag) {
    case "header":
      return renderHeader(block);
    case "verbatim":
      return renderVerbatim(block);
  }
};
