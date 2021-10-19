export const InitialState = {
  customer: null,
  products: [],
  cart: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "ADD_PRODUCTS_TO_STATE":
      return {
        ...state,
        products: action.products,
      };
    case "ADD_CUSTOMER_TO_STATE":
      return {
        ...state,
        customer: action.customer,
      };
    default:
      return state;
  }
};

export default Reducer;