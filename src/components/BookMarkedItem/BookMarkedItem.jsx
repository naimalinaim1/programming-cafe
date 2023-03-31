import React from "react";

const BookMarkedItem = ({ item }) => {
  return (
    <div className="py-3.5 px-2.5 bg-base-100 mb-2 rounded-lg">
      <p className="text-xl font-bold">{item}</p>
    </div>
  );
};

export default BookMarkedItem;
