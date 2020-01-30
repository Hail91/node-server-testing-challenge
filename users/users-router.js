const router = require('express').Router();

const users = require('./users-model.js');
const restrict = require('../auth/restricted-middleware');

router.get('/', restrict, (req, res) => {
  users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// Custom middleware...



module.exports = router;