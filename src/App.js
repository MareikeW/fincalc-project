import './App.scss';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Savings from "./pages/savings";
import OneTimeInvChart from './components/charts/OneTimeInvChart';
import RetirementSavings from './components/forms/Retirement-savings-form';
import Budget from './pages/budget';
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
