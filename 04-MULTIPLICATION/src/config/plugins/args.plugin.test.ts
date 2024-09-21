const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args];
  const { yarg } = await import("./args.plugin");
  return yarg;
};

describe("APP", () => {
  const originalArgv = process.argv;  

  beforeEach(() =>{
    process.argv = originalArgv;
    jest.resetModules();
  })

  it("should return default values", async () => {
    const argv = await runCommand(["-b", "5"]);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        d: "./output",
        l: 10,
        n: "table",
        s: false,
      })
    );
  });

  it("should return configuration with custom values", async () => {
    const argv = await runCommand(["-b", "8", '-l', '20', '-s', '-n', 'custom-name', '-d', 'custom-dir']);
    expect(argv).toEqual(
      expect.objectContaining({
        b: 8,
        d: "custom-dir",
        l: 20,
        n: "custom-name",
        s: true,
      })
    );
  });
});
