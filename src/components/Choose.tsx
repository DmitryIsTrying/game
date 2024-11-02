import React from "react";

type ChooseProps = {
  chooseItem?: (choose: string) => void;
  item: string;
  imagePath: string;
};

export const Choose = ({ chooseItem, item, imagePath }: ChooseProps) => {
  const className = `border-primary-${item} w-20 h-20 sm:w-48 sm:h-48 rounded-full flex justify-center items-center border-[10px] sm:border-[20px]  hover:border-primary-${item}-hover ${
    chooseItem && "cursor-pointer"
  } transition-colors duration-200 bg-white`;
  return (
    <div
      onClick={() => {
        if (chooseItem) chooseItem(item);
      }}
      className={className}
    >
      <img src={imagePath} className="w-8 sm:w-20" alt="score table" />
    </div>
  );
};
