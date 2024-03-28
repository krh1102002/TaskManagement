import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { MdEmail } from "react-icons/md";
import { GrSecure } from "react-icons/gr";
import { FiUser } from "react-icons/fi";
import { signUp } from "../redux/actions/user";
import { clearError } from "../redux/reducers/userReducer";

const SignUP = ({ setTab }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [isSigning, setIsSigning] = useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const error = useSelector((state) => state.user.error);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match before proceeding
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsSigning(true);
    dispatch(signUp({ name, email, password }));
  };

  useEffect(() => {
    if (user) {
      setIsSigning(false);
      navigate("/tasks");
      toast.success("Registration Successful");
    }
  }, [user, navigate]);

  useEffect(() => {
    if (error && error.length > 0) {
      toast.error(error);
      setIsSigning(false);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  return (
    <div className="flex flex-col gap-10 sm:justify-center items-center sm:py-0 py-8">
      <div className="flex flex-col justify-center items-center gap-2">
        <h1 className="text-center w-full text-slate-900 md:text-3xl text-xl font-semibold">
          Sign Up
        </h1>
        <p className="text-center w-full text-slate-800 text-sm font-semibold">
          Create a new account to handle your tasks
        </p>
      </div>
      <div className="lg:w-1/3 md:w-2/5 sm:w-2/3 w-full sm:px-0 px-3">
        <form action="" className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center border bg-white w-full">
            <span className="px-2 h-full">
              <FiUser />
            </span>
            <input
              type="text"
              value={name}
              name="name"
              disabled={isSigning}
              placeholder="Enter Your Name"
              className="w-full h-full px-2 py-2 border-l focus:outline-none"
              id="name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center border bg-white w-full">
            <span className="px-2 h-full">
              <MdEmail />
            </span>
            <input
              type="email"
              value={email}
              name="email"
              disabled={isSigning}
              placeholder="Enter Your Email"
              className="w-full h-full px-2 py-2 border-l focus:outline-none"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center border bg-white w-full">
            <span className="px-2 h-full">
              <GrSecure />
            </span>
            <input
              type="password"
              value={password}
              name="password"
              disabled={isSigning}
              placeholder="Enter Your Password"
              className="w-full h-full px-2 py-2 border-l focus:outline-none"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center border bg-white w-full">
            <span className="px-2 h-full">
              <GrSecure />
            </span>
            <input
              type="password"
              value={confirmPassword}
              name="confirmPassword"
              disabled={isSigning}
              placeholder="Confirm Your Password"
              className="w-full h-full px-2 py-2 border-l focus:outline-none"
              id="confirmPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div
            className={`bg-slate-800 text-white py-2 shadow rounded-full ${
              isSigning ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            <input
              type="submit"
              value={`${isSigning ? "Signing..." : "Sign Up"}`}
              disabled={isSigning}
              className={`h-full w-full cursor-pointer ${
                isSigning ? "opacity-70 cursor-not-allowed" : ""
              }`}
            />
          </div>
          <div className="text-slate-900 font-semibold text-center">
            <button
              type="button"
              className="cursor-pointer hover:underline"
              disabled={isSigning}
              onClick={() => setTab("signin")}
            >
              Already Have an Account? Sign In here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUP;
