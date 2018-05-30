import React from 'react';
import GameForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class GamesEdit extends React.Component {

  state = {
    game: {},
    errors: {}
  };

  componentDidMount(){
    const { id, gameId } = this.props.match.params;
    axios.get(`/api/teams/${id}/games/${gameId}`)
      .then(res => this.setState({game: res.data}));
  }


  handleChange = ({target: { name, value} }) => {
    console.log(value);
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({ game: { errors, ...this.state.game, [name]: value }}, () => console.log(this.state));
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ address: formatted_address, location: location.toJSON()});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id, gameId } = this.props.match.params;
    axios.put(`/api/teams/${id}/games/${gameId}`, this.state.game, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/teams/${id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return <GameForm
      game={this.state.game}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handlePlaceChange={this.handlePlaceChange}
      errors={this.state.errors}
    />;
  }

}

export default GamesEdit;
