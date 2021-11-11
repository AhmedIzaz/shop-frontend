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

  const createOrder = async (e, delivery_date) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/customer/create-order", {
        carts: state.customer.carts,
        delivery_date: delivery_date,
      })
      .then((response) => {
        if (response.data.error) {
          return alert(response.data.error.message);
        }
        return deleteCustomerCarts("client");
      })
      .catch((e) => {
        return alert(e.message);
      });
  };

  const delete_owner_product = async (product_id) => {
    try {
      await axios
        .post("http://localhost:8000/owner/delete-product", { id: product_id })
        .then((response) => {
          if (response.status == 200) {
            dispatch({
              type: "DELETE_PRODUCT_FROM_STATE",
              products: state.products.filter(
                (product) => product.id != product_id
              ),
            });
            return;
          }
          return alert("cant delete the product");
        })
        .catch((e) => alert(e.message));
    } catch (e) {
      return alert(e.message);
    }
  };

  const clearOrder = async (customer_id) => {
    try {
      let product_id_list = [];
      await state.owner.order_list.map((info) => {
        if (info.customer_id == customer_id) {
          info.customer_orders.map((order) =>
            product_id_list.push(order.product_id)
          );
        }
      });

      await axios
        .post("http://localhost:8000/owner/clear-order", {
          product_id_list: product_id_list,
          customer_id: customer_id,
        })
        .then((response) => {
          let order_list = state.owner.order_list.filter(
            (info) => info.customer_id != customer_id
          );
          dispatch({
            type: "ADD_ORDERS_TO_OWNER",
            order_list: order_list,
          });
          return history.push("/owner/dashboard");
        })
        .catch((e) => alert(e.message));
    } catch (e) {
      alert(e.message);
    }
  };

  return {
    createOrder,
    delete_owner_product,
    clearOrder,
    addToCustomerCart,
    removeCartFromCustomerCart,
    deleteCustomerCarts,
    changeCartQuantity,
  };
}
