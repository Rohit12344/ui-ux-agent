"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Collapser from "./Collapser";

function Sidebar({ isSideBarOpen, onSideBarOpen }) {
  return (
    <div
      className={`bg-primary-foreground z-10 absolute max-h-screen p-3 border-2 border-secondary space-y-4 sm:space-y-0 sm:static sm:flex sm:flex-col sm:gap-4 ${
        isSideBarOpen
          ? "h-full sm:h-screen sm:w-[20vw]"
          : "hidden sm:block sm:items-center"
      }`}
    >
      <div className="flex justify-between items-center">
        {isSideBarOpen && (
          <h1 className="text-center tracking-widest font-bold ">ATHER</h1>
        )}
        <div
          className="p-2 rounded-sm hover:bg-secondary cursor-pointer"
          onClick={onSideBarOpen}
        >
          <Collapser isSideBarOpen={isSideBarOpen} />
        </div>
      </div>
      <Button className={`w-full py-2`}>
        + {isSideBarOpen && "New Session"}
      </Button>
      {isSideBarOpen && (
        <div className="w-full sm:h-full space-y-2 ">
          <h2>Today</h2>
          <Button variant="outline" className="w-full py-2">
            First Page Design
          </Button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
