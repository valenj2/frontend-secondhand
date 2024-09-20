export const selectProducts = (state) => state.cart.products;

export const selectTotalItems = (state) => state.cart.cantidad;

export const selectTotalPrice = (state) => 
  state.cart.products.reduce((total, product) => total + product.precio, 0);

export const isProductInCart = (state, productId) => {
    const products = selectProducts(state);
    return products.some(product => product.id === productId);
  };