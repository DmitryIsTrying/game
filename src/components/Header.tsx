import React, { memo } from "react";
import { ScoreTable } from "./ScoreTable";
import logo from "../access/images/logo-bonus.svg";

export const Header = memo(() => {
  return (
    <div className="flex mb-28 flex-col sm:flex-row justify-between items-center bg-transparent border-4 w-full max-w-screen-lg border-neutral-headerOutline rounded-xl p-6 md:p-8">
      <img className="sm:mb-0 mb-4" src={logo} alt="logo" />
      <ScoreTable />
    </div>
  );
});
