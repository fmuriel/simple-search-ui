import React, { useEffect, useState } from "react";
import * as ui from "./styles";
import { navMenu } from "../../constants/navMenu";
import { fetchProducts } from "../../helpers/fetchProducts";

const Menu = ({ setRenderedProducts }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e, order) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetchProducts(search).then((products) => {
      setRenderedProducts(products);
    });
  }, [search]);

  return (
    <header className="menu">
      <ui.MenuContainer>
        <h1>ELC</h1>
        <nav>
          {navMenu.map((i, k) => (
            <ui.MenuAnchor href="#" key={k}>
              {i.toUpperCase()}
            </ui.MenuAnchor>
          ))}
        </nav>
      </ui.MenuContainer>
      <ui.SearchContainer>
        <input
          placeholder="Find your product"
          type="text"
          onChange={(e) => handleSearch(e)}
        />
      </ui.SearchContainer>
    </header>
  );
};

export default Menu;
