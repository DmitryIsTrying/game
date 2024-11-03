import React, { useState, useEffect } from "react";
type CountdownProps = {
  callback: () => void;
};

export const Countdown = ({ callback }: CountdownProps) => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    if (seconds <= 0) callback();
    setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
  }, [seconds]);

  return (
    <div className="flex justify-center items-center w-full font-custom text-6xl sm:text-9xl text-white font-bold">
      <h1 key={seconds} className="animate__animated animate__bounceIn">
        {seconds}
      </h1>
    </div>
  );
};
