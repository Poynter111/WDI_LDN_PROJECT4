const router = require('express').Router();
const teams = require('../controllers/teams');
// const auth = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

router.route('/teams')
  .get(teams.index)
  .post(teams.create);

router.route('/teams/:id/practices')
  .get(teams.practiceIndex)
  .post(teams.practicCreate);

router.route('/teams/:id/practices/:practiceId')
  .get(teams.practicShow)
  .put(teams.practiceUpdate);


router.route('/teams/:id')
  .get(teams.show)
  .put(teams.update)
  .delete(teams.delete);

module.exports = router;
