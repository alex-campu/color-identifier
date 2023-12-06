const readline = require("readline");

const colors = {
  primario: ["rojo", "azul", "amarillo"],
  secundario: ["naranja", "morado", "verde"],
  terciario: [
    "amarillo-naranja",
    "rojo-naranja",
    "rojo-violeta",
    "azul-violeta",
    "azul-verde",
    "amarillo-verde",
  ],
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const findColor = () => {
  rl.question(
    "Escribe un color para saber si es primario, secundario o terciario: ",
    (colorInput) => {
      let colorFoundMessage = "";
      for (let colorType in colors) {
        if (colors[colorType].includes(colorInput)) {
          colorFoundMessage = `El color ${colorInput} es ${colorType}`;
        }
      }

      if (colorFoundMessage) {
        console.log(colorFoundMessage);

        rl.close();
      } else {
        console.log(
          `El color introducido no es primario, secundario ni terciario, intenta con uno de la lista:`,
          JSON.stringify(
            [...colors.secundario, ...colors.primario, ...colors.terciario],
            null,
            2
          )
        );

        findColor();
      }
    }
  );
};

findColor();
