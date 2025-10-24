import { db, Chapter, eq } from "astro:db";

const DEFAULT_USER_AGENT = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:137.0) Gecko/20100101 Firefox/137.0",
};
const SJP_JSON_REGEX = /episode-json.+ data-value='(.+)'>/gm;

export async function getPagesFromWebsite(rawSrc: string) {
  const srcURL = new URL(rawSrc);
  return Promise.any([
    db
      .select()
      .from(Chapter)
      .where(eq(Chapter.sourceURL, rawSrc))
      .then((it) => it[0]?.pagesURLs as string),
    scrape(srcURL, rawSrc),
  ]);
}

function scrape(srcURL: URL, rawSrc: string): Promise<string> | undefined {
  switch (srcURL.host) {
    case "shonenjumpplus.com": {
      return fetch(rawSrc, { headers: DEFAULT_USER_AGENT })
        .then((it) => it.text())
        .then((it) =>
          it
            .match(SJP_JSON_REGEX)
            ?.at(0)
            ?.split("'")
            .at(-2)
            ?.replaceAll("&quot;", '"'),
        )
        .then((it) => JSON.parse(it!))
        .then(
          (it) =>
            it["readableProduct"]["pageStructure"]["pages"] as Array<
              { src: string } & Record<string, unknown>
            >,
        )
        .then((json) =>
          JSON.stringify(json.filter((it) => it.src !== undefined).map((it) => it.src)),
        );
    }
    case "ynjn.jp": {
      const paths = srcURL.pathname.split("/");
      const chapterID = paths.at(3);
      const mangaID = paths.at(2);
      return fetch(`https://webapi.ynjn.jp/viewer?titleId=${mangaID}&episodeId=${chapterID}&viewerOnly=0`)
        .then(it => it.json())
        .then((json: any) => json.data.pages
          .filter((it: any) => it.manga_page?.page_image_url !== undefined)
          .map((it: any) => it.manga_page.page_image_url as string) as string[])
        .then(it => JSON.stringify(it));
    }
    default:
      return undefined;
  }
}
