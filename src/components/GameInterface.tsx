import React, { useState } from "react";
import paperImage from "../access/images/icon-paper.svg";
import rockImage from "../access/images/icon-rock.svg";
import scissorsImage from "../access/images/icon-scissors.svg";
import spockImage from "../access/images/icon-spock.svg";
import lizardImage from "../access/images/icon-lizard.svg";
import { ChooseItems } from "./ChooseItems";
import { ChooseInterface } from "./ChooseInterface";

export type Items = Array<{
  name: "paper" | "rock" | "scissors" | "cyan" | "lizard";
  path: string;
  classNames: string;
}>;

const items: Items = [
  { name: "paper", path: paperImage, classNames: "bottom-[40%] -right-[20%]" },
  { name: "rock", path: rockImage, classNames: "-bottom-[20%] -right-[3%]" },
  {
    name: "scissors",
    path: scissorsImage,
    classNames: "-top-[15%] right-[32%] sm:-top-[20%] sm:right-[28%]",
  },
  { name: "cyan", path: spockImage, classNames: "bottom-[40%] -left-[20%]" },
  {
    name: "lizard",
    path: lizardImage,
    classNames: "-bottom-[20%] -left-[3%]",
  },
];

export const GameInterface = () => {
  const [game, setGame] = useState<string>("");

  const handleChooseItem = (choose: string) => {
    setGame(choose);
  };

  return (
    <div className="relative w-full h-48 sm:h-fit flex items-center justify-center">
      {game ? (
        <ChooseInterface
          backClick={setGame}
          item={game}
          imagePath={items.filter((el) => el.name === game)[0].path}
        />
      ) : (
        <ChooseItems items={items} chooseItem={handleChooseItem} />
      )}
    </div>
  );
};
