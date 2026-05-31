"use client";
import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import Chat from "./_components/Chat";
import ChatBox from "./_components/ChatBox";

const chats = [
  {
    title: "First Chat",
  },
  {
    title: "Design Chat",
  },
];

function Page() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const [isNewChat, setIsNewChat] = useState(true);
  const [activeChat, setActiveChat] = useState(null);
  return (
    <div className="flex min-h-screen max-w-screen relative">
      <Sidebar
        chats={chats}
        isSideBarOpen={isSideBarOpen}
        onSetNewChat={() => setIsNewChat(true)}
        onSideBarOpen={() => setIsSideBarOpen((prev) => !prev)}
      />

      <div
        className={`flex-1 h-screen w-[80vw] max-w-full max-h-screen flex flex-col ${isNewChat && "items-center gap-4"}`}
      >
        <Navbar
          isNewChat={isNewChat}
          onSideBarOpen={() => setIsSideBarOpen((prev) => !prev)}
        />
        {isNewChat ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl">Good day, User</h1>
            <ChatBox />
          </div>
        ) : (
          <>
            <Chat />
            <ChatBox />
          </>
        )}
      </div>
    </div>
  );
}

export default Page;
