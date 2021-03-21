import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import MyRecords from './components/MyRecords';
import OnBoarding from './components/OnBoarding';
import GetCare1 from './components/GetCare1';
import GetCare2 from './components/GetCare2';
import GetCare3 from './components/GetCare3';
import GetCare4 from './components/GetCare4';
import GetCare5 from './components/GetCare5';
import GetCare6 from './components/GetCare6';
import GetCare7 from './components/GetCare7';
import MyProfile from './components/MyProfile';
import AddRecord from './components/AddRecord';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";



function App() {
  return (
    <div className="App">
    <Router>
    <AuthProvider>
    <Switch>
      
      <Route exact path='/' component={OnBoarding}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/slide1' component={Slide1}/>
      <Route exact path='/slide2' component={Slide2}/>
      <Route exact path='/slide3' component={Slide3}/>
      <Route exact path='/my-records' component={MyRecords}/>
      <Route exact path='/add-record' component={AddRecord}/>
      <Route exact path='/my-profile' component={MyProfile}/>
      <Route exact path='/get-care1' component={GetCare1}/>
      <Route exact path='/get-care2' component={GetCare2}/>
      <Route exact path='/get-care3' component={GetCare3}/>
      <Route exact path='/get-care4' component={GetCare4}/>
      <Route exact path='/get-care5' component={GetCare5}/>
      <Route exact path='/get-care6' component={GetCare6}/>
      <Route exact path='/get-care7' component={GetCare7}/>




    </Switch>
    </AuthProvider>
  </Router>

    </div>
  );
}

export default App;
 