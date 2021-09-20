import { useMutation } from '@apollo/client';
import React, { useEffect, useReducer } from 'react'
import { LOGIN_API } from '../constants/API_Endpoints';
import {LoginReducerHook} from '../Hooks/LoginReducerHook'
import HolidayLists from './HolidayLists';

const initialState = {
    email: '',
    password: '',
    isLoading: false,
    errorReturned: '',
    isLoggedIn: false
}


function Login() {
    const [state, dispatch] = useReducer(LoginReducerHook, initialState)
    const [loginFunction, { data, error }] = useMutation(LOGIN_API);

    useEffect(() => {
        if(data){
            dispatch({type: 'success'})
            localStorage.setItem('token', data.loginClient.result.token)
        }
        if(error){
            dispatch({type: 'error', payload: error})
        }
    }, [data, error])


    const submit = async (e: any) => {
        e.preventDefault()
        dispatch({type: 'login'})
        try {
            await loginFunction({
                variables:{
                    auth: {
                        email:state.email, 
                        deviceUuid: "7026a238-d078-48b5-862b-c3c7d21d8712"
                    }, 
                    password: state.password
                } 
            })
        } catch (error) {
            dispatch({type: 'error', payload: error})
        }
    }

    return (
        (!state.isLoggedIn)? 
        <div className="card">
            <header className="card-header level">
                <h2 className="card-header-title title is-4 level-item">
                Login
                </h2>
            </header>
            <div className="card-content">
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                        <input className="input" type="email" placeholder="devteam@saimonglobal.com"
                        onChange={(e: any) => dispatch({type: 'setEmail', payload: e.currentTarget.value})} />
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                        <input className="input" type="password" placeholder="12345678"
                        onChange={(e: any) => dispatch({type: 'setPassword', payload: e.currentTarget.value})} />
                    </div>
                </div>
            </div>
            <div className="buttons level">
                <button className="button is-primary level-item" onClick={submit}>Log In</button>
            </div>
        </div>:
        <HolidayLists />
    )
}

export default Login
