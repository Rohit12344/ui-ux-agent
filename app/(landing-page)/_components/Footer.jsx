import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { FaArrowRight } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex container-center py-10 z-10 flex-wrap space-y-6 gap-2 sm:space-y-0">
      <div className="w-full space-y-2 sm:flex-1">
        <h1 className="text-xl uppercase font-bold tracking-widest">AETHER</h1>
        <h2 className="text-lg">AI Design Intelligence System</h2>
        <p className="text-sm">
          We don&apos;t generate interfaces. We understand design, reason about
          experience and shape what&apos;s next.
        </p>
        <p className="text-sm">&copy; Aether 2026</p>
      </div>
      <div className="font-semibold flex-1 flex flex-col">
        <Link
          href="#philosophy"
          className="hover:underline hover:underline-offset-2 w-fit"
        >
          Philosophy
        </Link>
        <Link
          href="#capabilities"
          className="hover:underline hover:underline-offset-2 w-fit"
        >
          Capabilities
        </Link>
        <Link
          href="#research"
          className="hover:underline hover:underline-offset-2 w-fit"
        >
          Research
        </Link>
      </div>
      <div className="flex-1 space-y-2">
        <h1 className="text-lg uppercase font-semibold">Stay updated</h1>

        <div className="w-fit flex gap-2">
          <Field>
            <Input
              type="text"
              placeholder="Enter your email"
              className="w-1/2"
            />
          </Field>
          <Button>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
