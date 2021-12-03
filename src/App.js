
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch} from 'react-router-dom'
import dashboard from './pages/dashboard';
import projects from './pages/projects';
import tasks from './pages/tasks';
import reports from './pages/reports';
import calendar from './pages/calendar';
import settings from './pages/settings';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <> 
    
    <Router>
    <Navbar/>
    <Switch>
   
      <Route path='/'exact component={dashboard}/>
      <Route path='/projects' component={projects}/>
      <Route path='/tasks' component={tasks}/>
      <Route path='/reports' component={reports}/>
      <Route path='/calendar' component={calendar}/>
      <Route path='/settings' component={settings}/>
      
      
      
      
      
    </Switch>
    </Router>
    </>
  );
}

export default App;
