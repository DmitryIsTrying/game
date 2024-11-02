import React, { useContext, useEffect } from "react";
import { CounterContext } from "../context";

type ResultGameProps = {
  callback: () => void;
  result: string;
};

export const ResultGame = ({ callback, result }: ResultGameProps) => {
  const { setScore } = useContext(CounterContext);
  let className;
  let btnName;
  useEffect(() => {
    if (result === "win") setScore((prevScore: number) => prevScore + 1);

    if (result === "lose") setScore((prevScore: number) => prevScore - 1);
  }, []);
  if (result === "win") {
    className = "bg-primary-scissors";
    btnName = "You win";
  }
  if (result === "lose") {
    className = "bg-primary-rock";
    btnName = "You lose";
  }
  if (result === "draw") {
    className = "bg-primary-lizard";
    btnName = "Draw";
  }
  return (
    <button
      className={`rounded-xl py-3 font-custom font-bold text-4xl text-neutral-darkText bg-gradient-win-to-lose ${className}`}
      onClick={callback}
    >
      {btnName}
    </button>
  );
};
