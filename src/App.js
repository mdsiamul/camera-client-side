import logo from './logo.svg';
import './App.css';
import Services from './components/Home/Services/Services';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './components/Notfound/Notfound';
import Anrolled from './components/Anrolled/Anrolled/Anrolled';
import Login from './components/Login/Login/Login';
import Header from './components/Shared/Header/Header';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './components/Login/Login/privetRoute/PrivetRoute';
import Footer from './components/Shared/Footer/Footer';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import Dashboard from './components/Dashboard/Dashboard';
import Myorder from './components/Dashboard/Myorder/Myorder';
import Pay from './components/Dashboard/Pay/Pay';
import Products from './components/Home/Products/Products';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/reviews">
              <Reviews></Reviews>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/Myorder">
              <Myorder></Myorder>
            </Route>
            <Route path="/Pay">
              <Pay></Pay>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/anrolled/:enrolId">
              <Anrolled></Anrolled>
            </PrivetRoute>
            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
