"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import MEE6 from "../../public/MEE6 Slander web.png";
import "./startupAnimation.css";

export default function TopBar() {
  // TODO: Add one-time animation for page startup

  return (
    <div
      className="flex h-screen mx-auto justify-center items-center"
      id="overlayAnimation"
    >
      <div className="flex text-[#fff]">
        <Image
          className="rounded-md"
          src={MEE6}
          alt="MEE6 Slander"
          width={150}
          height={150}
        />
        <h1
          className="ml-[20px] mt-[45px] text-6xl align-items-center"
          id="initialText"
        >
          MEE6 Slander
        </h1>
        <div className="flex" id="animated-text">
          <h1 className="text-6xl align-items-center" id="text-moving">
            M
          </h1>
          <h1 className="text-6xl align-items-center" id="text-moving">
            6
          </h1>
          <h1 className="text-6xl align-items-center" id="text-moving">
            S
          </h1>
        </div>
      </div>
    </div>
  );
}
