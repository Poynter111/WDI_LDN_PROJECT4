import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Auth from '../../lib/Auth';
import Map from '../common/Map';


class PracticeShow extends React.Component {
  state = {

  }

  componentDidMount(){
    const { id, practiceId } = this.props.match.params;
    axios.get(`/api/teams/${id}/practices/${practiceId}`)
      .then(res => this.setState({practice: res.data}));
  }

  handleDelete = () => {
    const { id, practiceId } = this.props.match.params;
    axios.delete(`/api/teams/${id}/practices/${practiceId}`, {
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
    const { practice } = this.state;
    if(!practice) return null;
    return(

      <div className="columns">
        <div className="column">
          <h1>GAME SHOW Page</h1>
        </div>
        <div className="column">
          <div className="title">{practice.title}</div>
          <div className="title">{practice.practiceAddress}</div>
          <p>{practice.startTime}</p>
          <p>{practice.playerArrival}</p>
          <p>{practice.info}</p>
          <Map center={practice.location} />
          <hr />
          <div className="columns">
            <div className="column">

              <Link
                to={`/teams/${this.props.match.params.id}/practices/${practice._id}/edit`}
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

export default PracticeShow;
