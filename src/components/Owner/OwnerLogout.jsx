import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { useStateValue } from "../../State/StateProvider";
function OwnerLogout() {
  const history = useHistory();
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    axios.post("http://localhost:8000/owner/logout").then((response) => {
      if (response.data.error) {
        return alert(response.data.error);
      } else {
        dispatch({ type: "REMOVE_OWNER_FROM_STATE" });
        return history.push("/owner-login");
      }
    });
  }, []);
  return null;
}

export default OwnerLogout;
