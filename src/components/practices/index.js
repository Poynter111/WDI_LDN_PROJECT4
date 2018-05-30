import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';
// import Map from '../common/Map';


class Practicesindex extends React.Component {
  state = {

  }

  componentDidMount(){
    axios.get(`/api/teams/${this.props.match.params.id}`)
      .then(res => this.setState({team: res.data}), () => console.log(this.state.team));
    // .then(res => console.log(res.data));
  }

  render(){
    const { team } = this.state;
    if(!team) return null;
    return(

      <div className="columns">
        <div className="column">
          {team.practices.map(practice =>
            <div key={practice._id}>
              <p>{practice.title}</p>
              <p>{practice.practiceAddress}</p>
              <p>{practice.startTime}</p>
            </div>
          )}

        </div>

      </div>

    );
  }
}

export default Practicesindex;
