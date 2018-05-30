import React from 'react';
import TeamForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';


class TeamsNew extends React.Component {

  state = {
    errors: {}
  };

  handleChange = ({target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({errors, [name]: value });
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ homeGroundAddress: formatted_address, location: location.toJSON()}, () => console.log(location));
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post('/api/teams', this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/teams'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return <TeamForm
      team={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handlePlaceChange={this.handlePlaceChange}
      errors={this.state.errors}
    />;
  }

}

export default TeamsNew;
