import React, { useEffect, useState } from "react";
import { Choose } from "./Choose";
import { getRandomChoose } from "../utils/getRandomChoose";
import { Items } from "./GameInterface";
import { Countdown } from "./downCounter";
import { getWinner } from "../utils/getWinner";
import { ResultGame } from "./ResultGame";

type ChooseInterfaceProps = {
  item: string;
  imagePath: string;
  backClick: (value: "") => void;
};
export type ChooseComputer = {
  name: "paper" | "rock" | "scissors" | "cyan" | "lizard";
  path: string;
};

export const ChooseInterface = (props: ChooseInterfaceProps) => {
  const [chooseComputer, setChooseComputer] = useState<null | ChooseComputer>(
    null
  );
  const winOrLose = getWinner(props.item, chooseComputer?.name);

  return (
    <div className="flex flex-col gap-10 sm:gap-24">
      <div className="flex gap-5 sm:gap-20">
        <div className="w-1/2 flex gap-5 flex-col items-center justify-start">
          <Choose item={props.item} imagePath={props.imagePath} />
          <span className="text-center font-custom text-white text-xl font-bold">
            YOU PICKED
          </span>
        </div>
        {chooseComputer ? (
          <div className={`flex gap-5 flex-col items-center justify-start   `}>
            <Choose
              item={chooseComputer.name}
              imagePath={chooseComputer.path}
            />
            <span
              className={` text-center font-custom text-white text-xl font-bold `}
            >
              THE HOUSE PICKED
            </span>
          </div>
        ) : (
          <Countdown callback={() => setChooseComputer(getRandomChoose())} />
        )}
      </div>
      {winOrLose !== "nothing" && (
        <ResultGame result={winOrLose} callback={() => props.backClick("")} />
      )}
    </div>
  );
};
