import logo from './logo.svg';
import './App.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Notfound from './Pages/Notfound/Notfound';
import Footer from './Pages/Shared/Footer/Footer';
import ContactUs from './Pages/Contact Us/ContactUs';
import Aboutus from './Pages/About us/Aboutus';
import Packages from './Pages/Packages/Packages';

import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
import Doctors from './Pages/Doctors/Doctors';
import AuthProvider from './Pages/Context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>

            </Route>
            <Route path='/home'>
              <Home></Home>

            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <Signup></Signup>

            </Route>
            <Route path='/contactus'>
              <ContactUs></ContactUs>
            </Route>
            <Route path='/aboutus'>
              <Aboutus></Aboutus>
            </Route>
            <PrivateRoute path='/packages'>
              <Packages></Packages>
            </PrivateRoute>

            <PrivateRoute path='/services/:serviceId'>
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path='*'>
              <Notfound></Notfound>

            </Route>



          </Switch>
          <Footer></Footer>




        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
