import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Map from '../common/Map';


class TeamsShow extends React.Component {
  state = {

  }

  componentDidMount(){
    console.log(this.props.match.params.id);
    axios.get(`/api/teams/${this.props.match.params.id}`)
      .then(res => this.setState({team: res.data}));
  }

  handleDelete = () => {
    axios.delete(`/api/teams/${this.props.match.params.id}`, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/teams'));
  }
  //
  // handleChange = ({target: { name, value} }) => {
  //   const comment = { ...this.state.comment, [name]: value };
  //   this.setState({ comment });
  // }
  //
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //   const { id } = this.props.match.params;
  //   axios.post(`/api/burgers/${id}/comments`, this.state.comment, {
  //     headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //   })
  //     .then(res => this.setState({ burger: res.data, comment: {} }));
  // }
  //
  // handleCommentDelete = (comment) => {
  //   const { id } = this.props.match.params;
  //   axios.delete(`/api/burgers/${id}/comments/${comment._id}`, {
  //     headers: { Authorization: `Bearer ${Auth.getToken()}`}
  //   })
  //     .then(res => this.setState({ burger: res.data }));
  // }

  render(){
    const { team } = this.state;
    if(!team) return null;
    return(

      <div className="columns">
        <div className="column">
          {team.games.map(game =>
            <div key={game._id}>
              <Link to={`/teams/${team._id}/games/${game._id}`}>
                <p>{game.homeTeam}</p>
                <p>{game.awayTeam}</p>
                <p>{game.kickOff}</p>
              </Link>
            </div>
          )}
          {team.practices.map(practice =>
            <div key={practice._id}>
              <Link to={`/teams/${team._id}/practices/${practice._id}`}>
                <p>{practice.title}</p>
                <p>{practice.practiceAddress}</p>
                <p>{practice.startTime}</p>
              </Link>
            </div>
          )}
        </div>
        <div className="column">
          <div className="hero-iamge" style={{ backgroundImage: `url(${team.logo})`}} />
          <div className="title">{team.teamName}</div>
          <p>{team.homeGroundAddress}</p>
          <p>{team.info}</p>
          <Map center={team.location} />
          <hr />
          <div className="columns">
            <div className="column">
              <Link className="button" to={`/teams/${team._id}/games`}>View all games</Link>
              <Link className="button" to={`/teams/${team._id}/practices`}>View all practices</Link>
              <Link
                to={`/teams/${team._id}/edit`}
                className="button"
              >Edit</Link>
              <Link
                to={`/teams/${team._id}/games/new`}
                className="button"
              >NEW GAME</Link>
              <Link
                to={`/teams/${team._id}/practices/new`}
                className="button"
              >NEW Practice
              </Link>
            </div>
            <div className="column">
              <button
                onClick={this.handleDelete}
                className="button is-danger"
              >Delete</button>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default TeamsShow;
