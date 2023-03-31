import React, { useState } from "react";

const Card = ({ item, readTimeCount, bookmarkedItem }) => {
  const { author_name, title, author_image, cover_image, time, publish_date } =
    item;
  const [isBookmarked, setIsBookmarked] = useState(false);
  return (
    <div className="mb-14 pb-10 border-b">
      <img
        className="w-full max-h-[420px] rounded"
        src={cover_image}
        alt={title}
      />
      <div className="mt-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            className="w-14 h-14 rounded-full"
            src={author_image}
            alt={`author ${author_name}`}
          />
          <div>
            <h3 className="text-2xl font-bold mb-1">{author_name}</h3>
            <p className="text-gray-400">{publish_date}</p>
          </div>
        </div>
        <p className="text-gray-400 text-lg flex items-center gap-1">
          <span>{time} min read</span>
          <span
            onClick={() => {
              setIsBookmarked(true);
              bookmarkedItem(title);
            }}
            className="cursor-pointer hover:text-gray-600"
            title="bookmark"
          >
            {!isBookmarked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#121212"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            )}
          </span>
        </p>
      </div>
      <h2 className="mt-4 text-[40px] leading-[60px] font-bold w-[90%]">
        {title}
      </h2>
      <p className="text-gray-500 my-4 text-lg">
        #beginners &nbsp; #programming
      </p>
      <p className="text-primary underline text-lg">
        <span className="cursor-pointer" onClick={() => readTimeCount(time)}>
          Mark as read
        </span>
      </p>
    </div>
  );
};

export default Card;
