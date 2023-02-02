export const formatCurrency = (number: number): string => {
  return number.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
};
