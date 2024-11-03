import { useEffect, useState } from "react";
import { GameInterface } from "./components/GameInterface";
import { Header } from "./components/Header";
import { Rules } from "./components/Rules";
import { CounterContext } from "./context";

function App() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (localStorage.getItem("score")) {
      setScore(Number(localStorage.getItem("score")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  return (
    <div className="w-full min-h-screen px-16 py-2 sm:p-10  bg-gradient-to-c flex flex-col  items-center justify-start">
      <CounterContext.Provider value={{ score, setScore }}>
        <Header />
        <GameInterface />
        <Rules />
      </CounterContext.Provider>
    </div>
  );
}

export default App;
