import React from "react";
import rules from "../assets/image-rules.svg";
import "./Rules.css";

export function Rules(props) {
  const { onClose, show } = props;
  return (
    <>
      {show && (
        <div className="backdrop" onClick={onClose}>
          <div class="relative -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-96">
            <div class="relative py-8 px-12 rounded-xl bg-white">
              <div class="flex justify-between pb-12">
                <div class="font-extrabold text-3xl text-blue">RULES</div>
                <div
                  class="text-gray-light text-3xl hover:cursor-pointer"
                  onClick={onClose}
                >
                  X
                </div>
              </div>
              <img src={rules} alt="rules" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
