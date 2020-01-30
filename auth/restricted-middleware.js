const jwt = require('jsonwebtoken');

const { jwtSecret } = require('../secretStuff/secrets');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (token) {
    jwt.verify(token, jwtSecret, (error, decodedToken) => {
      if (error) {
        // The token is not valid
        res.status(401).json({
          message: "You shall not pass!"
        })
      }
      else {
        req.user = decodedToken.user;
        next();
      }
    })
  }
  else {
    res.status(401).json({
      message: 'You shall not pass!'
    })
  }
};