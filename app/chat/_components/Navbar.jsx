"use client";
import React, { useState } from "react";
import { FiSidebar } from "react-icons/fi";

function Navbar({ isSideBarOpen, onSideBarOpen }) {
  return (
    <div className="px-8 py-4 w-full flex items-center border-b-2 border-secondary gap-4">
      <div className="rounded-sm hover:bg-secondary cursor-pointer">
        <FiSidebar className="sm:hidden block " onClick={onSideBarOpen} />
      </div>

      <p>Chat Title</p>
    </div>
  );
}

export default Navbar;
