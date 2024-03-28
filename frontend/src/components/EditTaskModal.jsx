import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateTask } from "../redux/actions/task";
import Modal from "./Modal";

const EditTaskModal = ({ isOpen, onClose }) => {
  const startup = useSelector((state) => state.task.currentTask);

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const [startupName, setName] = useState("");
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

  useEffect(() => {
    if (startup) {
      setName(startup.startupName || "");
      setIncorporationDate(
        startup.incorporationDate
          ? new Date(startup.incorporationDate).toISOString().split("T")[0]
          : ""
      );
      setAddress(startup.address || "");
      setCity(startup.city || "");
      setState(startup.state || "");
      setEmail(startup.email || "");
      setPhone(startup.phone || "");
      setFounderName(startup.founderName || "");
      setIndustry(startup.industry || "");
      setSector(startup.sector || "");
      setBusinessIdea(startup.businessIdea || "");
    }
  }, [startup]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateTask({
        id: startup._id,
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
    toast.success("Startup Information Updated");
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="font-semibold text-xl pb-2.5">Edit Startup Information</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold">
            Startup Name
          </label>
          <input
            type="text"
            id="name"
            value={startupName}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Startup Name"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="incorporationDate" className="text-sm font-semibold">
            Incorporation Date
          </label>
          <input
            type="date"
            id="incorporationDate"
            value={incorporationDate}
            onChange={(e) => setIncorporationDate(e.target.value)}
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="text-sm font-semibold">
            Startup Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Startup Address"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="city" className="text-sm font-semibold">
            City
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="state" className="text-sm font-semibold">
            State
          </label>
          <input
            type="text"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter State"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email Address"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter Phone Number"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="founderName" className="text-sm font-semibold">
            Founder Name
          </label>
          <input
            type="text"
            id="founderName"
            value={founderName}
            onChange={(e) => setFounderName(e.target.value)}
            placeholder="Enter Founder Name"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="industry" className="text-sm font-semibold">
            Industry
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value)}
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          >
            <option value="">Select Industry</option>
            <option value="IT services">IT services</option>
            <option value="agriculture">Agriculture</option>
            <option value="biotechnologies">Biotechnologies</option>
            <option value="Design">Design</option>
            <option value="Fashion">Fashion</option>
            <option value="Green Technologies">Green Technologies</option>
            <option value="Marketing">Marketing</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="sector" className="text-sm font-semibold">
            Sector
          </label>
          <select
            id="sector"
            value={sector}
            onChange={(e) => setSector(e.target.value)}
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
          >
            <option value="">Select Sector</option>
            <option value="IT consultancy">IT consultancy</option>
            <option value="IT management">IT management</option>
            <option value="IT services">IT services</option>
            <option value="agri tech">Agri Tech</option>
            <option value="agriculture chemicals">Agriculture Chemicals</option>
            <option value="organic agriculture">Organic Agriculture</option>
            <option value="web design">Web Design</option>
            <option value="fashion technologies">Fashion Technologies</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="businessIdea" className="text-sm font-semibold">
            Business Idea
          </label>
          <textarea
            id="businessIdea"
            value={businessIdea}
            onChange={(e) => setBusinessIdea(e.target.value)}
            placeholder="Describe the Business Idea"
            className="py-1 px-2 focus:outline-none border border-slate-800 rounded"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-end gap-2 items-center pt-2">
          <button
            onClick={handleClose}
            className="px-2 py-1 border border-slate-800 rounded cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-2.5 py-1 bg-slate-800 rounded cursor-pointer text-white"
          >
            Update
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditTaskModal;
