import logo from './logo.svg';

import './App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home';
import Complaints from './components/Complaints';
import Navbar from './components/Navbar';
import { useState } from 'react';


function App() {

  const [loggedIn , setLoggedIn] = useState(false);

  const clientId = '128980301594-46lusthum3iiu4964jhna9tcbjogibil.apps.googleusercontent.com';

  const onSuccess = (res) => {
    console.log('sucess', res.profileObj);
    setLoggedIn(true);
  }
  const onFailure = (res) => {
    console.log('failure');
  }
  const onLogoutSuccess = () => {
      console.log("logout");
      setLoggedIn(false);
  }
  return (
    <div className="App">
       <Navbar loggedIn={loggedIn}/>
      {loggedIn?
       <Routes>
       <Route path="/" element={<Home />} />
       <Route path="comp" element={<Complaints/>} />
     </Routes>:
      <Routes>
      <Route exact path="/" element={<Home />} />
     
    </Routes>
      }

<GoogleLogin
              clientId={clientId}
              buttonText="Login"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              />



      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onLogoutSuccess}
        >
      </GoogleLogout>
      
     

     
      
       
        

      

    </div>
  );
}

export default App;
