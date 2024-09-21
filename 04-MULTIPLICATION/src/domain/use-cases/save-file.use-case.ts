const fs = require("fs");
const path = require("path");

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
  constructor() {} 

  execute({
    fileContent,
    destination = "output",
    fileName = "table",
  }: SaveFileOptions): boolean {
    try {
      // Usa path para asegurarte de que funcione en cualquier sistema operativo
      const dirPath = path.resolve(destination);
      const filePath = path.resolve(dirPath, `tabla_del_${fileName}.txt`);

      // Crea el directorio si no existe
      fs.mkdirSync(dirPath, { recursive: true });

      // Escribe el archivo con el contenido
      fs.writeFileSync(filePath, fileContent);
      console.log("File Created:", filePath);
      
      return true;
    } catch (error:any) {
      console.error("Error creating file:", error.message);
      return false;
    }
  }
}
