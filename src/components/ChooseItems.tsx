import React from "react";
import { Choose } from "./Choose";
import pentagon from "../access/images/bg-pentagon.svg";
import { Items } from "./GameInterface";

type ChooseItemsProps = {
  chooseItem: (choose: string) => void;
  items: Items;
};

export const ChooseItems = ({ chooseItem, items }: ChooseItemsProps) => {
  return (
    <div className="relative">
      <img
        width={320}
        height={304}
        className="w-[20rem] sm:w-[28rem] h-fit"
        src={pentagon}
        alt="triangle"
      />
      {items.map((el, i) => (
        <div key={i} className={`absolute ${el.classNames}`}>
          <Choose chooseItem={chooseItem} item={el.name} imagePath={el.path} />
        </div>
      ))}
    </div>
  );
};
