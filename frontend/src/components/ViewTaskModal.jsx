import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "./Modal";

const ViewTaskModal = ({ isOpen, onClose }) => {
  // Fetching the current task which is used to store startup details
  const task = useSelector((state) => state.task.currentTask);
  const [industry, setIndustry] = useState("");
  const [sector, setSector] = useState("");

  useEffect(() => {
    if (task) {
      setIndustry(task.industry);
      setSector(task.sector);
    }
  }, [task]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h3 className="font-semibold text-xl pb-2 border-b">Startup View</h3>
      {task && (
        <div className="flex flex-col gap-2 py-1.5">
          <p>
            <b>Startup Name: </b> {task.startupName}
          </p>
          <p>
            <b>Incorporation Date: </b>{" "}
            {task.incorporationDate?.substring(0, 10)}
          </p>
          <div className="flex flex-col gap-1">
            <p>
              <b>Startup Address: </b> {task.address}
            </p>
            <p>
              <b>City: </b> {task.city}
            </p>
            <p>
              <b>State: </b> {task.state}
            </p>
          </div>
          <p>
            <b>Email Address: </b> {task.email}
          </p>
          <p>
            <b>Phone Number: </b> {task.phone}
          </p>
          <p>
            <b>Founder Name: </b> {task.founderName}
          </p>
          <p>
            <b>Industry: </b> {industry}
          </p>
          <p>
            <b>Sector: </b> {sector}
          </p>
          <p>
            <b>Business Idea: </b> {task.businessIdea}
          </p>
        </div>
      )}
      <div className="flex justify-end gap-2 pt-2">
        <button
          onClick={onClose}
          className="px-2 py-1 border border-slate-800 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ViewTaskModal;
