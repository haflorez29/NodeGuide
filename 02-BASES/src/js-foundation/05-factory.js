// const { getUUID } = require('../plugins/get-age.plugin')
// const { getAgeAdapter } = require('../plugins/get-age.plugin')
const {getUUID, getAgeAdapter} = require('../plugins')

const obj = {
    name: 'Jhon',
    birthdate: '1993-05-03'
}
const buildPerson = ({ name, birthdate }) => {
    return {
        id: getUUID(),
        name: name,
        birtdate: birthdate,
        // possible function to determinate year
        // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
        age: getAgeAdapter(birthdate)
    }
}

const john = buildPerson(obj);
console.log(john);
