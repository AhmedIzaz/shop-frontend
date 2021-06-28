import React, { useState, useEffect } from "react";

export default function Card({ item }) {
  console.log("rendering Card page");

  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    console.log(`${cardItems}`);
  }, [cardItems]);

  return (
    <div>
      <button>Add to card</button>
    </div>
  );
}
