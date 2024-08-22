// const { getUUID } = require('../plugins/get-age.plugin')
// const { getAgeAdapter } = require('../plugins/get-age.plugin')
// const {getUUID, getAgeAdapter} = require('../plugins')

// funcion que devuelve otra funcion, vendria siendo la entidad y no debe tener dependencias en el mismo archivo
const buildMakePerson = ({getUUID, getAgeAdapter}) => {
    return ({ name, birthdate }) => {
        return {
            id: getUUID(),
            name: name,
            birtdate: birthdate,
            // possible function to determinate year
            // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
            age: getAgeAdapter(birthdate)
        }
    }
}

// const buildPerson = ({ name, birthdate }) => {
//     return {
//         id: getUUID(),
//         name: name,
//         birtdate: birthdate,
//         // possible function to determinate year
//         // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
//         age: getAgeAdapter(birthdate)
//     }
// }

// const obj = {
//     name: 'Jhon',
//     birthdate: '1993-05-03'
// }
// const john = buildPerson(obj);
// console.log(john);

module.exports = {
    buildMakePerson
}
