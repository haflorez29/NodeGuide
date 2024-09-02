import yargs from "yargs";
import {hideBin} from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
.parseSync()
// tareas sincronas
// .parse
// cuando se que la tarea es posiblemente asincrona