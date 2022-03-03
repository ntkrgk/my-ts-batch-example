import * as fs from "fs";

const main = () => {
  const text = fs.readFileSync("input.txt", "utf8");
  const lines = text.toString().split("\n");

  // 重複排除
  console.log(`重複排除前の行数: ${lines.length}行`);
  const set = new Set(lines);
  console.log(`重複排除後の行数: ${set.size}行`);

  try {
    fs.writeFileSync("output.txt", Array.from(set).join("\n"));
  } catch (e) {
    console.log(e);
  }
};

main();
