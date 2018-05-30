import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Map from '../common/Map';


class GamesShow extends React.Component {
  state = {

  }

  componentDidMount(){
    const { id, gameId } = this.props.match.params;
    axios.get(`/api/teams/${id}/games/${gameId}`)
      .then(res => this.setState({game: res.data}));
  }

  handleDelete = () => {
    const { id, gameId } = this.props.match.params;
    axios.delete(`/api/teams/${id}/games/${gameId}`, {
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
    const { game } = this.state;
    if(!game) return null;
    return(

      <div className="columns">
        <div className="column">
          <h1>GAME SHOW Page</h1>
        </div>
        <div className="column">
          <div className="hero-iamge" style={{ backgroundImage: `url(${game.logo})`}} />
          <div className="title">{game.homeTeam}</div>
          <div className="title">{game.awayTeam}</div>
          <p>{game.homeGroundAddress}</p>
          <p>{game.info}</p>
          <Map center={game.location} />
          <hr />
          <div className="columns">
            <div className="column">

              <Link
                to={`/teams/${this.props.match.params.id}/games/${game._id}/edit`}
                className="button"
              >Edit</Link>
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

export default GamesShow;
