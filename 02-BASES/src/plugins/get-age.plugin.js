const getAge = require('get-age')

const getAgeAdapter = (birthdate) => {
    if (!birthdate) {
        new Error('bithdate is required')
    }
    return getAge(birthdate);
};

module.exports = {
    getAgeAdapter,
}