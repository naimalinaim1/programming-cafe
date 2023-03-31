import React from "react";
import BookMarked from "../BookMarked/BookMarked";
import SpentTime from "../SpentTime/SpentTime";

const Cart = ({ readTime, bookmarked }) => {
  return (
    <div>
      <SpentTime readTime={readTime} />
      <BookMarked bookmarked={bookmarked} />
    </div>
  );
};

export default Cart;
