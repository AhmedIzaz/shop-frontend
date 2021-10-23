import { useStateValue } from "../State/StateProvider";

export default function useMethod() {
  const [state, dispatch] = useStateValue();

  const addToCartHandler = (id) => {
    if (state.customer) {
      const product = state.products.filter((product) => product.id == id)[0];

      if (state.cart.filter((item) => item.id == product.id).length == 0) {
        dispatch({
          type: "ADD_PRODUCT_TO_CART",
          item: {
            id: product.id,
            product_name: product.product_name,
            quantity: 1,
            picture: product.picture,
            price: product.price,
          },
        });
      }
      return null;
    }
    return alert("before add to cart , please login");
  };

  const removeFromCart = async (id) => {
    const new_cart = await state.cart.filter((item) => item.id !== id);
    dispatch({
      type: "REMOVE_PRODUCT_FROM_CART",
      cart: new_cart,
    });
  };

  const deleteCart = () => {
    dispatch({
      type: "DELETE_CART",
    });
  };

  return { addToCartHandler, removeFromCart, deleteCart };
}
