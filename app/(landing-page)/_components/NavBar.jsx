import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function NavBar() {
  return (
    <nav className="flex justify-between items-center container-center px-6 py-4 bg-transparent/80 backdrop-blur-lg translate-y-6 rounded-lg z-50">
      <span className="uppercase tracking-[0.6em]">Ather</span>

      <div className="flex gap-12">
        <Link
          href="#philosophy"
          className="hover:underline hover:underline-offset-2"
        >
          Philosophy
        </Link>
        <Link
          href="#capabilities"
          className="hover:underline hover:underline-offset-2"
        >
          Capabilities
        </Link>
        <Link
          href="#research"
          className="hover:underline hover:underline-offset-2"
        >
          Research
        </Link>
      </div>

      <Button>Start Designing</Button>
    </nav>
  );
}

export default NavBar;
