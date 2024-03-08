import React from "react";
import { GlobalStyles } from "./components/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Main } from "./components/Main";
function App() {
  return (
    <GlobalStyles>
      <Header />
      <Main />
      <Footer />
    </GlobalStyles>
  );
}
export default App;
