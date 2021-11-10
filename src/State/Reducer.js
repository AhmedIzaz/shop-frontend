export const InitialState = {
  owner: null,
  customer: null,
  categories: [],
  products: [],
  cart: [],
};

const Reducer = (state, action) => {
  switch (action.type) {
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

    case "ADD_OWNER_PRODUCTS_ORDERS_AND_CUSTOMERS_TO_STATE":
      return {
        ...state,
        owner: {
          ...action.owner,
          order_list: action.order_list,
          products: action.products,
          customers: action.customers,
        },
      };

    case "ADD_ORDERS_TO_OWNER":
      return {
        ...state,
        owner: {
          ...state.owner,
          order_list: action.order_list,
        },
      };
    case "REMOVE_OWNER_FROM_STATE":
      return {
        ...state,
        owner: null,
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
