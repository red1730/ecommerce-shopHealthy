const auth = require('./initFAdmin')

const deleteUser = async (email) => {
  try {
    
  } catch (error) {
    
  }
  const myUser = await auth.getUserByEmail(email)
  auth.deleteUser(myUser.uid)
}

module.exports = deleteUser
