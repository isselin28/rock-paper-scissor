import React from "react";
import iconPaper from "../assets/icon-paper.svg";
import iconRock from "../assets/icon-rock.svg";
import iconScissors from "../assets/icon-scissors.svg";

const pickDetails = [
  { name: "paper", color: "purple", image: iconPaper },
  { name: "rock", color: "yellow", image: iconRock },
  { name: "scissor", color: "red", image: iconScissors },
];

export const Pick = (props) => {
  const { type } = props;

  const color = pickDetails.find((pick) => pick.name === type).color;
  const image = pickDetails.find((pick) => pick.name === type).image;

  return (
    <div
      class={`w-44 h-44 z-10 rounded-full border-16 border-${color} bg-slate flex justify-center items-center`}
    >
      <img src={image} alt={type} class="w-16" />
    </div>
  );
};
