export const filterProductByName = (data, productName) =>
  data.filter((itm) => {
    return itm.name.toUpperCase().includes(productName);
  });
