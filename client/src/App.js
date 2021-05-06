import "./App.css";
import React, { useState } from "react";
import SearchResults from "./components/SearchResults";
import Menu from "./components/Menu";

function App() {
  const [renderedProducts, setRenderedProducts] = useState();

  return (
    <div className="App">
      <Menu setRenderedProducts={setRenderedProducts} />
      <SearchResults renderedProducts={renderedProducts} />
    </div>
  );
}

export default App;
