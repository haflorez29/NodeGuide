// console.log("hola execute");
// const {emailTemplate} = require("./js-foundation/01-template");
// -----------------------------
// console.log(templateExport);
// require('./js-foundation/02-destructuring')
// ------------------------------
// callback and arrow function
// const {getUserById} = require('./js-foundation/03-callbacks')
// console.log(process.env);
// const id = 3
// getUserById(id, (error, user) =>{
//     if(error) throw new Error(error);
//     console.log(user);
// });
// -------------------------------------------
// factoryFunction
const { getUUID, getAgeAdapter } = require('./plugins')
const { buildMakePerson } = require('./js-foundation/05-factory')

const makePerson = buildMakePerson({ getUUID, getAgeAdapter })
const john = makePerson({ name: 'Yose', birthdate: '2000-12-04' })
console.log(john);


