import axios from "axios";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../State/StateProvider";

export default function useMethod() {
  const [state, dispatch] = useStateValue();
  const history = useHistory();
  // ================================
  // ================================
  const addToCustomerCart = async (product_id) => {
    try {
      if (state.customer) {
        if (
          state.customer.carts.filter(
            (product) => product.product_id == product_id
          ).length == 0
        ) {
          await axios
            .post("http://localhost:8000/customer/create-customer-cart", {
              product_id: product_id,
            })
            .then((response) => {
              dispatch({
                type: "ADD_PRODUCT_TO_CUSTOMER_CART",
                cart: response.data.cart,
              });
            })
            .catch((e) => alert(e.message));
        }
        return;
      }
      return alert("login first");
    } catch (e) {
      return alert(e.message);
    }
  };

  const changeCartQuantity = async (cart_id, previous_quantity, type) => {
    if (previous_quantity == 1 && type == "decrement") {
      return;
    }
    try {
      axios
        .post("http://localhost:8000/customer/change-cart-quantity", {
          cart_id: cart_id,
          previous_quantity: previous_quantity,
          type: type,
        })
        .then((response) => {
          dispatch({
            type: "ADD_CARTS_TO_CUSTOMER_CART",
            carts: response.data.carts,
          });
        })
        .catch((e) => alert(e.message));
    } catch (e) {
      return alert(e.message);
    }
  };

  const removeCartFromCustomerCart = async (cart_id) => {
    try {
      await axios
        .post("http://localhost:8000/customer/remove-cart-from-customer-cart", {
          cart_id: cart_id,
        })
        .then((response) => {
          dispatch({
            type: "ADD_CARTS_TO_CUSTOMER_CART",
            carts: response.data.carts,
          });
          if (state.customer.carts.length == 0) return history.push("/");
        });
    } catch (e) {
      return alert(e.message);
    }
  };

  const deleteCustomerCarts = async (fromWhere) => {
    try {
      if (fromWhere == "server") {
        axios
          .post("http://localhost:8000/customer/delete-customer-cart")
          .then(() => {
            dispatch({
              type: "DELETE_CUSTOMER_CARTS",
            });
            history.push("/");
          })
          .catch((e) => alert(e.message));
      } else {
        dispatch({
          type: "DELETE_CUSTOMER_CARTS",
        });
        history.push("/");
      }
    } catch (e) {
      return alert(e.message);
    }
  };

  const createOrder = async (carts, delivery_date) => {};

  return {
    createOrder,
    addToCustomerCart,
    removeCartFromCustomerCart,
    deleteCustomerCarts,
    changeCartQuantity,
  };
}
