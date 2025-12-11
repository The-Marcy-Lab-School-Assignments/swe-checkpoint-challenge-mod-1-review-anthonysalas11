// Return a new user object with username, email, isActive: true, loginCount: 0
const createUser = (username, email) => {
username,
email,
login = 0 
};

// Increase the user's loginCount by 1
const incrementLogin = (user) => {
user ++
};

// Set isActive to false and delete the email property. Return the user.
const deactivateUser = (user) => {
isActive = false
delete user.email
};

// Print each property and value in the format "key: value"
const printUserInfo = (user) => {
username:user.username
email:user.email
user.isActive = true
user.login
};

// BONUS: Return a true copy of the user object (not a reference)
const cloneUser = (user) => {

};

module.exports = {
  createUser,
  printUserInfo,
  incrementLogin,
  deactivateUser,
  cloneUser,
};
