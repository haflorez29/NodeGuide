import { SaveFile } from "./save-file.use-case";
import fs from "fs";
import path from "path";

describe("SaveFile", () => {
  afterEach(() => {
    const fileExists = fs.existsSync("./outputs");
    const fileCustomExists = fs.existsSync("./custom-outputs");
    if (fileExists) fs.rmSync("./outputs", { recursive: true, force: true });
    if (fileCustomExists) fs.rmSync("./custom-outputs", { recursive: true, force: true });
    jest.clearAllMocks();
  });

  it.skip("should save file with default values", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "test content",
      destination: "outputs",
    };
    const filePath = path.resolve(__dirname, "outputs", "tabla_del_table.txt");
    const result = saveFile.execute(options);
    const checkFile = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  it.skip("should save file with custom values", () => {
    const saveFile = new SaveFile();
    const options = {
      fileContent: "custom content",
      destination: "custom-outputs",
      fileName: "custom-table-name",
    };
    const filePath = path.resolve(__dirname, "custom-outputs", "tabla_del_custom-table-name.txt");
    const result = saveFile.execute(options);
    const checkFile = fs.existsSync(filePath);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(result).toBe(true);
    expect(checkFile).toBe(true);
    expect(fileContent).toBe(options.fileContent);
  });

  it.skip("should return false if directory could not be created", () => {
    const saveFile = new SaveFile();
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => { throw new Error('Error creating directory'); });

    const result = saveFile.execute({ fileContent: "test content" });

    expect(result).toBe(false);
    mkdirSpy.mockRestore();
  });

  it.skip("should return false if file could not be created", () => {
    const saveFile = new SaveFile();
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => { throw new Error('Error writing file'); });

    const result = saveFile.execute({
      fileContent: "test content",
      destination: "outputs"
    });
    expect(result).toBe(false);
    writeFileSpy.mockRestore();
  });
});
