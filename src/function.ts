import { urls } from "../config.ts";
const { readDirSync } = Deno;

export function getImg(endpoint: string) {
  const lx = [];
  for (const dirEntry of readDirSync("./src/img/" + endpoint)) {
    lx.push(urls + "/img/" + endpoint + "/" + dirEntry.name);
  }
  return lx;
}

export function checkUrl(check: string, value: string) {
  let recheck = "";
  for (let i = 0; i < check.length; i++) {
    const element = check[i];
    recheck += `[${element}]+`;
  }
  const regex = new RegExp(recheck);
  return regex.test(value);
}

export function endpoints(url: string) {
  for (const dirEntry of readDirSync("./src/img/")) {
    if (dirEntry.name == "exemple") continue;
    if (
      checkUrl(dirEntry.name, url)
    ) {
      return dirEntry.name;
    }
  }
  return "";
}
