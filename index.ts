import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";
import { port, urls } from "./config.ts";
const s = serve({ port: port });
let link = "";
console.log(urls);

for await (const req of s) {
  const { url } = req;
  if (checkUrl("img", url)) {
    const reponse = await serveFile(req, "." + url);
    req.respond(reponse);
  } else if (checkUrl("api", url)) {
    if (checkUrl("yuri", url)) {
      link = getImg("yuri")[
        Math.round(Math.random() * (getImg("yuri").length - 1))
      ];
    } else if (checkUrl("pussy", url)) {
      link = getImg("pussy")[
        Math.round(Math.random() * (getImg("pussy").length - 1))
      ];
    }else if (checkUrl("boobs", url)) {
      link = getImg("boobs")[
        Math.round(Math.random() * (getImg("boobs").length - 1))
      ];
    } else Err(req);
    req.respond({ body: JSON.stringify({ url: link }), status: 200 });
  } else {
    Err(req);
  }
}

function getImg(endpoint: string) {
  const lx = [];
  for (const dirEntry of Deno.readDirSync("./img/" + endpoint)) {
    lx.push(urls + "img/" + endpoint + "/" + dirEntry.name);
  }
  return lx;
}

function checkUrl(check: string, value: string) {
  let recheck = "";
  for (let i = 0; i < check.length; i++) {
    const element = check[i];
    recheck += `[${element}]+`;
  }
  const regex = new RegExp(recheck);
  return regex.test(value);
}
function Err(req: any) {
  req.respond(
    { body: JSON.stringify({ url: "Le lien n'es pas valide" }), status: 404 },
  );
}
