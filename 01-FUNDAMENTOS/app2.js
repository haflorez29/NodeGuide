// node tiene paquetes precargados, file system permite acceder a archivos del sistema

const fs= require('fs')
const data = fs.readFileSync('./README.md','utf-8')
const newData = data.replace(/React/ig, 'Angular')
fs.writeFileSync('README-Angular.md', newData)
// console.log(newData);