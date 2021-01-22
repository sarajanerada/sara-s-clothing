import React from 'react'
import { SignInWithGoogle , auth} from '../../Firebase/firebase.utils';
import CustomButton from '../Custom-button/Custom-button.component';
import FormInput from '../Form-input/Form-Input.component'


import './Sign-in.styles.scss'



class SignIn extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

  }

  handleSubmit = async (e) => {
    e.preventDefault();

    const { email , password } = this.state;

    try {

      await auth.signInWithEmailAndPassword(email , password);
      this.setState({email: '' , password: ''})
    } catch (error) {
      console.error(error)
    }

 
  }

  handleChange = (e) => {

    const {name , value } = e.target;
    this.setState({[name] : value});
  }

  render(){
    return(
      <div className='sign-in'>
        <h2 className='title'> I already have an account</h2>
        <span >Sign in using email and password</span>

        <form onSubmit={this.handleSubmit}>

        <FormInput
            type="email" 
            name="email" 
            value={this.state.email} 
            label="Email"
            handleChange={this.handleChange} 
            required />
          <FormInput
            type="password" 
            name="password" 
            value={this.state.password} 
            label='Password'
            handleChange={this.handleChange} 
            required/>
            <div className="buttons">
            <CustomButton type='submit'>Sign in</CustomButton> 
            <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>{ ' ' }Sign in with Google { ' ' }</CustomButton> 
            </div>
         
        </form>
      </div>
    )
  } 
}

export default SignIn;