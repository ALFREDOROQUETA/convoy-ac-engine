const input = document.getElementById("input");
const output = document.getElementById("output");

let energy = 15;

input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {

    const command = input.value;
    input.value = "";

    const action = parseCommand(command);

    handleAction(action, command);
  }
});

function handleAction(action, command) {

  energy--;

  let response = "";

  switch(action) {

    case "go_north":
      response = "Avanzas hacia el norte.";
      break;

    case "go_south":
      response = "Retrocedes hacia el sur.";
      break;

    case "look":
      response = "Observas el entorno. Todo parece en orden.";
      break;

    case "take":
      response = "No ves nada relevante que coger.";
      break;

    default:
      response = "No entiendo ese comando.";
  }

  output.innerHTML += `<p>> ${command}</p>`;
  output.innerHTML += `<p>${response}</p>`;
  output.innerHTML += `<p>Energía: ${energy}</p>`;
}
