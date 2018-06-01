const Team = require('../models/team');

//-------------------------------------------------------------------INDEX TEAMS
function indexTeams(req, res, next){
  Team
    .find()
    .populate('createdBy')
    .exec()
    .then(teams => res.json(teams))
    .catch(next);
}

//------------------------------------------------------------------CREATE TEAMS
function createTeams(req, res, next){
  req.body.createdBy = req.currentUser;
  Team
    .create(req.body)
    .then((team) => {
      res.status(201).json(team);
    })
    .catch(next);
}

//------------------------------------------------------------------SHOW Teams
function showTeam(req, res, next){
  Team
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then(team => {
      if(!team) return res.sendStatus(404);
      res.json(team);
    })
    .catch(next);
}

//----------------------------------------------------------------UPDATE Teams
function updateTeam(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      if(!team) return res.sendStatus(404);
      return Object.assign(team, req.body);
    })
    .then(team => team.save())
    .then((team) => res.json(team))
    .catch(next);
}

//----------------------------------------------------------------DELETE Teams
function deleteTeam(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      if(!team) return res.sendStatus(404);
      return team.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

//-------------------------------------------------------------------INDEX TEAMS
function indexPractices(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(teams => res.json(teams.practices))
    .catch(next);
}

//--------------------------------------------------------------Create Practices
function teamsPracticeCreate(req, res, next){
  req.body.createdBy = req.currentUser;
  Team
    .findById(req.params.id)
    .populate('practices.createdBy')
    .exec()
    .then(team => {
      team.practices.push(req.body);
      return team.save();
    })
    .then(team => res.json(team))
    .catch(next);
}

//--------------------------------------------------------------Create Practices
function teamPracticeShow(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      if(!team) return res.sendStatus(404);
      const practice = team.practices.id(req.params.practiceId);
      res.json(practice);
    })
    .catch(next);
}

//--------------------------------------------------------------UPDATE Practices
function teamPracticeUpdate(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      const practice = team.practices.id(req.params.practiceId);
      if(!team) return res.sendStatus(404);
      Object.assign(practice, req.body);
      team.save();
      res.json(practice);
    })
    .catch(next);
}

//--------------------------------------------------------------Delete Practices
function teamPracticeDelete(req, res, next){
  Team.findById(req.params.id)
    .exec()
    .then(team => {
      const practice = team.practices.id(req.params.practiceId);
      // if(!practice.createdBy._id.equals(req.currentUser._id)) {
      //   throw new Error('Unauthorized');
      // }
      practice.remove();
      return team.save();
    })
    .then(team => res.json(team))
    .catch(next);
}

//-------------------------------------------------------------------Index Games
function indexGames(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(teams => res.json(teams.games))
    .catch(next);
}

//------------------------------------------------------------------Create Games
function teamsGameCreate(req, res, next){
  req.body.createdBy = req.currentUser;
  Team
    .findById(req.params.id)
    .populate('games.createdBy')
    .exec()
    .then(team => {
      team.games.push(req.body);
      return team.save();
    })
    .then(team => res.json(team))
    .catch(next);
}

//--------------------------------------------------------------Create Practices
function teamGameShow(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      if(!team) return res.sendStatus(404);
      const game = team.games.id(req.params.gameId);
      res.json(game);
    })
    .catch(next);
}

//--------------------------------------------------------------UPDATE Practices
function teamGameUpdate(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      const game = team.games.id(req.params.gameId);
      if(!team) return res.sendStatus(404);
      Object.assign(game, req.body);
      team.save();
      res.json(game);
    })
    .catch(next);
}

//--------------------------------------------------------------Delete Practices
function teamGameDelete(req, res, next){
  Team.findById(req.params.id)
    .exec()
    .then(team => {
      const game = team.games.id(req.params.gameId);
      // if(!practice.createdBy._id.equals(req.currentUser._id)) {
      //   throw new Error('Unauthorized');
      // }
      game.remove();
      return team.save();
    })
    .then(team => res.json(team))
    .catch(next);
}
module.exports = {
  index: indexTeams,
  create: createTeams,
  show: showTeam,
  update: updateTeam,
  delete: deleteTeam,
  practiceIndex: indexPractices,
  practiceCreate: teamsPracticeCreate,
  practiceShow: teamPracticeShow,
  practiceUpdate: teamPracticeUpdate,
  practiceDelete: teamPracticeDelete,
  gameIndex: indexGames,
  gameCreate: teamsGameCreate,
  gameShow: teamGameShow,
  gameUpdate: teamGameUpdate,
  gameDelete: teamGameDelete
};
