import React from 'react';
import PracticeForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';


class PracticeNew extends React.Component {

  state = {
    errors: {}
  };

  handleChange = ({target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({errors, [name]: value });
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ practiceAddress: formatted_address, location: location.toJSON()}, () => console.log(location));
  }

  handleSubmit = e => {
    e.preventDefault();
    axios.post(`/api/teams/${this.props.match.params.id}/practices`, this.state, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push('/teams'))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return <PracticeForm
      practice={this.state}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handlePlaceChange={this.handlePlaceChange}
      errors={this.state.errors}
    />;
  }

}

export default PracticeNew;
