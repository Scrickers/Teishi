export function infos(text: string) {
  return console.log("\x1b[36m[ℹ️]\x1b[0m " + text);
}
export function warn(text: string) {
  return console.log("\x1B[31m[⚠️]\x1b[0m " + text);
}
export function consoleGet(req: any) {
  const { url, method } = req;
  if (url == "/" || url == "/favicon.ico") return;
  return infos(`\x1B[31m[\x1b[0m${method}\x1B[31m] : \x1b[36m${url}\x1b[0m`);
}
