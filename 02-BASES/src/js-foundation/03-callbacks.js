const users = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]

function getUserById(id, callback) {
    const user = users.find(function (user) {
        return user.id == id
    })
   if(!user){
    return callback('user not found'+' '+id)
   }
    return callback(null, user)
}

module.exports = {
    getUserById
}