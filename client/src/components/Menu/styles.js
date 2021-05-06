import styled from "styled-components";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #040a2b;
  color: white;
  padding: 0 20rem;
`;

export const MenuAnchor = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  &:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  border-top: 1px solid black;
  border-bottom: 1px solid darkgrey;
  input {
    font-family: "Playfair Display", serif, Arial, Helvetica;
    padding-left: 1rem;
    flex-grow: 3;
    font-size: 2rem;
    text-transform: uppercase;
    border: none;
    padding: 1rem 0;
    width 90%;
  }
`;

export const FilterButton = styled.button`
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  background-color: #040a2b;
  color: white;
  flex-grow: 1;
  width: 100%;
  height: 100%;
`;
