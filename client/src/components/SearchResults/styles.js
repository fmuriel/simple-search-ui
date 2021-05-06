import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeIn = keyframes`
from {opacity: 0}
to {opacity: 1}
`;

export const SearchResultsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem 15rem;
  opacity: 0.1;
  animation: ${fadeIn} 1.5s forwards;
`;

export const ItemContainer = styled.div`
  flex-basis: 30%;
  padding: 1rem;
`;

export const TitleContainer = styled.div`
  margin-bottom: 1rem;
`;

export const TagsList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;

export const ItemTitle = styled.h3`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  min-height: 4.2rem;
`;

export const ItemDetails = styled.div`
  margin-bottom: 2rem;
  p {
    margin-top: 0;
  }
`;

export const SuperContainer = styled.div`
  height: 450px;
`;

export const ItemImage = styled.div`
  display: flex;
  justify-content: center;
`;

export const ItemPrice = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 1rem;
  border-top: 1px solid darkgrey;
  border-bottom: 1px solid darkgrey;
  p {
    font-size: 1.5rem;
  }
`;

export const PurchaseButton = styled.button`
  font-family: Helvetica;
  border: none;
  background-color: ${(props) => (props.active === "true" ? "black" : "grey")};
  cursor: ${(props) => (props.active === "true" ? "pointer" : "not-allowed")};
  color: white;
  font-size: 1rem;
`;

export const NotFoundMsg = styled.div`
  display: flex;
  justify-content: center;
  p {
    font-size: 3rem;
  }
`;
