import React from 'react';

import './sign-in.styles.scss'

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }



    }




    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;


        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({ email: '', password: '' })


        } catch (e) {
            console.error(e);
        }

    }


    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });

    }


    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" value={this.state.email} handleChange={this.handleChange} label="email" required></FormInput>

                    <FormInput name="password" type="password" type="password" handleChange={this.handleChange} label="password" value={this.state.password} required></FormInput>

                    <div className='buttons'>
                        <CustomButton type='submit'>Sign in</CustomButton>
                        <CustomButton type='submit' onClick={signInWithGoogle} isGoogleSignIn >Sign in with Google </CustomButton>

                    </div>

                </form>

            </div>

        )
    }

}


export default SignIn;