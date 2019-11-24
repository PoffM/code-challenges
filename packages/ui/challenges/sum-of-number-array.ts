import { CodeChallenge } from "./types";

const sumOfNumberArray: CodeChallenge = {
  id: "sum-of-number-array",
  description: "Given an array of numbers, return the sum of all the numbers.",
  title: "Sum of Number Array",
  tests: [
    {
      input: [[1, 2, 3]],
      output: 6
    },
    {
      input: [[5, 5]],
      output: 10
    },
    {
      input: [[-5, 5]],
      output: 0
    },
    {
      input: [[]],
      output: 0
    }
  ]
};

export default sumOfNumberArray;
