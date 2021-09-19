import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import { LOGIN_API } from '../constants/API_Endpoints';


function Login() {
    const [mutateFunction, { data, loading, error }] = useMutation(LOGIN_API);
    useEffect(() => {
        console.log("Data: ", data);
        console.log("Loading: ", loading);
        console.log("Error: ", error);
        // console.log(mutateFunction());
        
    }, [data])
    return (
        <div>
            
        </div>
    )
}

export default Login
