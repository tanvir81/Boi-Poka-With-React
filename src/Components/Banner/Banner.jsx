import React from "react";
import bookimage from "../../assets/banner-book.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 w-full h-auto mt-12 mb-24 rounded-3xl overflow-hidden">
      <div className="hero-content flex flex-col lg:flex-row-reverse px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <img
          src={bookimage}
          alt="Banner"
          className="w-full max-w-sm bg-[#f8f8f8] rounded-lg"
        />
        <div className="text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold">Box Office News!</h1>
          <p className="py-4 md:py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
