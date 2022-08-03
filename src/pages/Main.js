import logo from "../assets/logo.svg";
import triangle from "../assets/bg-triangle.svg";
import { Rules } from "../components/Rules";
import { Pick } from "../components/Pick";
import Scorebar from "../components/Scorebar";
import { useState } from "react";

function Main() {
  const [isShow, setShow] = useState(false);

  return (
    <>
      <div class="flex flex-col items-center p-20 h-screen w-screen bg-blue">
        <Scorebar />
        <div class="relative mt-16">
          <div class="absolute top-0 left-4">
            <Pick type="paper" />
          </div>
          <div class="absolute top-0 left-64">
            <Pick type="scissor" />
          </div>
          <div class="absolute top-52 left-36">
            <Pick type="rock" />
          </div>
          <img src={triangle} alt="triangle" class="p-20" />
        </div>
        <div
          class="p-4 w-48 text-center text-2xl border-solid absolute bottom-20 rounded-xl border-4 border-slate opacity-85 right-20 text-white hover:cursor-pointer"
          onClick={() => setShow(true)}
        >
          RULES
        </div>
        <Rules show={isShow} onClose={() => setShow(false)} />
      </div>
    </>
  );
}

export default Main;
