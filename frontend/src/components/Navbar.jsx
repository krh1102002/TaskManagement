import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../redux/reducers/userReducer";
import { clearTasks } from "../redux/reducers/taskReducer";

const Navbar = () => {
  const user = useSelector((state) => state.user?.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    dispatch(clearUser());
    dispatch(clearTasks());
    toast.success("Logged out successfully");
    navigate("/");
  };

  const firstName = user?.name.split(" ")[0];

  return (
    <div className="flex justify-between items-center lg:px-8 px-4 py-3 shadow flex-shrink-0">
      <h1 className="md:text-2xl font-semibold ">Task Management</h1>
      {user && (
        <div className="flex items-center">
          <span className="mr-4 text-slate-800 font-semibold">{firstName}</span>
          <button
            title="Logout"
            onClick={handleLogout}
            className="border border-slate-800 px-2.5 py-1 font-semibold"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
