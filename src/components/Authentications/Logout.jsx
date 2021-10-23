import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../State/StateProvider";
import axios from "axios";
function Logout() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    axios
      .post("http://localhost:8000/customer/customer-logout")
      .then((response) => {
        if (response.data.error) {
          return alert(response.data.error);
        } else {
          dispatch({ type: "REMOVE_CUSTOMER_FROM_STATE" });
          return history.push("/login");
        }
      });
  }, []);
  return null;
}

export default Logout;
