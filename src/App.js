import './App.scss';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Savings from "./pages/savings";
import CompoundInterest from './pages/compoundinterest';
import Budget from './pages/budget';
import RetirementCalculators from './pages/retirement';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            Home
          </Route>

          <Route exact path="/budgetplanner">
            <Budget />
          </Route>

          <Route exact path="/savings-calculator">
            <Savings />
          </Route>

          <Route exact path="/compoundinterest-calculator">
            <CompoundInterest />
          </Route>

          <Route exact path="/retirement-calculators">
            <RetirementCalculators />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
