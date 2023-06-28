import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dna } from  'react-loader-spinner'


const Recipes = () => {
  const recipes = useLoaderData();
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
       
       setTimeout(() => {
         setLoading(false);
       }, 1000);
     }, []);

  console.log(recipes);

  const { chef_photo, chef_name,chef_bio } = recipes;

   const handleAddToFavorites = (index) => {
     setDisabledButtons((prevDisabledButtons) => [
       ...prevDisabledButtons,
       index,
     ]);
     toast("Added to Favorites");
   };

    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <Dna
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      );
    }

  return (
    <div className="ms-8 me-8 bg-black p-10 mt-10 mb-10 rounded-md">
      <div className=" flex items-center mb-1 ">
        <img className=" rounded-md " src={chef_photo} alt="Movie" />
        <div className="card-body">
          <h2 className="card-title text-white">{chef_name}</h2>
          <p className="text-white">{chef_bio}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <div className="text-white text-4xl text-center underline mb-5">
        Recipes :
      </div>
      {recipes.recipes.map((recipe, index) => (
        <div className="flex items-center gap-5 " key={index}>
          <div className="mt-5">
            <h3 className="text-white text-2xl">{recipe.name} : </h3>
            <p className="text-white">
              <span className="text-xl">Method:</span> {recipe.method}
            </p>
            <p className="text-white">Rating: {recipe.rating}</p>
          </div>
          <div className="">
            <button
              onClick={() => handleAddToFavorites(index)}
              disabled={disabledButtons.includes(index)}
              className="btn button-primary"
            >
              <FaPlus></FaPlus>
            </button>
            <ToastContainer />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
