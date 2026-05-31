"use client";
import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import Chat from "./_components/Chat";
import ChatBox from "./_components/ChatBox";

function Page() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  return (
    <div className="flex min-h-screen max-w-screen relative">
      <Sidebar
        isSideBarOpen={isSideBarOpen}
        onSideBarOpen={() => setIsSideBarOpen((prev) => !prev)}
      />

      <div className="flex-1 h-screen w-[80vw] max-w-full max-h-screen flex flex-col">
        <Navbar
          isSideBarOpen={isSideBarOpen}
          onSideBarOpen={() => setIsSideBarOpen((prev) => !prev)}
        />
        <Chat />

        <ChatBox />
      </div>
    </div>
  );
}

export default Page;
