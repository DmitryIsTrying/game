import React from "react";
import styles from "../styles/Choose.module.scss";

type ChooseProps = {
  chooseItem?: (choose: string) => void;
  item: string;
  imagePath: string;
};

export const Choose = ({ chooseItem, item, imagePath }: ChooseProps) => {
  return (
    <div
      onClick={() => {
        if (chooseItem) chooseItem(item);
      }}
      className={`${styles.all} ${styles[item]} ${chooseItem && styles.cursor}`}
    >
      <img src={imagePath} className="w-8 sm:w-20" alt="score table" />
    </div>
  );
};
