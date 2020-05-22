const router = require('express').Router();

const users = require('./users-model.js');
const restrict = require('../auth/restricted-middleware');

router.get('/', restrict, (req, res) => {
  users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => res.send(err));
});

router.delete('/:id', restrict, (req, res) => {
  users.remove()
  .then(user => {
    res.status(204).json({
      message: 'user successfully deleted!'
    })
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({
      error: 'The specified user could not be found!'
    })
  })
})

// Custom middleware...

module.exports = router;