import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FiSearch } from "react-icons/fi";

const TaskHeader = ({ setAddModalOpen, onSearchChange }) => {
  const user = useSelector((state) => state.user.user);

  const [taskCreated, setTaskCreated] = useState("");
  const [taskCompleted, setTaskCompleted] = useState("");

  useEffect(() => {
    if (user) {
      if (user.taskCreated <= 9) {
        setTaskCreated("0" + user.taskCreated);
      } else {
        setTaskCreated(user.taskCreated);
      }
      if (user.taskCompleted <= 9) {
        setTaskCompleted("0" + user.taskCompleted);
      } else {
        setTaskCompleted(user.taskCompleted);
      }
    }
  }, [user]);

  return (
    <div className="md:flex justify-between items-center py-3">
      <h1 className="text-xl font-semibold">Start-Up List</h1>
      <div className="flex items-center">
        <div className="flex items-center border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            className="px-2 py-1"
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="px-2 bg-gray-200">
            <FiSearch />
          </button>
        </div>
        <button
          onClick={() => setAddModalOpen(true)}
          className="ml-4 bg-slate-800 text-white font-semibold px-4 py-2 rounded"
        >
          + Add Start-Up
        </button>
      </div>
    </div>
  );
};

export default TaskHeader;
