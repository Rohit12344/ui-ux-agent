import { Button } from "@/components/ui/button";
import React from "react";
import Collapser from "./Collapser";

function Sidebar({
  isSideBarOpen,
  onSideBarOpen,
  onSetNewChat,
  onSelectChat,
  chats,
}) {
  return (
    <div
      className={`bg-primary-foreground z-10 absolute max-h-screen p-3 border-2 border-secondary space-y-4 lg:space-y-0 lg:static lg:flex lg:flex-col lg:gap-4 ${
        isSideBarOpen
          ? "h-full w-[70vw] lg:h-screen sm:w-[40vw] lg:w-[20vw]"
          : "hidden lg:block lg:items-center"
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
      <Button
        className={`w-full py-2 cursor-pointer`}
        onClick={() => onSetNewChat(true)}
      >
        + {isSideBarOpen && "New Session"}
      </Button>
      {isSideBarOpen && (
        <div className="w-full lg:h-full space-y-2 ">
          <h2>Today</h2>

          {chats.map((chat, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full py-2 cursor-pointer"
              onClick={() => {
                onSelectChat(chat);
                onSetNewChat(false);
              }}
            >
              {chat.title}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Sidebar;
