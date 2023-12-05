import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf8");
const lines = input.trim().split("\n");

let sum1 = 0;

lines.forEach((line, index) => {
  const reds = [...line.matchAll(/(\d+) red/g)].map((m) => parseInt(m[1]));
  const greens = [...line.matchAll(/(\d+) green/g)].map((m) => parseInt(m[1]));
  const blues = [...line.matchAll(/(\d+) blue/g)].map((m) => parseInt(m[1]));
  const redMax = Math.max(...reds);
  const greenMax = Math.max(...greens);
  const blueMax = Math.max(...blues);
  const isGameValid = redMax <= 12 && greenMax <= 13 && blueMax <= 14;

  if (isGameValid) {
    sum1 += index + 1;
  }
});
console.log(sum1);
