import matter from "gray-matter";
import "zx/globals";

function devideMetaInfo(file: string): matter.GrayMatterFile<string> {
  return matter.read(file);
}

async function sendToClipboard(content: string) {
  // Mac
  await $`echo ${content} | pbcopy`.quiet();
}

void (async function () {
  const metaInfo = devideMetaInfo("./sample.md");
  await sendToClipboard(metaInfo.content);
})();
