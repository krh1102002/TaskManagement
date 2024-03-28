// Sidebar.js
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen border-r border-gray-300 fixed z-10">
      <nav>
        <ul className="text-lg font-semibold">
          <li className="border-b border-gray-300">
            <NavLink
              to="#"
              className="block p-3 hover:bg-gray-100 hover:text-gray-900 rounded transition-colors duration-200"
              activeClassName="text-gray-900 bg-gray-100"
            >
              Start-ups
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
