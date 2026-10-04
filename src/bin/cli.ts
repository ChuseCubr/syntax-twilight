#!/usr/bin/env node

const extractThemeArg = (args: Array<string>): string => {
  const theme = args[2];
  if (theme === undefined) throw new Error("no theme provided");
  return theme;
};

const getTheme = async (theme: string): Promise<any> => {
  return (await import(`#themes/${theme}`)).theme;
};

const prettyPrint = (x: any) => console.log(JSON.stringify(x, null, 2));

prettyPrint(await getTheme(extractThemeArg(process.argv)));
