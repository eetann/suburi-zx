import "zx/globals";

const options = [
  "s3://mybucket",
  "--recursive",
  "--human-readable",
  "--summarize",
];

await $`aws s3 ls ${options}`;
