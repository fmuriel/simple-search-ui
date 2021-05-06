import React from "react";
import * as ui from "./styles";

const SearchResults = ({ renderedProducts }) => {
  return (
    <>
      {renderedProducts?.length > 0 ? (
        <ui.SearchResultsContainer>
          {renderedProducts?.map((p, k) => (
            <ui.ItemContainer key={k}>
              <ui.SuperContainer>
                <ui.ItemImage>
                  <img src={p.picture} alt={p.name} />
                </ui.ItemImage>
              </ui.SuperContainer>

              <ui.ItemDetails>
                <ui.TitleContainer>
                  <ui.ItemTitle>{p.name}</ui.ItemTitle>
                  <ui.TagsList>
                    {p.tags.map((t, k) => (
                      <li key={k}>[{t}]</li>
                    ))}
                  </ui.TagsList>
                </ui.TitleContainer>
                <p>{p.about}</p>
              </ui.ItemDetails>

              <ui.ItemPrice>
                <p>${p.price}</p>
                <ui.PurchaseButton
                  active={p.isActive}
                  disabled={p.isActive === false}
                >
                  {p.isActive === "true" ? "Add to bag" : "Sold out"}
                </ui.PurchaseButton>
              </ui.ItemPrice>
            </ui.ItemContainer>
          ))}
        </ui.SearchResultsContainer>
      ) : (
        <ui.NotFoundMsg>
          <p>No items match your search. Please try another product.</p>
        </ui.NotFoundMsg>
      )}
    </>
  );
};

export default SearchResults;
