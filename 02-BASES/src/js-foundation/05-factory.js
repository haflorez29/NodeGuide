const { v4: uuidv4 } = require('uuid')
const getAge = require('get-age')

const obj = {
    name: 'Jhon',
    birthdate: '1993-05-03'
}
const buildPerson = ({ name, birthdate }) => {
    return {
        id: uuidv4(),
        name: name,
        birtdate: birthdate,
        // possible function to determinate year
        // age: new Date().getFullYear() - new Date(birthdate).getFullYear()
        age: getAge(birthdate)
    }
}

const john = buildPerson(obj);
console.log(john);
