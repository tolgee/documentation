export const formatPrice = (price: number) => {
  return price.toLocaleString(undefined, {
    style: 'currency',
    currency: 'eur',
  });
};
