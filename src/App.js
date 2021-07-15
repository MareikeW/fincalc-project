import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Savings from "./pages/savings";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            Home
          </Route>

          <Route exact path="/budgetplanner">
            Budgetplanner
          </Route>

          <Route exact path="/savings-calculator">
            <Savings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
