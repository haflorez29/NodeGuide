const fs= require('fs')
const data = fs.readFileSync('./README.md','utf-8')
const wordCount= data.split(' ')
const reactWordCount = wordCount.filter(word => word.toLocaleLowerCase().includes('react'))
const reactWordCountRegex = data.match(/react/gi??[])
console.log('Palabras:',wordCount.length );
console.log('Palabras React:',reactWordCount.length );
console.log('Palabras React Regex:',reactWordCountRegex.length );