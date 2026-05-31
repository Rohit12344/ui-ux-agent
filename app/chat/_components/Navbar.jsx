import React from "react";
import { FiSidebar } from "react-icons/fi";

function Navbar({ isNewChat, onSideBarOpen, title }) {
  console.log(title);
  return (
    <div
      className={`px-8 py-4 w-full flex items-center border-b-2 border-secondary gap-4 ${isNewChat ? "lg:hidden" : ""}`}
    >
      <div
        className={`p-2 rounded-sm hover:bg-secondary cursor-pointer lg:hidden`}
        onClick={onSideBarOpen}
      >
        <FiSidebar />
      </div>

      {!isNewChat && <p>{title}</p>}
    </div>
  );
}

export default Navbar;
