import React from 'react'
import { Link } from 'react-router-dom'
// import {ReactComponent as Logo} from '../../Assets/logo.jpg'
import logo from '../../Assets/logo.jpg'
import { connect } from 'react-redux'
import { auth } from '../../Firebase/firebase.utils'
import { createStructuredSelector } from 'reselect'
import {selectCurrentUser} from '../../Redux/User/user.selector'
import { selectHidden} from '../../Redux/Cart/cart.selector'

import './Header.styles.scss'
import CartIcon from '../Cart-icon/Cart-icon.component'
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component'

const Header = ({currentUser , hidden}) => (
  <div className='header'>
      <Link className='logo-container' to='/'> 
        {/* <Logo className='logo' /> */}
        <img src={logo} alt="Logo" className="logo"/>
      </Link>

      <div className='options'>
        <Link className='option' to='/'>
          HOME
        </Link>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/contact'>
          CONTACT
        </Link>

        {
          currentUser ? 
          <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> 
          : <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CartIcon />
      </div>
        {
          hidden ? null :  <CartDropdown />
        }

  </div>

)

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden // currentUser is the one we are passing in the userReducer keme
})

export default connect(mapStateToProps) (Header);