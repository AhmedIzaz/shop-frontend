export const InitialState = {
  customer: null,
  categories: [],
  products: [],
  cart: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
    // ==================================
    // ==================================

    case "ADD_CUSTOMER_AND_CARTS_TO_STATE":
      return {
        ...state,
        customer: {
          ...action.customer,
          carts: action.carts,
        },
      };

    case "ADD_CARTS_TO_CUSTOMER_CART":
      return {
        ...state,
        customer: {
          ...state.customer,
          carts: action.carts,
        },
      };

    case "ADD_PRODUCT_TO_CUSTOMER_CART":
      return {
        ...state,
        customer: {
          ...state.customer,
          carts: [...state.customer.carts, action.cart],
        },
      };

    case "DELETE_CUSTOMER_CARTS":
      return {
        ...state,
        customer: { ...state.customer, carts: [] },
      };

    case "REMOVE_CUSTOMER_FROM_STATE":
      return {
        ...state,
        customer: null,
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

    default:
      return state;
  }
};

export default Reducer;

// case "ADD_CUSTOMER_TO_STATE":
//       return {
//         ...state,
//         customer: { ...action.customer },
//       };

//     case "ADD_CART_TO_CUSTOMER":
//       return {
//         ...state,
//         customer: { ...state.customer, carts: action.carts },
//       };

//
//     case "ADD_PRODUCT_TO_CUSTOMER_CART":
//       return {
//         ...state,
//         customer: {
//           ...state.customer,
//           carts: [...state.customer.carts, action.cart],
//         },
//       };

//     case "REMOVE_PRODUCT_FROM_CUSTOMER_CART":
//       return {
//         ...state,
//         customer: { ...state.customer, carts: action.carts },
//       };

//     case "DELETE_CUSTOMER_CART":
//       return {
//         ...state,
//         customer: { ...state.customer, carts: [] },
//       };
