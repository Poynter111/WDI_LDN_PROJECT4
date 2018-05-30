import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/NavBar';
import AuthLogin from './components/auth/Login';
import AuthRegister from './components/auth/Register';
import FlashMessage from './components/common/FlashMessages';
import TeamsIndex from './components/teams/Index';
import TeamsShow from './components/teams/Show';
import TeamsNew from './components/teams/New';
import TeamsEdit from './components/teams/Edit';
import GamesIndex from './components/games/Index';
import GamesShow from './components/games/Show';
import GamesNew from './components/games/New';
import GamesEdit from './components/games/Edit';
import PracticeIndex from './components/practices/Index';
import PracticeShow from './components/practices/Show';

import 'bulma';
import './assets/scss/style.scss';

class App extends React.Component {
  render(){
    return (
      <Router>
        <main>
          <NavBar />
          <FlashMessage />
          <section className="section">
            <div className="container">
              <Switch>
                <Route path="/teams/:id/games/new" component={GamesNew} />
                <Route path="/teams/:id/edit" component={TeamsEdit} />
                <Route path="/teams/:id/games/:gameId/edit" component={GamesEdit} />
                <Route path="/teams/:id/games/:gameId" component={GamesShow} />
                <Route path="/teams/:id/games" component={GamesIndex} />
                <Route path="/teams/:id/practices/:practiceId" component={PracticeShow} />
                <Route path="/teams/:id/practices" component={PracticeIndex} />
                <Route path="/teams/new" component={TeamsNew} />
                <Route path="/teams/:id" component={TeamsShow} />
                <Route path="/teams" component={TeamsIndex} />
                <Route path="/login" component={AuthLogin} />
                <Route path="/register" component={AuthRegister} />
              </Switch>
            </div>
          </section>
        </main>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
