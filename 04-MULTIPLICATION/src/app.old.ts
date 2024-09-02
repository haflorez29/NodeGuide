const fs= require('fs')

const messag:string = 'homa mundo'
console.log(messag);
const tableName = `
=======================
      Tabla del 5
=======================
`;
let fiveTable = '';

for (let i = 1; i <= 10; i++) {
    fiveTable += `5 x ${i} = ${5 * i}\n`;
}
const outputPath = 'output'
fs.mkdirSync(outputPath, {recursive: true})

// Escribe la tabla en un archivo llamado 'tabla_del_5.txt'
fs.writeFile(`${outputPath}/tabla_del_5.txt`, tableName + fiveTable, (err:string) => {
    if (err) throw err;  // Maneja posibles errores
    console.log('La tabla del 5 ha sido guardada en tabla_del_5.txt');
});

const data = fs.readFileSync('tabla_del_5.txt','utf-8')
console.log(data);

