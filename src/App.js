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
import Doctors from './Pages/Doctors/Doctors';

function App() {
  return (
    <div className="App">
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
          <Route path='/packages'>
            <Packages></Packages>
          </Route>
          <Route path='/doctors'>
            <Doctors></Doctors>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>

          </Route>



        </Switch>
        <Footer></Footer>




      </Router>

    </div>
  );
}

export default App;
