import React, { useContext } from "react";
import { CounterContext } from "../context";

export const ScoreTable = () => {
  const { score } = useContext(CounterContext);
  return (
    <div className="w-28 md:w-48 shadow-2xl rounded-xl p-2 flex flex-col justify-between items-center h-36 bg-white">
      <span className="text-neutral-scoreText tracking-widest text-center font-custom text-xl md:text-2xl font-bold">
        SCORE
      </span>
      <span className="text-neutral-darkText text-6xl md:text-8xl font-custom font-bold">
        {score}
      </span>
    </div>
  );
};
