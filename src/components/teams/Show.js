import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Map from '../common/Map';

class TeamsShow extends React.Component {
  state = {}

  componentDidMount(){
    axios.get(`/api/users/${Auth.getPayLoad().sub}`)
      .then(res => this.setState({user: res.data}));
    axios.get(`/api/teams/${this.props.match.params.id}`)
      .then(res => this.setState({team: res.data}));
  }

  handleDelete = () => {
    axios.delete(`/api/teams/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/teams'));
  }

  render(){
    const { team, user } = this.state;
    if(!team || !user) return null;
    console.log(team);
    return(
      <div className="columns">
        <div className="column">
          <div className="columns is-multiline pannel">
            <div className="column is-12">
              <h2 className="title inline-Block">Games Schedule</h2>
              <Link className="button floatRight" to={`/teams/${team._id}/games`}>View all games</Link>
            </div>
            {team.games.map(game =>
              <div className="column is-one-third" key={game._id}>
                <Link to={`/teams/${team._id}/games/${game._id}`}>
                  <div className="card gameShow">
                    <p>{game.awayTeam} @ {game.homeTeam}</p>
                    <p>{game.date} @ {game.kickOff}</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="columns is-multiline pannel">
            <div className="column is-12">
              <h2 className="title inline-Block">Practice Schedule</h2>
              <Link className="button floatRight" to={`/teams/${team._id}/practices`}>View all practices</Link>

            </div>
            {team.practices.map(practice =>
              <div className="column is-one-third" key={practice._id}>
                <div className="card gameShow">
                  <Link to={`/teams/${team._id}/practices/${practice._id}`}>
                    <p>{practice.title}</p>
                    <p>{practice.practiceAddress}</p>
                    <p>{practice.startTime}</p>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="column">
          <div className="hero-iamge is-12 teamLogo" style={{ backgroundImage: `url(${team.logo})`}} />
          <div className="title">{team.teamName}</div>
          <p>Our home ground address: {team.homeGroundAddress}</p>
          <p>Head Coach: {team.createdBy.username}</p>
          <p>{team.info}</p>
          <Map center={team.location} />
          <hr />
          <div className="columns">
            {Auth.isCoach(user) && <div className="column pannel">
              <h1 className="title">Coach's Panel</h1>
              <h1></h1>
              <Link
                to={`/teams/${team._id}/games/new`}
                className="button coachPannelBtn"
              >Add a GAME</Link>
              <Link
                to={`/teams/${team._id}/practices/new`}
                className="button coachPannelBtn"
              >Add a Practice
              </Link>
              <Link
                to={`/teams/${team._id}/edit`}
                className="button coachPannelBtn is-success"
              >Edit Team</Link>
              <button
                onClick={this.handleDelete}
                className="button is-danger coachPannelBtn"
              ><span>Delete Team</span>
              </button>
            </div>}
          </div>
        </div>
      </div>

    );
  }
}

export default TeamsShow;
