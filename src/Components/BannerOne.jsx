import React from "react";

const BannerOne = () => {
  return (
    <>
      <div
        className="flex flex-col h-[90vh] bg-cover bg-center bg-no-repeat w-full p-8 text-white"
        style={{ backgroundImage: `url('bgg.jpg')` }} // Replace 'bg.png' with your actual image path or URL
      >
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Make Your Development Career a Reality
          </h1>
          <p className="text-xl font-light mb-8">
            Join the best platform to grow your skills and advance in the tech
            world.
          </p>
          <a href="/problems">
            <button className="outline-none bg-transparent border-white p-3 pl-8 pr-8 border-2 rounded-md transition: duration-500 hover:bg-white hover:text-black">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default BannerOne;
