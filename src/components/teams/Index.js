import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import _ from 'lodash';
// import SortFilterBar from './SortFilterBar';



class TeamsIndex extends React.Component {
  state = {
    teams: [],
    search: '',
    sort: 'name|asc'
  }

  componentDidMount() {
    axios.get('/api/teams')
      .then(res => this.setState({ teams: res.data }));
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  // sortedFilteredBurgers = () => {
  //   const [field, dir] = this.state.sort.split('|');
  //   const re = new RegExp(this.state.search, 'i');
  //   const filtered = _.filter(this.state.burgers, burger => {
  //     return re.test(burger.name) || re.test(burger.restaurant);
  //   });
  //   return _.orderBy(filtered, field, dir);
  // }

  render() {
    return (
      <div>
        {/* <SortFilterBar
          handleChange={this.handleChange}
          data={this.state}
          showMapView={this.showMapView}
          hideMapView={this.hideMapView}
        /> */}
        <div className="columns is-multiline">
          {this.state.teams.map(team =>
            <div className="column is-one-third-desktop is-half-tablet" key={team._id}>
              <Link to={`/teams/${team._id}`}>
                <div className="card">
                  <div
                    className="card-image"
                    style={{ backgroundImage: `url(${team.logo})` }}
                  ></div>
                  <div className="card-content">
                    <div className="media">
                      <div className="media-content">
                        <p className="title is-4">{team.name}</p>
                        <p className="subtitle is-6">{team.info}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default TeamsIndex;
