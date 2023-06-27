import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { FaGithub, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
// import {useHistory } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  // const location = useLocation();
  // const history = useHistory();
  // let navigate = useNavigate();
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      loginUser(email, password)
        .then((result) => {
          setMessage("Logged in successfully");
          setEmail("");
          setPassword("");
          setError("");
           navigate("/");
        })
        .catch((error) => {
          setError("Password didn't match");
        });
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen ms-8 me-8">
        <div className="w-full max-w-md p-6 bg-black rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-white">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-bold mb-2"
              >
                Email:
              </label>
              <input
                placeholder="Enter email"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-400 rounded px-3 py-2 w-full"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-white font-bold mb-2"
              >
                Password:
              </label>
              <div className="relative">
                <input
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-400 rounded px-3 py-2 w-full pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute top-1/2 transform -translate-y-1/2 right-3 text-gray-400 hover:text-gray-600"
                  onClick={toggleShowPassword}
                >
                  {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                </button>
              </div>
            </div>
            <p className="mb-4 text-red-600">{error}</p>
            <p className="mb-4 text-green-600">{message}</p>
          </form>
          <div className="">
            <span className="ms-[43%] text-white text-xl "> Sing-in</span>
            <hr />
            <div className="flex justify-center gap-5 mt-3 mb-3">
              <button className="btn btn-neutral border-nonetext-white">
                Google<FaGoogle></FaGoogle>
              </button>
              <button className="btn">
                GitHub<FaGithub></FaGithub>
              </button>
            </div>
          </div>
          <hr />

          <div className="flex items-center mt-5">
            <button
              onClick={handleLogin}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded button-primary"
            >
              Login
            </button>

            <p className="ms-5 text-white">
              Don't Have an Account?{" "}
              <Link className="ms-1 text-red-600" to="/register">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
