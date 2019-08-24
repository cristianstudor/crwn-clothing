import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss';

class SignUp extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password:'',
      confirmPassword:''
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    
    if( password !== confirmPassword ) {
      alert("password don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      await createUserProfileDocument(user, {displayName});

      this.setState({
        displayName: '',
        email: '',
        password:'',
        confirmPassword:''
      });
    } catch(err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]:value })
  }

  render() {
    return (
      <div className='sign-up'>
        <h2 className='title'>I don't have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
            <FormInput 
              name='displayName' 
              type='text' 
              value={this.state.displayName} 
              handleChange={this.handleChange}
              label='display name'
              required
            />
            <FormInput 
              name='email' 
              type='email' 
              value={this.state.email} 
              handleChange={this.handleChange}
              label='email'
              required
            />
            <FormInput
              name='password'
              type='password'
              value={this.state.password} 
              handleChange={this.handleChange}
              label='password'
              required
            />
            <FormInput
              name='confirmPassword'
              type='password'
              value={this.state.confirmPassword} 
              handleChange={this.handleChange}
              label='confirm password'
              required
            />
            <CustomButton type="submit">Sign up</CustomButton>
          </form>
      </div>
    )
  }
}

export default SignUp;