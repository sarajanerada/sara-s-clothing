import React from 'react'
import SingIn from '../../components/Sign-in/Sign-in.component'
import SignUp from '../../components/Sign-up/Sign-up.component'
 

import './Sign-in-and-Sign-up.styles.scss'

const SingInAndSignUp = () => (
  <div className='sign-in-and-sign-up'>
      <SingIn />
      <SignUp />
  </div>

)

export default SingInAndSignUp;