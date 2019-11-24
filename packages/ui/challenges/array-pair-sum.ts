import { CodeChallenge } from "./types";

const arrayPairSum: CodeChallenge = {
  id: "array-pair-sum",
  title: "Array Pair Sum",
  description: "Given an integer array, output all distinct pairs that sum up to a specific value k. Consider the fact that the same number can add up to k with its duplicates in the array.",
  tests: [
    {
      input: [10, [3, 4, 5, 6, 7]],
      output: [ [4, 6], [3, 7] ]
    },
    {
      input: [8, [3, 4, 5, 4, 4]],
      output: [ [3, 5], [4, 4], [4, 4], [4, 4] ]
    },
    {
      input: [10, [3, 5, 6, 8]],
      output: []
    }
  ]
}

export default arrayPairSum;