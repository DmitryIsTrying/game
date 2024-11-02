export const getWinner = (playChoose, computerChoose) => {
  if (!computerChoose) return "nothing";

  switch (playChoose + computerChoose) {
    case "rockscissors":
    case "rocklizard":
    case "rockcyan":
      return "win";
    case "paperrock":
    case "papercyan":
    case "paperlizard":
      return "win";
    case "scissorspaper":
    case "scissorslizard":
    case "scissorscyan":
      return "win";
    case "lizardpaper":
    case "lizardcyan":
      return "win";
    case "cyanscissors":
    case "cyanrock":
    case "cyanpaper":
    case "cyanlizard":
      return "win";
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
    case "lizardlizard":
    case "cyancyan":
      return "draw";
    default:
      return "lose";
  }
};
