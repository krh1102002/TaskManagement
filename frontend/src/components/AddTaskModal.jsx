import React, { useState } from "react";
import Modal from "./Modal";
import { addTask } from "../redux/actions/task"; // Using addTask for demonstration purposes
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddTaskModal = ({ isOpen, onClose }) => {
  const [startupName, setStartupName] = useState("");
  const [incorporationDate, setIncorporationDate] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [founderName, setFounderName] = useState("");
  const [industry, setIndustry] = useState("");
  const [sector, setSector] = useState("");
  const [businessIdea, setBusinessIdea] = useState("");

  const dispatch = useDispatch();

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        startupName,
        incorporationDate,
        address,
        city,
        state,
        email,
        phone,
        founderName,
        industry,
        sector,
        businessIdea,
      })
    );
    toast.success("Startup Added");
    setStartupName("");
    setIncorporationDate("");
    setAddress("");
    setCity("");
    setState("");
    setEmail("");
    setPhone("");
    setFounderName("");
    setIndustry("");
    setSector("");
    setBusinessIdea("");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="font-semibold text-xl pb-2.5">Add New Startup</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        {renderInput("Startup Name", startupName, setStartupName)}
        {renderInput(
          "Incorporation Date",
          incorporationDate,
          setIncorporationDate,
          "date"
        )}
        {renderInput("Startup Address", address, setAddress)}
        {renderInput("City", city, setCity)}
        {renderInput("State", state, setState)}
        {renderInput("Email Address", email, setEmail, "email")}
        {renderInput("Phone Number", phone, setPhone)}
        {renderInput("Founder Name", founderName, setFounderName)}
        {renderDropdown("Industry", industry, setIndustry, [
          "IT services",
          "agriculture",
          "biotechnologies",
          "Design",
          "Fashion",
          "Green Technologies",
          "Marketing",
          "Others",
        ])}
        {renderDropdown("Sector", sector, setSector, [
          "IT consultancy",
          "IT management",
          "IT services",
          "agri tech",
          "agriculture chemicals",
          "organic agriculture",
          "web design",
          "fashion technologies",
          "Others",
        ])}
        {renderTextarea("Business Idea", businessIdea, setBusinessIdea)}
        <div className="flex justify-end gap-2 items-center pt-2">
          <button
            className="px-2 py-1 border border-slate-800 rounded cursor-pointer"
            onClick={handleClose}
          >
            Cancel
          </button>
          <input
            type="submit"
            value="Add"
            className="px-2.5 py-1 bg-slate-800 rounded cursor-pointer text-white"
          />
        </div>
      </form>
    </Modal>
  );
};

const renderInput = (label, value, setValue, type = "text") => (
  <div className="flex flex-col">
    <label
      htmlFor={label.replace(/\s+/g, "").toLowerCase()}
      className="text-sm font-semibold"
    >
      {label}
    </label>
    <input
      type={type}
      id={label.replace(/\s+/g, "").toLowerCase()}
      placeholder={`Enter ${label}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
    />
  </div>
);

const renderDropdown = (label, value, setValue, options) => (
  <div className="flex flex-col">
    <label
      htmlFor={label.replace(/\s+/g, "").toLowerCase()}
      className="text-sm font-semibold"
    >
      {label}
    </label>
    <select
      id={label.replace(/\s+/g, "").toLowerCase()}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

const renderTextarea = (label, value, setValue) => (
  <div className="flex flex-col">
    <label
      htmlFor={label.replace(/\s+/g, "").toLowerCase()}
      className="text-sm font-semibold"
    >
      {label}
    </label>
    <textarea
      id={label.replace(/\s+/g, "").toLowerCase()}
      placeholder={`Enter ${label}`}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
      rows="4"
    />
  </div>
);

export default AddTaskModal;
