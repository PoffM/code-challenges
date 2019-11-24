export interface CodeChallenge {
  id: string;
  title: string;
  description: string;
  tests: CodeChallengeTest[];
}

export interface CodeChallengeTest {
  input: any[];
  output: any;
}
