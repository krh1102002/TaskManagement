import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { BiSolidEditAlt } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { setCurrentTask } from "../redux/reducers/taskReducer";
import { deleteTask } from "../redux/actions/task";

const TaskTable = ({
  setEditModalOpen,
  setDeleteModalOpen,
  setViewModalOpen,
  allTasks,
}) => {
  const dispatch = useDispatch();
  const [currentTask, setCurrentTasks] = useState([]);

  const handleView = (task) => {
    dispatch(setCurrentTask(task));
    setViewModalOpen(true);
  };

  const handleEdit = (task) => {
    dispatch(setCurrentTask(task));
    setEditModalOpen(true);
  };

  const handleDelete = (task) => {
    dispatch(deleteTask(task));
    setDeleteModalOpen(true);
  };
  useEffect(() => {
    if (allTasks) {
      setCurrentTasks(allTasks);
    }
  }, [allTasks]);

  const columns = [
    {
      name: "Sr No",
      selector: (row, index) => index + 1,
      sortable: false,
      maxWidth: "80px",
    },
    {
      name: "Startup Name",
      selector: (row) => row.startupName,
      sortable: true,
    },
    {
      name: "Incorporation Date",
      selector: (row) => row.incorporationDate?.substring(0, 10),
      sortable: true,
    },
    {
      name: "Address",
      selector: (row) => row.address,
    },
    {
      name: "City",
      selector: (row) => row.city,
    },
    {
      name: "State",
      selector: (row) => row.state,
    },
    {
      name: "Email Address",
      selector: (row) => row.email,
    },
    {
      name: "Phone Number",
      selector: (row) => row.phone,
    },
    {
      name: "Founder Name",
      selector: (row) => row.founderName,
    },
    {
      name: "Industry",
      selector: (row) => row.industry,
    },
    {
      name: "Sector",
      selector: (row) => row.sector,
    },
    {
      name: "Business Idea",
      selector: (row) => row.businessIdea,
      grow: 2,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div className="flex items-center gap-1.5 text-2xl">
          <button
            className="cursor-pointer"
            title="View"
            onClick={() => handleView(row)}
          >
            <AiFillEye className="text-blue-600" />
          </button>
          <button
            className="cursor-pointer"
            title="Edit"
            onClick={() => handleEdit(row)}
          >
            <BiSolidEditAlt className="text-green-600" />
          </button>
          <button
            className="cursor-pointer"
            title="Delete"
            onClick={() => handleDelete(row)}
          >
            <MdDelete className="text-red-600" />
          </button>
        </div>
      ),
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        background: "black",
        color: "white",
        fontSize: "18px",
        fontWeight: "semibold",
      },
    },
    cells: {
      style: {
        fontSize: "14.5px",
      },
    },
  };

  return (
    <div className="py-3 ">
      <DataTable
        columns={columns}
        data={currentTask}
        customStyles={customStyles}
        pagination
        fixedHeader
        responsive="true"
      />
    </div>
  );
};

export default TaskTable;
