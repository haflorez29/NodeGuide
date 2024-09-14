const fs = require("fs");

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {} // repository: Repository
  execute({
    fileContent,
    destination = "output",
    fileName = "table.txt",
  }: SaveFileOptions): boolean {
    try {
      fs.mkdirSync(destination, { recursive: true });
      // Escribe la tabla en un archivo
      fs.writeFileSync(`${destination}/tabla_del_${fileName}.txt`, fileContent);
      console.log("File Created");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
