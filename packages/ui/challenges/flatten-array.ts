import { CodeChallenge } from "./types";

const flattenArray: CodeChallenge = {
  id: "flatten-array",
  title: "Flatten Array",
  description:
    "Write a function that accepts a multi dimensional array and returns a flattened version.",
  tests: [
    {
      input: [[1, 2, [3, [4], 5, 6], 7]],
      output: [1, 2, 3, 4, 5, 6, 7]
    }
  ]
};

export default flattenArray;
