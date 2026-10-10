#!/usr/bin/env node
import * as twilight from "#themes/alabaster-twilight";
import * as markup from "./markup.js";

const blocks = [
  markup.Header(1, "Alabaster Twilight"),
  markup.Header(2, "Zed"),
  markup.Header(3, "Dusk"),
  markup.verbatimFromSnippet(twilight.theme.dusk.zed),
  markup.Header(3, "Dawn"),
  markup.verbatimFromSnippet(twilight.theme.dawn.zed),
];

const content = markup.renderAll(blocks);
console.log(content);
