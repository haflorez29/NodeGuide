import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app";
describe("APP", () => {
  const options = {
    base: 2,
    limit: 10,
    show: false,
    fileName: "name-test",
    destination: "test-destination",
  };
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should be true", () => {
    const serverApp = new ServerApp();
    expect(serverApp).toBeInstanceOf(ServerApp);
    expect(typeof ServerApp.run).toBe("function");
  });
  it("should run ServerApp with options", () => {
    const logSpy = jest.spyOn(console, "log");
    const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
    const saveFileeSpy = jest.spyOn(SaveFile.prototype, "execute");
    ServerApp.run(options);
    expect(logSpy).toHaveBeenCalledTimes(3);
    expect(logSpy).toHaveBeenCalledWith("Server running");
    expect(logSpy).toHaveBeenLastCalledWith("File Created");
    expect(createTableSpy).toHaveBeenNthCalledWith(1, { base: 2, limit: 10 });
    expect(saveFileeSpy).toHaveBeenNthCalledWith(1, {
      destination: expect.any(String),
      fileContent: expect.any(String),
      fileName: options.fileName,
    });
  });
  // it("should run ServerApp with options integration test", () => {
  //   const logSpy = jest.spyOn(console, "log");
  //   const createTableSpy = jest.spyOn(CreateTable.prototype, "execute");
  //   const saveFileeSpy = jest.spyOn(SaveFile.prototype, "execute");
  //   ServerApp.run(options);
  //   expect(logSpy).toHaveBeenCalledTimes(3);
  //   expect(logSpy).toHaveBeenCalledWith("Server running");
  //   expect(logSpy).toHaveBeenLastCalledWith("File Created");
  //   expect(createTableSpy).toHaveBeenNthCalledWith(1, { base: 2, limit: 10 });
  //   expect(saveFileeSpy).toHaveBeenNthCalledWith(1, {
  //     destination: expect.any(String),
  //     fileContent: expect.any(String),
  //     fileName: options.fileName,
  //   });
  // });
  it("should run ServerApp with options", () => {
    const logMock = jest.fn();
    const logErrorMock = jest.fn();
    const saveFile = jest.fn().mockReturnValue(true);
    const createMock = jest.fn().mockReturnValue('1 x 1 = 1');

    console.log = logMock;
    console.error = logErrorMock;

    CreateTable.prototype.execute = createMock;
    SaveFile.prototype.execute = saveFile;

    ServerApp.run(options);

    expect(logMock).toHaveBeenCalledTimes(2);
    expect(logMock).toHaveBeenCalledWith("Server running");
    expect(logMock).toHaveBeenLastCalledWith("File Created");
    expect(logErrorMock).not.toHaveBeenCalled();
    expect(createMock).toHaveBeenNthCalledWith(1, { base: 2, limit: 10 });
    expect(saveFile).toHaveBeenNthCalledWith(1, {
      destination: options.destination,
      fileContent: expect.any(String),
      fileName: options.fileName,
    });
  });
});
