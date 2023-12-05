import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf8");
const lines = input.trim().split("\n");

const digits = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};
// const wordToInt = digits.reduce((acc, w, i) => ({ ...acc, [w]: i + 1 }), {});

const convertToInt = (s) => {
  if (digits[s]) return digits[s];
  else return Number.parseInt(s);
};

const getCalibrationValue = (pattern, line) => {
  const matches = [...line.matchAll(pattern)];
  if (matches.length > 0) {
    const fnum = convertToInt(matches[0][1]);
    const lnum = convertToInt(matches[matches.length - 1][1]);
    const ret = Number(`${fnum}${lnum}`);
    return ret;
  }
  return 0;
};

// const re1 = /(\d)/g;
const re2 = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
let sum2 = 0;
lines.forEach((line) => {
  // const cv1 = getCalibrationValue(re1, line);
  const cv2 = getCalibrationValue(re2, line);
  // sum1 += cv1;
  sum2 += cv2;
});
console.log(sum2);

function part1() {
  return input
    .trim()
    .split("\n")
    .reduce((prev, line) => {
      const numbers = line.replace(/[^\d]/g, "");
      const number = parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`);
      return prev + number;
    }, 0);
}

function part2() {
  const lines = input.trim().split("\n");
  const nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };
  let sum = 0;
  lines.forEach((line) => {
    const matches = [
      ...line.matchAll(/(\d|one|two|three|four|five|six|seven|eight|nine)/g),
    ].map((match) => {
      const num = match[0];
      if (/\d/.test(num)) {
        return parseInt(num);
      } else {
        return nums[num];
      }
    });
    const num = parseInt(`${matches[0]}${matches[matches.length - 1]}`);
    sum += num;
  });
  return sum;
}

// console.log(part2());
