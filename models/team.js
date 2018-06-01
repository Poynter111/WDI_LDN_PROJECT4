const mongoose = require('mongoose');

//Model for Game day resource---------------------------------------------------
const gameDaySchema = new mongoose.Schema({
  homeTeam: { type: String },
  awayTeam: { type: String },
  date: {type: String },
  gameDayAddress: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  kickOff: { type: String },
  playerArrival: { type: String },
  info: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

//Model for Practice resource---------------------------------------------------
const practiceSchema = new mongoose.Schema({
  title: { type: String },
  practiceAddress: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  startTime: { type: String },
  playerArrival: { type: String },
  info: { type: String },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

//Model for Teams resource------------------------------------------------------
const teamSchema = new mongoose.Schema({
  teamName: { type: String },
  homeGroundAddress: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  info: { type: String },
  logo: { type: String },
  games: [ gameDaySchema ],
  practices: [ practiceSchema ],
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
});







module.exports = mongoose.model('Team', teamSchema);
