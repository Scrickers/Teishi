import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";
import { getImg, endpoints, checkUrl } from "./src/function.ts";
import { port, urls } from "./config.ts";
import { consoleGet, infos } from "./src/console.ts";

const s = serve({ port: port });

infos(
  `\x1b[35mAPI Teishi actuellement activé sur l'url \x1b[32m${urls}\x1b[0m 🦕`,
);

for await (const req of s) {
  consoleGet(req);
  const { url } = req;
  if (checkUrl("img", url)) {
    const reponse = await serveFile(req, "./src/" + url);
    req.respond(reponse);
  } else if (checkUrl("api", url)) {
    if (endpoints(url)) {
      req.respond({
        body: JSON.stringify({
          url: getImg(endpoints(url))[
            Math.round(Math.random() * (getImg(endpoints(url)).length - 1))
          ],
        }),
        status: 200,
      });
    } else {
      req.respond({
        status: 404,
        body: JSON.stringify({
          url: "Lien incorrect",
        }),
      });
    }
  } else {
    req.respond({
      status: 303,
      body: JSON.stringify({
        url: `Lien correct ${urls}/api/v1/{{endpoints}}`,
      }),
    });
  }
}
