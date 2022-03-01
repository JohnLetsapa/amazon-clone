import React, {useEffect} from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login'
import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
import { auth } from './components/Firebase'
import { useStateValue } from './components/StateContext' 


function App() {
  const [{user}, dispatch] = useStateValue()
  
  useEffect(() => { 

    firebase.auth().onAuthStateChanged((authUser) => {
      console.log('The user email is : ', authUser.email)
      if (user) {
        // https://firebase.google.com/docs/reference/js/firebase.User
        dispatch({
            type: 'SET_USER',
            user: authUser    // Updates universal state i.e. with the logged-in user's name
        })
        
      } else {
        
        dispatch({
            type: 'RESET_USER',
            user: null
        })
      }
    });
    // auth.onAuthStateChange(authUser => console.log(authUser)) 
  },[])

  const home = <div><Header/><Home/></div>
  const checkout = <div><Header/><Checkout/></div>

  return (

      <div className="app">
        <Routes>
            <Route path='login' element={<Login />} />
            <Route path='/' element={home}  />
            <Route path='checkout' element={checkout} />
        </Routes>
      </div>
  
  );
}

export default App;
