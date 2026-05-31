import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaArrowUp } from "react-icons/fa";

function ChatBox() {
  return (
    <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto mb-4 space-y-1 bg-input/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 p-4 rounded-3xl ">
      <Textarea
        placeholder="Ask Ather anything about design"
        className="text-sm sm:text-base max-w-full max-h-[20vh] border-0 bg-transparent! resize-none focus-visible:border-0! focus-visible:ring-0!"
      />
      <div className="flex justify-between">
        <Button className="cursor-pointer">+</Button>
        <Button className="cursor-pointer">
          <FaArrowUp />
        </Button>
      </div>
    </div>
  );
}

export default ChatBox;
