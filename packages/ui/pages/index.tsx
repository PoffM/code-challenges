import React from "react";
import { FeaturedChallengesList } from "../components/FeaturedChallengesList";
import { Head } from "../components/Head";
import { Nav } from "../components/Nav";

export default function HomePage({ challenges }) {
  return (
    <div>
      <Head title="Home" />
      <Nav />
      <div className="container">
        <FeaturedChallengesList />
      </div>
    </div>
  );
}
