import React, { useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import axios from "axios";
import { useStateValue } from "../../State/StateProvider";
function Logout() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();
  useEffect(async () => {
    await axios
      .post("http://localhost:8000/customer/customer-logout")
      .then((response) => {
        if (response.data.error) {
          return alert(response.data.error);
        } else {
          console.log(response.data);
          dispatch({ type: "REMOVE_CUSTOMER_FROM_STATE" });
          return history.push("/login");
        }
      });
  });
  return (
    <div>{!state.customer ? <Redirect path="/login" /> : "loged out"}</div>
  );
}

export default Logout;
