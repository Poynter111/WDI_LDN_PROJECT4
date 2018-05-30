import React from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
// import Auth from '../../lib/Auth';
// import Map from '../common/Map';


class Gamesindex extends React.Component {
  state = {

  }

  componentDidMount(){
    console.log('We are working');
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
          {team.games.map(game =>
            <div key={game._id}>
              <p>{game.homeTeam}</p>
              <p>{game.awayTeam}</p>
              <p>{game.kickOff}</p>
            </div>
          )}

        </div>

      </div>

    );
  }
}

export default Gamesindex;
