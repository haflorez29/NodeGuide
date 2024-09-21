import {CreateTable} from './create-table.use-case'

describe("CreateTable", () => {
  const createTable = new CreateTable();
  it("Should create a table", () => {
    const table = createTable.execute({base:2});
    const rows = table.split("\n").length;
    expect(createTable).toBeInstanceOf(CreateTable)
    expect(table).toContain('2 x 10 = 20')
    expect(rows).toBe(10)
  });

  it("Should create a table", () => {
    const options = {
      base: 3,
      limit: 20
    };
    const table = createTable.execute(options);
    const rows = table.split("\n").length;
    expect(table).toContain('3 x 10 = 30')
    expect(rows).toBe(options.limit)
  });
});