import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useRef } from "react";
import CHALLENGES from "../../challenges";
import { Head } from "../../components/Head";
import { Nav } from "../../components/Nav";
import { isEqual } from "lodash";

const MonacoEditor = dynamic(() => import("react-monaco-editor"), {
  ssr: false
});

export default function ChallengePage() {
  const {
    query: { id }
  } = useRouter();

  const challenge = CHALLENGES.find(c => c.id === id);

  const codeRef = useRef("() => {}");

  function evaluateSolution() {
    try {
      if (challenge) {
        const givenFn = eval(codeRef.current);

        if (typeof givenFn !== "function") {
          throw new Error("Submission must be a function");
        }

        for (const test of challenge.tests) {
          const givenOutput = givenFn(...test.input);
          if (!isEqual(givenOutput, test.output)) {
            throw new Error(
              `Given input: ${JSON.stringify(
                test.input
              )}. Expected output: ${JSON.stringify(
                test.output
              )}. Got: ${JSON.stringify(givenOutput)}`
            );
          }
        }

        alert("Success!");
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div>
      <Head title={challenge ? challenge.title : "Challenge"} />
      <Nav />
      <div className="container-fluid">
        {challenge && (
          <>
            <div className="row">
              <div className="col-md-3">
                <h2>{challenge.title}</h2>
                <p>{challenge.description}</p>
              </div>
              <div className="col-md-9">
                <MonacoEditor
                  height="600"
                  language="javascript"
                  theme="vs-dark"
                  value={codeRef.current}
                  onChange={newCode => (codeRef.current = newCode)}
                  editorDidMount={e => e.focus()}
                />
                <button className="btn btn-primary" onClick={evaluateSolution}>
                  Check Solution
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
