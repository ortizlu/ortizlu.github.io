import React from "react";

import Circle from "../components/Circle/Circle";
import Footer from "../components/Footer/Footer";
import Head from "../components/Head/Head";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";

const IndexPage = () => {
  return (
    <main>
      <Head />
      <Header />
      <Projects />
      <Circle />
      <Footer />
    </main>
  );
};

export default IndexPage;
