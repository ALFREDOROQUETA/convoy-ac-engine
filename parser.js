function parseCommand(input) {
  input = input.toLowerCase().trim();

  if (input.includes("norte")) return "go_north";
  if (input.includes("sur")) return "go_south";
  if (input.includes("este")) return "go_east";
  if (input.includes("oeste")) return "go_west";

  if (input.includes("mirar")) return "look";
  if (input.includes("coger")) return "take";

  return "unknown";
}
