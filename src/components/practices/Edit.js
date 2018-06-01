import React from 'react';
import PracticeForm from './Form';
import axios from 'axios';
import Auth from '../../lib/Auth';

class PracticeEdit extends React.Component {

  state = {
    practice: {},
    errors: {}
  };

  componentDidMount(){
    const { id, practiceId } = this.props.match.params;
    axios.get(`/api/teams/${id}/practices/${practiceId}`)
      .then(res => this.setState({practice: res.data}));
  }


  handleChange = ({target: { name, value} }) => {
    const errors = { ...this.state.errors, [name]: ''};
    this.setState({ practice: { errors, ...this.state.practice, [name]: value }});
  }

  handlePlaceChange = ({ formatted_address, geometry: { location }}) => {
    this.setState({ address: formatted_address, location: location.toJSON()});
  }

  handleSubmit = e => {
    e.preventDefault();
    const { id, practiceId } = this.props.match.params;
    axios.put(`/api/teams/${id}/practices/${practiceId}`, this.state.practice, {
      headers: { Authorization: `Bearer ${Auth.getToken()}`}
    })
      .then(() => this.props.history.push(`/teams/${id}`))
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }

  render(){
    return <PracticeForm
      practice={this.state.practice}
      handleChange={this.handleChange}
      handleSubmit={this.handleSubmit}
      handlePlaceChange={this.handlePlaceChange}
      errors={this.state.errors}
    />;
  }

}

export default PracticeEdit;
