import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number | undefined; 
    limit: number;
    show: boolean;
    fileName: string;
    destination: string;
}

// es el que orquesta como funciona la aplicacion
export class ServerApp {
  static run({base, limit, show, fileName, destination}: RunOptions){
    console.log('Server running');
    const table = new CreateTable().execute({base, limit})
    const wasCreated = new SaveFile().execute({fileContent: table, fileName: fileName, destination})
    show ? console.log(table): null
    wasCreated ? console.log('File Created'): console.log('File not Created')
  }
}
