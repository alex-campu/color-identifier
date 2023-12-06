# Unidad 3 Actividad 2

![Screenshot 2023-12-06 at 12.28.22.png](https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/408037979_7273059216057963_2403056639578396727_n.jpg?stp=cp6_dst-jpg_s1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=NTuSvOrlpMwAX83d1Zb&_nc_ht=scontent-qro1-2.xx&oh=00_AfBDDjoHRmHfIz1slhQQAIKBrPB27HGJaNieNGCDMHqkiw&oe=65757934)

Programa de linea de comandos que de acuerdo al color introducido por el usuario indica si es primario, secundario o terciario.

Creado con node.js, repositorio:

https://github.com/alex-campu/color-identifier/blob/main/index.js

```jsx
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
```
