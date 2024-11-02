import paperImage from "../access/images/icon-paper.svg";
import rockImage from "../access/images/icon-rock.svg";
import scissorsImage from "../access/images/icon-scissors.svg";
import spockImage from "../access/images/icon-spock.svg";
import lizardImage from "../access/images/icon-lizard.svg";
import { ChooseComputer } from "../components/ChooseInterface";

export const getRandomChoose = (): ChooseComputer => {
  const randomNum = Math.floor(Math.random() * 5);
  switch (randomNum) {
    case 1: {
      return { name: "paper", path: paperImage };
    }
    case 2: {
      return { name: "rock", path: rockImage };
    }
    case 3: {
      return { name: "scissors", path: scissorsImage };
    }
    case 4: {
      return { name: "cyan", path: spockImage };
    }
    case 0: {
      return { name: "lizard", path: lizardImage };
    }
    default: {
      return { name: "lizard", path: lizardImage };
    }
  }
};
