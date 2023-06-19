import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import loginImage from '../../assets/images/loginform.jpg'
import {useDispatch, useSelector} from "react-redux";
import './style.scss';

export default ()=> {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatedPassword, setRepeatedPassword] = React.useState('');

    const [registered, setRegistered] = React.useState(false)
    const [account,setAccount] = React.useState({})

    const createAccount =(e)=>{
        e.preventDefault()
        dispatch({type:'CREATE', payload: account})
        setRegistered(true)
        navigate('/login')
    }

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const validation = {
        borderBottomColor: '#AEB7B3FF',
        correct: undefined
    };
    if (password.length > 0 && repeatedPassword.length > 0) {
        if (password === repeatedPassword) {
            validation.borderBottomColor = 'green';
            validation.correct = true;
        } else {
            validation.borderBottomColor = 'red';
            validation.correct = false;
        }
    }

    return (
        <main className='register-page'>
        <section className="register-page-wrapper flex-center-horizontal flex-between">
             <div>
                <h1 className="title--h3">Create account</h1>
                <small className="color-grey">Join our crew!</small>
                <form className="flex-column register-page-wrapper__form">
                    <div>
                        <label>
                            E-mail
                        </label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setAccount({...account, log: e.target.value})
                            }}
                            placeholder="Email"
                        ></input>
                    </div>
                    <div>
                        <label className="mb-2 block text-s font-semibold">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setAccount({...account, pass: e.target.value})
                            }}
                            placeholder="Password"
                            style={validation}
                        ></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            value={repeatedPassword}
                            onChange={(e) => setRepeatedPassword(e.target.value)}
                            placeholder="Repeat password"
                            style={validation}
                        ></input>
                    </div>
                    <button
                        onClick={createAccount}
                        className="register-page-wrapper__form-button font-button"
                    >
                        Register
                    </button>
                    <p>
                        Have already account? <Link to="/login" className="underline text-gray-500">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
            <img
                src={loginImage}
                alt="Happy user"
            />
        </section>
        </main>
    );
}
