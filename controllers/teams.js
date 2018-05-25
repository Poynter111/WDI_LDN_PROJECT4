const Team = require('../models/team');

//-------------------------------------------------------------------INDEX TEAMS
function indexTeams(req, res, next){
  Team
    .find()
    .exec()
    .then(teams => res.json(teams))
    .catch(next);
}

//------------------------------------------------------------------CREATE TEAMS
function createTeams(req, res, next){
  Team
    .create(req.body)
    .then((team) => {
      res.status(201).json(team);
    })
    .catch(next);
}

//------------------------------------------------------------------SHOW BURGERS
function showTeam(req, res, next){
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      if(!team) return res.sendStatus(404);
      res.json(team);
    })
    .catch(next);
}

//----------------------------------------------------------------UPDATE BURGERS
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

//----------------------------------------------------------------DELETE BURGERS
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




module.exports = {
  index: indexTeams,
  create: createTeams,
  show: showTeam,
  update: updateTeam,
  delete: deleteTeam,
  practicCreate: teamsPracticeCreate,
  practicShow: teamPracticeShow,
  practiceIndex: indexPractices,
  practiceUpdate: teamPracticeUpdate
};
