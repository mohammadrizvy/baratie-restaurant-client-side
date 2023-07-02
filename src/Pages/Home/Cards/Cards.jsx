import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

const Cards = () => {
  const [chefsData, setChefsData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:600/chef")
      .then((res) => res.json())
      .then((data) => setChefsData(data));
  }, []);

  // console.log(chefsData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 mb-5 me-8 ms-8 ">
      {chefsData.map((chefsData) => (
        <div className="" key={chefsData.id}>
          <div className="card lg:card-side bg-secondary shadow-xl rounded-md transform hover:scale-105 duration-500 ease-in-out p-5">
            <figure>
              <img
                className="ms-8 rounded-md"
                src={chefsData.chef_photo}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white">{chefsData.chef_name}</h2>
              {/* <p className="text-white">{chefsData.chef_bio}</p> */}
              <div className="card-actions">
                <p className="text-white">Recipes: {chefsData.recipe_amount}</p>
                <p className="text-white">Exp: {chefsData.experience}</p>
                <p className="text-white">Likes: {chefsData.likes}</p>
                <Link to={`/recipes/${chefsData.id}`}>
                  <button className="btn button-primary">View Recipes</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
