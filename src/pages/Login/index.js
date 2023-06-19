import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-no-background.png'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import './style.scss';
export default ()=> {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate()

    const account = useSelector((state)=>state.login)

    const dispatch = useDispatch()

    const validate = (e)=>{
        e.preventDefault()
        if(email===account.log && password===account.pass){
            dispatch({type:'SIGN_UP', payload: true})
            navigate('/')
        }
        else alert("Login or password incorrect")
    }

    return (
        <main className='login-page'>
            <section className="login-page-wrapper flex-column">
                <div className="login-page-wrapper__container flex flex-col items-center gap-5 ">
                    <img src={logo}/>
                    <h1 className="title--h6">
                        Login to your account
                    </h1>
                    <p >
                        Do not have one? <Link to="/register">
                            <strong>Create new!</strong>
                        </Link>
                    </p>
                </div>
                <form className="login-page-wrapper__form flex-column">
                    <div>
                        <label>E-mail</label>
                        <input
                            type="text"
                            placeholder="E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        ></input>
                    </div>
                    <button
                        onClick={validate}
                        className="login-page-wrapper__form-button font-button"
                    >
                        Login
                    </button>
                </form>
            </section>
        </main>
    );
}

