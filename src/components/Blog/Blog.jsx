import React from "react";

const Blog = () => {
  return (
    <div className="w-[96%] max-w-[1440px] mx-auto mb-16">
      <h2 className="text-center text-3xl font-bold">_FAQ</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-y-10">
        <div>
          <h2 className="text-2xl font-bold">1. Props vs state</h2>
          <p className="text-gray-500">
            <strong>Props</strong>: Props are used to pass data from one
            component to another component Props read only.
          </p>
          <p className="text-gray-500">
            <strong>State</strong>: State is a local date storage is local
            component. state read and write only.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">2. How does useState work?</h2>
          <p className="text-gray-500">
            <strong>useState</strong>: Use state in the response hook. It is
            used for data storage and modifiers. It returns an array with two
            values, the first array element is the current value and the second
            element is used to change the current value
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            3. Purpose of useEffect other than fetching data.
          </h2>
          <p className="text-gray-500">
            <strong>useEffect</strong>: in a react hook. it use side effect in a
            components. Another effect I use besides fetching data is
            manipulating the DOM.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold">4. How Does React work?</h2>
          <p className="text-gray-500">
            <strong>React Work</strong>: React JS is a javascript library for
            web application and native user interfaces. React create a a virtual
            DOM. ReactJS stores the virtual DOM tree in memory. By doing this,
            React can apply updates to specific parts of the data tree, which is
            faster.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
