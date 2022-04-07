import './App.css';
import { Homework } from './pages';
import Login from './pages/login';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const token = useSelector((state) => state.token.value);


  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            {!token ? <Login /> : <Redirect to="/create-playlist" />}
          </Route>

          <Route path="/create-playlist">
            <Homework />
          </Route>

          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </Router>
      {/* <Homework /> */}
    </div>
  );
}

export default App;
