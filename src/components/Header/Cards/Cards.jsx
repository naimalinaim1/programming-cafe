import React, { useEffect, useState } from "react";
import Card from "../../Card/Card";

const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-[98%] max-w-[1440px] mx-auto mt-8 grid grid-cols-1 md:grid-cols-[4fr_2fr]">
      {/* single data display */}
      <div className="pr-6">
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <div className="bg-primary">asdf</div>
    </div>
  );
};

export default Cards;
