import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
      setError(
        "Password must contain one digit from 1 to 9, one lowercase letter, one uppercase letter, one special character, no space, and it must be at least 6 characters."
      );
      return;
    }

    registerUser(email, password)
      .then((result) => {
        setMessage("Registration Successful");
        return updateProfile(getAuth().currentUser, {
          displayName: displayName,
          photoURL: photoURL,
        });
      })
      .then(() => {
        const authUser = getAuth().currentUser;
        setDisplayName(authUser.displayName);
        setPhotoURL(authUser.photoURL);

        console.log("User Profile:", authUser);
          setEmail("");
          setPassword("");
          setError("");
          setDisplayName("");
          setPhotoURL("");
      })
      .catch((err) => {
        setError("Email already in use");
      });
  };

  return (
    <div className="flex items-center justify-center h-screen ms-8 me-8">
      <div className="w-full max-w-md p-6 bg-black rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Registration Form
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-white  font-bold mb-2">
              Name:
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              id="name"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white font-bold mb-2">
              Email:
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="" className="block text-white font-bold mb-2">
              Photo URL:
            </label>
            <input
              placeholder="Upload your image URL"
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white font-bold mb-2"
            >
              Password:
            </label>
            <input
              placeholder="Create your password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 rounded px-3 py-2 w-full"
              required
            />
            <p className=" mt-4 text-red-600">{error}</p>
            <p className=" mt-4 text-green-600">{message}</p>
          </div>
          <div className="flex items-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-white text-white font-bold py-2 px-4 rounded button-primary"
            >
              Register
            </button>
            <p className="ms-5 text-white">
              Already have an account?
              <Link className="ms-1 text-red-600" to="/login">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
