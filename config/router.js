const router = require('express').Router();
const teams = require('../controllers/teams');
const auth = require('../controllers/auth');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.route('/teams')
  .get(teams.index)
  .post(secureRoute ,teams.create);

router.route('/teams/:id/practices')
  .get(teams.practiceIndex)
  .post(teams.practiceCreate);

router.route('/teams/:id/practices/:practiceId')
  .get(teams.practiceShow)
  .put(teams.practiceUpdate)
  .delete(teams.practiceDelete);

router.route('/teams/:id/games')
  .get(teams.gameIndex)
  .post(teams.gameCreate);

router.route('/teams/:id/games/:gameId')
  .get(teams.gameShow)
  .put(teams.gameUpdate)
  .delete(teams.gameDelete);

router.route('/teams/:id')
  .get(teams.show)
  .put(teams.update)
  .delete(teams.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/users')
  .get(users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update);

module.exports = router;
