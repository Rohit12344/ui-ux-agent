"use client";
import React, { useState } from "react";
import { FiSidebar } from "react-icons/fi";

function Navbar({ isNewChat, onSideBarOpen }) {
  return (
    <div className="px-8 py-4 w-full flex items-center border-b-2 border-secondary gap-4 lg:hidden">
      <div
        className={`p-2 rounded-sm hover:bg-secondary cursor-pointer ${isNewChat ? "block" : ""}`}
        onClick={onSideBarOpen}
      >
        <FiSidebar />
      </div>

      {!isNewChat && <p>Chat Title</p>}
    </div>
  );
}

export default Navbar;
