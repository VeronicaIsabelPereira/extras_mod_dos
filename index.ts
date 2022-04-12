import * as minimist from "minimist";
import { ProductCollection } from "./models";
import { ProductController } from "./controllers";

function parsear(argv) {
  const resultado = minimist(argv);
  if (resultado.search) {
    return {
      search: resultado.search,
    };
  } else {
    return {};
  }
}
function main() {
  const terminal = process.argv.slice(2);
  const terminalParseada = parsear(terminal);
  const controlador = new ProductController();
  controlador.processOptions(terminalParseada).then((resultado) => {
    console.log(resultado);
  });
}
main();
