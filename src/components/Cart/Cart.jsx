import React from "react";
import SpentTime from "../SpentTime/SpentTime";

const Cart = ({ readTime }) => {
  return (
    <div>
      <SpentTime readTime={readTime} />
    </div>
  );
};

export default Cart;
