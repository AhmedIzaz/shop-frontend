import React, { useEffect, useState } from "react";

export default function Profile({ item }) {
  const [cardItem, setCardItem] = useState([]);

  useEffect(() => {
    setCardItem((previousItems) => [...previousItems, item]);
  }, []);

  console.log("rendering customer profile page");

  return (
    <>
      <div className="customer-profile-header">profile</div>
      <div className="card">
        <h3>Customers order card</h3>
        {cardItem.map((item, index) => {
          return (
            <div className="card-item">
              <h4 className="card-item-name">
                {index ? index : ""} {item ? item.product_name : ""}
              </h4>
            </div>
          );
        })}
      </div>
    </>
  );
}
