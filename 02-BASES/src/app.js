// console.log("hola execute");
// const {emailTemplate} = require("./js-foundation/01-template");
// -----------------------------
// console.log(templateExport);
// require('./js-foundation/02-destructuring')
// ------------------------------
const {getUserById} = require('./js-foundation/03-callbacks')
// console.log(process.env);
const id = 3
getUserById(id, (error, user) =>{
    if(error) throw new Error(error);
    console.log(user);
});

