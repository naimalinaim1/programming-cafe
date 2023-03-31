import React from "react";
import BookMarkedItem from "../BookMarkedItem/BookMarkedItem";

const BookMarked = ({ bookmarked }) => {
  return (
    <div className="mt-6 bg-gray-100 py-4 px-2 rounded">
      <h2 className="text-3xl font-bold mt-4 mb-7">
        Bookmarked Blogs: {bookmarked.length}
      </h2>
      {bookmarked.map((item, index) => (
        <BookMarkedItem key={index} item={item} />
      ))}
    </div>
  );
};

export default BookMarked;
