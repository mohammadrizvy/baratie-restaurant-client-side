import React from 'react';
import { Tilt } from "react-tilt";
import LazyLoad from "react-lazyload";
import Marquee from 'react-fast-marquee';

const defaultOptions = {
  reverse: false, 
  max: 35,
  perspective: 1000,
  scale: 1.0, 
  speed: 1000, 
  transition: true, 
  axis: null, 
  reset: true, 
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Banner = () => {
  return (
    <div className="me-8 ms-8 mt-6 mb-6 rounded-md ">
      {/* Marquee Here */}
      <div className="mb-5">
        <Marquee>
          Welcome to Baratie Restaurant - Enjoy Delicious Food!, Try our
          signature dishes made with love!, Experience the finest dining in
          town!, Indulge in a culinary journey like no other!, Taste the flavors
          that will delight your senses!,
        </Marquee>
      </div>
      <div className="bg-secondary text-white text-center py-4 p-8 rounded-t-lg">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between p-8">
          <div className="w-full lg:w-1/2 ">
            <Tilt options={defaultOptions}>
              <div>
                <img
                  className="h-auto w-full lg:w-5/6 xl:w-3/4 rounded-md  mx-auto lg:mx-0 hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-xl"
                  src="https://i.ibb.co/b1vxnhw/7742006de8354858a9929f0a90167be0.jpg"
                  alt="Restaurant"
                />
              </div>
            </Tilt>
          </div>
          <div className="w-full lg:w-1/2 lg:text-left mt-4 lg:mt-0 lg:pl-8">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Baratie Restaurant: A Scintillating Journey into Japanese
              Gastronomy
            </h1>
            <p className="mt-2 lg:mt-4">
              Discover the Essence of Japan at Baratie Restaurant. Step into a
              World of Culinary Marvels Where Japanese Tradition Meets Exquisite
              Fusion. Experience an Epicurean Adventure with Hand-Rolled Sushi,
              Sizzling Teppanyaki, and Artfully Crafted Ramen. Immerse Yourself
              in the Vibrant Ambiance and Captivating Flavors of Authentic
              Japanese Cuisine. A Feast for the Senses Awaits at Baratie
              Restaurant - Where Gastronomic Delights Become Unforgettable
              Memories.
            </p>
            <button className="btn button-primary rounded-sm mt-4 hoverit border-none">
              Explore More
            </button>
          </div>
        </div>
      </div>
      {/* -----------------------||-------------------- */}
      <div className="rounded-b-lg bg-secondary text-white text-center py-4 p-8">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <div className="w-full lg:w-1/2 lg:text-left mt-4 lg:mt-0 lg:pl-8">
            <h1 className="text-3xl lg:text-4xl font-bold">
              Baratie Restaurant: Unveiling Japan's Gastronomic Masterpieces
            </h1>
            <p className="mt-2 lg:mt-4">
              Experience the Finest Culinary Treasures of Japan at Baratie
              Restaurant. Indulge in the Unparalleled Excellence of Authentic
              Japanese Cuisine. Delight in Meticulously Prepared Sushi Rolls,
              Exquisite Tempura, and Flavorful Ramen Bowls. Our Master Chefs
              Craft Each Dish with Utmost Precision and Passion, Bringing the
              True Essence of Japan to Your Plate. Discover a World of
              Harmonious Flavors, Perfectly Balanced Ingredients, and
              Unforgettable Dining Moments. Baratie Restaurant: Where Japan's
              Culinary Heritage Comes Alive
            </p>
            <button className="btn button-primary rounded-sm mt-4 mb-4 hoverit border-none">
              Explore More
            </button>
          </div>
          <div className="w-full lg:w-1/2 lg:ms-20 ">
            <LazyLoad once>
              <Tilt options={defaultOptions}>
                <img
                  className="rounded-md h-auto w-full lg:w-5/6 xl:w-3/4  mx-auto lg:mx-0 hover:scale-105 transition duration-300 ease-in-out transform hover:shadow-xl"
                  src="https://i.ibb.co/mCspqQX/j-lbx-Llgi-8-w-unsplash.jpg"
                  alt="Chef"
                />
              </Tilt>
            </LazyLoad>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
