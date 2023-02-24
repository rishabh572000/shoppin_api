
const userService = require('../service/user.service')

module.exports = {
  signupUser: async (req, res) => {
    try {
      await userService.signupUser(req, res)
    } catch (err) {
        console.log(err)
    //   const msg = err.message || 'SOMETHING_WENT_WRONG'
    //   return res.status(422).json(responseData(msg, {}, req))
    }
  },
  loginUser: async (req, res) => {
    try {
      await userService.loginUser(req, res)
    } catch (err) {
        console.log(err)
    }
  },
}