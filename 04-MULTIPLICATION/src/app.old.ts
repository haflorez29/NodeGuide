import { yarg } from "./config/plugins/args.plugin";

const fs = require("fs");

const { b: base, l: limit, s: show } = yarg;
const messag: string = "homa mundo";
console.log(messag);
const tableName = `
=======================
      Tabla del 5
=======================
`;
let fiveTable = "";

for (let i = 1; i <= limit; i++) {
  fiveTable += `${base} x ${i} = ${base! * i}\n`;
}
const outputPath = "output";
fs.mkdirSync(outputPath, { recursive: true });

// Escribe la tabla en un archivo llamado 'tabla_del_5.txt'
fs.writeFileSync(`${outputPath}/tabla_del_${base}.txt`, tableName + fiveTable);

if (show) {
  const data = fs.readFileSync(`${outputPath}/tabla_del_${base}.txt`, "utf-8");
  console.log(data);
}
