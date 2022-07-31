import React from "react";
import { GlobalStyle } from "../src/styles/globalStyle";
import { Header } from "../src/components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
