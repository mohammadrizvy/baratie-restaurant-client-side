import React from 'react';

const About = () => {
  return (
    <div className="ms-8 me-8 mb-8">
      <div className=" text-center ">
        <p className="text-7xl">About</p>
        <p className="border-b-4 w-1/2 justify-center border-black ms-[25%] text-2xl">
          Our Restaurant
        </p>
      </div>
      <div className="">
        <div className="text-center mt-5">
          <p className="text-4xl">Hours</p>
          <div className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              <p className="text-xl">Monday - 12pm-9pm</p>
              <p className="text-xl">Tuesday - 12pm-9pm</p>
              <p className="text-xl">Wednesday - 12pm-10pm</p>
              <p className="text-xl">Thursday - 12pm-10pm</p>
              <p className="text-xl">Friday - 12pm-10pm</p>
              <p className="text-xl">Saturday - 12pm-10pm</p>
              <p className="text-xl">Sunday - 12pm-10pm</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-5">
          <p className="text-4xl border-b-4 w-1/2 justify-center border-black ms-[25%] mb-2">
            PHONE
          </p>
          <div className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              <p className="text-xl">(212) 555-1234</p>
              <p className="text-xl">(404) 555-5678</p>
              <p className="text-xl">(786) 555-9012</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;