export const fetchProducts = async (product) => {
  const response = await fetch(
    `http://localhost:8080/api/products?name=${product}`
  );
  const products = await response.json();

  return products;
};
