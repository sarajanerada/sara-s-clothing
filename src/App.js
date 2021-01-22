import React from 'react'
import { Switch, Route , BrowserRouter , Redirect} from 'react-router-dom'
import './App.css';
import { connect } from 'react-redux'

import {selectCurrentUser} from './Redux/User/user.selector'
import { setCurrentUser } from './Redux/User/user.action';
import {createStructuredSelector} from 'reselect'

import Header from './components/Header/Header.component';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/ShopPage/shopPage.component.jsx'
import SingInAndSignUp from './pages/Sign-in-and-Sign-up/Sign-in-and-Sign-up.component';
import CheckoutPage from './pages/Checkout/Checkout.component';

import { auth , createUserProfile } from './Firebase/firebase.utils'



class App extends React.Component{

  unSubscribeFromAuth = null // if they logged out


  componentDidMount(){

    const {setCurrentUser} = this.props;

   this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

    if(userAuth) {
      const userRef =  await createUserProfile(userAuth);

      

      userRef.onSnapshot(snapShot => {
              setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })

            
      })
    } // Getting The userAuth Data  

    setCurrentUser(userAuth) ; // will check the status of a user if they are Logged in or Logged out
   ;
    

    }) 
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SingInAndSignUp/>)}/>
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
      </BrowserRouter>
      </div>
    );  
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
