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
// const { getUUID, getAgeAdapter } = require('./plugins')
// const { buildMakePerson } = require('./js-foundation/05-factory')

// const makePerson = buildMakePerson({ getUUID, getAgeAdapter })
// const john = makePerson({ name: 'Yose', birthdate: '2000-12-04' })
// console.log(john);
// ------------------------------------------------
// const getPokemonById = require('./js-foundation/06-promises.js')
// getPokemonById(1)
// .then(pokemon =>console.log(pokemon))
// .catch(err=>{console.log('Intente otro')});
// -------------------------------------------------
const { buildLogger }= require('./plugins')
const logger = buildLogger('Aapp.js')
logger.log('hola mundo')
logger.error('Esto es un error')
