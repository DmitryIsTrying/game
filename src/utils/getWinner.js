export const getWinner = (playChoose, computerChoose) => {
  if (!computerChoose) return "nothing";
  console.log();

  switch (playChoose + computerChoose) {
    case "rockscissors":
    case "rocklizard":
      return "win";
    case "paperrock":
    case "papercyan":
      return "win";
    case "scissorspaper":
    case "scissorslizard":
      return "win";
    case "lizardpaper":
    case "lizardcyan":
      return "win";
    case "cyanscissors":
    case "cyanrock":
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
