import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import './mysass.scss'

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

        </Switch>

        </Router>
     
      
    </div>
  );
}

export default App;
