export const InitialState = {
  customer: null,
  categories: [],
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

    case "REMOVE_PRODUCT_FROM_CART":
      return {
        ...state,
        cart: action.cart,
      };

    case "DELETE_CART":
      return {
        ...state,
        cart: [],
      };

    case "ADD_PRODUCTS_TO_STATE":
      return {
        ...state,
        products: action.products,
      };

    case "ADD_CATEGORIES_TO_STATE":
      return {
        ...state,
        categories: action.categories,
      };

    case "ADD_CUSTOMER_TO_STATE":
      return {
        ...state,
        customer: { ...action.customer },
      };

    case "ADD_CART_TO_CUSTOMER":
      return {
        ...state,
        customer: { ...state.customer, carts: action.carts },
      };

    case "REMOVE_CUSTOMER_FROM_STATE":
      return {
        ...state,
        customer: null,
      };
    default:
      return state;
  }
};

export default Reducer;
