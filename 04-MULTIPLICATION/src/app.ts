// import { yarg } from "./config/plugins/args.plugin";

// // console.log(process.env);
// // argumento que se envian a node para ejecutarse
// console.log(process.argv);
// // para el siguiente comando : npm run dev --b 10, destructuring
// const [tsnode, app, ...args] = process.argv;
// console.log(args);

// console.log(yarg.b);

// funcion autoinvocada asyncrona
(async()=>{
    await main;
})();

async function main(){
    console.log('Main ejecutado');
}
