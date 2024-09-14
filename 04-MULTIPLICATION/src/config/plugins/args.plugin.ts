import yargs from "yargs";
import { hideBin } from "yargs/helpers";

export const yarg = yargs(hideBin(process.argv))
  .option("b", {
    alias: "base",
    type: "number",
    demandOptions: true,
    describe: "Multiplication table base",
  })
  .option("l", {
    alias: "limit",
    type: "number",
    default: 10,
    describe: "Multiplication table limit",
  })
  .option("s", {
    alias: "show",
    type: "boolean",
    default: false,
    describe: "Show multiplication table",
  })
  .option("n", {
    alias: "fileName",
    type: "string",
    default: "table",
    describe: "File name for multiplication table",
  })
  .option("d", {
    alias: "destination",
    type: "string",
    default: './output',
    describe: "File destination for multiplication table",
  })
  .check((argv, options) => {    
    if (argv.b! < 0) throw "Error: base argument must be a number";
    return true
  })
  .parseSync();
// tareas sincronas
// .parse
// cuando se que la tarea es posiblemente asincrona
