import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Savings from "./pages/savings";
import RetirementCalculators from './pages/retirement';
import Home from './pages/home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/budgetplanner">
            <Budget />
          </Route>

          <Route exact path="/savings-calculator">
            <Savings />
          </Route>

          <Route exact path="/onetime-investment">
            <OneTimeInvChart />
          </Route>

          <Route exact path="/retirement-savings">
            <RetirementSavings />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
