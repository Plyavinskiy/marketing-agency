import React from "react";

import Layout from "../../components/Layout";
import Intro from "./Intro";

function Home() {
  return (
    <Layout>
      <div className="px-32">
        <Intro />
      </div>
    </Layout>
  );
}

export default Home;
