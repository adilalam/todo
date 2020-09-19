const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {

  try {
    const token = req.header('Authorization').replace('Bearer ', '')
    // console.log(token)
    const decode = jwt.verify(token, 'thisismynewcourse')
    const user = await User.findOne({ _id: decode._id, 'tokens.token': token })

    if (!user) {
      throw new Error()
    }

    req.user = user
    req.token = token

    next()
  } catch (error) {
    res.status(400).send({error: "Please authenticate"})
  }

}


module.exports = auth