import Link from "next/link";
import CHALLENGES from "../challenges";

export function FeaturedChallengesList() {
  return (
    <div className="card card-body">
      <h2>Challenges</h2>
      <div className="row">
        {CHALLENGES.map(({ id, title }) => (
          <div className="col-md-3" key={id}>
            <div className="card card-body">
              <h3>
                <Link href={`challenges/${id}`}>
                  <a>{title}</a>
                </Link>
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
