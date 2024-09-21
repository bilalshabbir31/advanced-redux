import { replaceCart } from "./cartSlice";
import { showNotification } from "./uiSlice";

// action-creator is used for side-effect in redux toolkit
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: "pending",
        title: "sending",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "http://localhost:6060/api/products/add-product",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({items: cart.items, totalQuantiy: cart.totalQuantiy}),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed!.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: "success",
          title: "Sucess...!",
          message: "Sending cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:6060/api/products"
      );
      if(!response.ok) {
        throw new Error("could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(replaceCart(cartData));
    } catch (error) {
      dispatch(
        showNotification({
          status: "error",
          title: "Error!",
          message: "fetching cart data failed!",
        })
      );
    }

  }
}
