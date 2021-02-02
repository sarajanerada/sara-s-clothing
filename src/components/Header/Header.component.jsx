import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import logo from '../../Assets/logo.jpg'

import { auth } from '../../Firebase/firebase.utils'
import {selectCurrentUser} from '../../Redux/User/user.selector'
import { selectHidden} from '../../Redux/Cart/cart.selector'

import CartIcon from '../Cart-icon/Cart-icon.component'
import CartDropdown from '../Cart-dropdown/Cart-dropdown.component'

import {HeaderContainer , LogoContainer , OptionsContainer , OptionLink } from './Header.styles'

const Header = ({currentUser , hidden}) => (
  <HeaderContainer>
      <LogoContainer to='/'> 
        {/* <Logo className='logo' /> */}
        <img src={logo} alt="Logo" className="logo"/>
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/'>
          HOME
        </OptionLink>
        <OptionLink to='/shop'>
          SHOP
        </OptionLink>
        <OptionLink to='/contact'>
          CONTACT
        </OptionLink>

        {
          currentUser ? 
          <OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT </OptionLink> 
          : <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
        {
          hidden ? null :  <CartDropdown />
        }

  </HeaderContainer>

)

const mapStateToProps =createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden // currentUser is the one we are passing in the userReducer keme
})

export default connect(mapStateToProps) (Header);