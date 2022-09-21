import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {

    const [form, setForm] = useState({
        username: '',
        password: ''
    });

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleLoginSubmit = async () => {
        try {

        } catch (err) {
            if (err) throw err;
        }
    };

    //? emailer mailchimp/emailjs/other for contact support
    return (
        <section className='login-container'>
            <h2>Login</h2>
            <form className='login-form' >
                <input
                    onChange={handleFormChange}
                    className='username'
                    type='text'
                    name='username'
                    placeholder='Username'
                    required
                />
                <input
                    onChange={handleFormChange}
                    className='password'
                    type='password'
                    name='password'
                    placeholder='Password'
                    required
                />
                <button className='login-btn'>Login</button>
            </form>
            <p>Contact support <a href='#'>here</a></p>
        </section>
    );
}

export default Login;