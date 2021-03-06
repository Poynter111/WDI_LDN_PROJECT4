const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Team = require('../models/team');
// const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Team.create([{
    teamName: 'Dragons',
    homeGroundAddress: 'Westminster University',
    location: {
      lat: 45,
      lng: 45
    },
    info: 'We are a uni team based in london',
    logo: 'https://i.ytimg.com/vi/mcWPqIu9WyQ/maxresdefault.jpg',
    games: [{
      homeTeam: 'Darons',
      awayTeam: 'Spartans',
      date: '3rd June',
      gameDayAddress: 'Sports pitch number 1',
      location: {
        lat: 45,
        lng: 45
      },
      kickOff: '14:00',
      playerArrival: '11:30',
      info: 'player are expected to arrive ontime to allow for pre game rituals'
    }, {
      homeTeam: 'Darons',
      awayTeam: 'Exiles',
      date: '10th June',
      gameDayAddress: 'Sports pitch number 1',
      location: {
        lat: 45,
        lng: 45
      },
      kickOff: '14:00',
      playerArrival: '11:30',
      info: 'player are expected to arrive ontime to allow for pre game rituals'
    }, {
      homeTeam: 'Darons',
      awayTeam: 'Warriors',
      date: '17th June',
      gameDayAddress: 'Sports pitch number 1',
      location: {
        lat: 45,
        lng: 45
      },
      kickOff: '14:00',
      playerArrival: '11:30',
      info: 'player are expected to arrive ontime to allow for pre game rituals'
    }],
    practices: [{
      title: 'Wednesday practice',
      practiceAddress: 'Westminster University',
      location: {
        lat: 45,
        lng: 45
      },
      startTime: '19:00',
      playerArrival: '18:45',
      info: 'We will be doing lids only no need to bring pads'
    }, {
      title: 'Wednesday practice',
      practiceAddress: 'Westminster University',
      location: {
        lat: 45,
        lng: 45
      },
      startTime: '19:00',
      playerArrival: '18:45',
      info: 'We will be doing lids only no need to bring pads'
    }, {
      title: 'Wednesday practice',
      practiceAddress: 'Westminster University',
      location: {
        lat: 45,
        lng: 45
      },
      startTime: '19:00',
      playerArrival: '18:45',
      info: 'We will be doing lids only no need to bring pads'
    }],
    coach: 'Alex Poynter'
  }])

  // User.create([{
  //   username: 'User1C',
  //   email: 'u1c@u1c',
  //   password: 'u1',
  //   passwordConfirmation: 'u1',
  //   role: 'coach'
  // }])

    .then(teams => console.log(`${teams.length} teams created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
