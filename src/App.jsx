import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faSquare } from "@fortawesome/free-solid-svg-icons";
import Info from "./Info";
import About from "./About.jsx";
import Interests from "./Interests.jsx";
import Footer from "./Footer.jsx";

library.add(fab, faEnvelope, faSquare);
export default function App() {
  return (
    <>
      <Info />
      <About />
      <Interests />
      <Footer />
    </>
  );
}
