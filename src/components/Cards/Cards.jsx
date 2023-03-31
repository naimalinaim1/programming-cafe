import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Cards = () => {
  const [data, setData] = useState([]);
  const [readTime, setReadTime] = useState(0);
  const [bookmarked, setBookmarked] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const readTimeCount = (time) => {
    setReadTime(readTime + time);
  };

  const bookmarkedItem = (newItem) => {
    setBookmarked([...bookmarked, newItem]);
  };

  return (
    <div className="relative w-[98%] max-w-[1440px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-[4fr_2fr]">
      {/* single data display */}
      <div className="pr-6">
        {data.map((item) => (
          <Card
            key={item.id}
            item={item}
            readTimeCount={readTimeCount}
            bookmarkedItem={bookmarkedItem}
          />
        ))}
      </div>
      {/* side bar */}
      <div className="sticky top-5 h-screen">
        <Cart readTime={readTime} bookmarked={bookmarked} />
      </div>
    </div>
  );
};

export default Cards;
