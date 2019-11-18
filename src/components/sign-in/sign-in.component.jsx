import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
          } catch (error) {
            console.log(error);
          }
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    };

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email'
                        type='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <div className="buttons">
                        <CustomButton type='submit'>
                            SIGN IN
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} type='button' isGoogleSignIn>
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;