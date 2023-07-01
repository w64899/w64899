import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import loginImage from '../../assets/images/loginform.jpg'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {auth, db} from '../../db/firebase';
import {nanoid} from "nanoid";
import { doc, setDoc } from 'firebase/firestore'
import './style.scss';

export default ()=> {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatedPassword, setRepeatedPassword] = React.useState('');
    const register = async (e) => {
        e.preventDefault();

        await setDoc(doc(db, "users", nanoid()), {
            email: email,
            password: password
        })

        try {
            if (validation.correct && email.includes('@')) {
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                navigate('/');
            }
        } catch (err) {
            console.log(err.message);
        }
    };

    const navigate = useNavigate()

    const validation = {
        borderBottomColor: '#AEB7B3FF',
        correct: undefined
    };
    if (password.length > 5 && repeatedPassword.length > 5) {
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
                        onClick={register}
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
