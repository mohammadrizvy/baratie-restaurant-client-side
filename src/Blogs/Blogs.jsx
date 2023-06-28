import React from "react";
import html2pdf from "html2pdf.js";


const Blogs = () => {
   const handleDownloadPdf = () => {
     const element = document.getElementById("blogs-content");

     html2pdf().set({ filename: "blogs.pdf" }).from(element).save();
   };
  return (
    <div className="ms-8 me-8 mb-10" id="blogs-content">
      <div onClick={handleDownloadPdf} className=" btn flex items-center justify-center bg-gradient-to-r from-purple-800 to-pink-500 border-none  transition-transform duration-300 p-5 rounded-md mb-10 mt-10 text-white">
        react-to-pdf
      </div>
      <span className=" text-4xl font-bold mt-8">
        1 . Tell us the differences between uncontrolled and controlled
        components?
      </span>
      <br />
      <span className="text-3xl text-purple-800 ">
        Ans: In React, controlled components refer to components that have their
        state and behavior controlled by the parent component. These components
        rely on props passed down from the parent component to update their
        state and behavior. Uncontrolled components refer to components that
        manage their own state internally.
      </span>
      <br />
      <span className=" text-4xl font-bold mt-8">
        2 . How to validate React props using PropTypes?
      </span>
      <br />
      <span className="text-3xl text-purple-800  ">
        Ans: React PropTypes validators
        <br />
        Any : The prop can be of any data type.
        <br />
        Bool : The prop should be a Boolean.
        <br /> Number : The prop should be a number.
        <br /> String : The prop should be a string.
        <br /> Func : The prop should be a function. <br />
        Array : The prop should be an array.
        <br /> Object : The prop should be an object.
      </span>
      <br />
      <span className=" text-4xl font-bold mt-8">
        3 . Tell us the difference between nodejs and express js
      </span>
      <br />
      <span className="text-3xl text-purple-800 ">
        Ans: Node.js and Express.js are both popular technologies used in web
        development, but they serve different purposes: <br />
        Node.js : <br />
        Node.js is a runtime environment that allows you to run JavaScript code
        on the server-side. It provides an event-driven, non-blocking I/O model,
        which makes it efficient and scalable for handling concurrent
        connections. <br />
        Express.js: <br />
        Express.js is a web application framework built on top of Node.js. It
        simplifies the process of building web applications and APIs by
        providing a higher-level abstraction. It provides a set of features and
        tools for handling HTTP requests, routing, middleware, and
        views/templates. <br />
      </span>
      <br />
      <span className=" text-4xl font-bold mt-8">
        4 . What is a custom hook, and why will you create a custom hook?
      </span>
      <br />
      <span className="text-3xl text-purple-800 ">
        Ans: Certainly! Here's a simplified answer without using bullet points:
        A custom hook in React is a reusable JavaScript function that allows you
        to extract logic and stateful behavior from a component into a separate
        function. You create custom hooks to promote code reuse, enhance code
        organization, facilitate testing, abstract complex functionality, and
        separate concerns. Custom hooks can be shared across multiple
        components, making it easier to maintain and reason about your codebase.
        By encapsulating logic in custom hooks, your components can focus on
        rendering and user interactions, resulting in cleaner and more readable
        code.
      </span>
      <br />
    </div>
  );
};

export default Blogs;
