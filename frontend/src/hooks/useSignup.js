
import { useState } from "react";

import { useAuthContext } from './useAuthContext'

//signing up inside this hook, and then updating auth context
export const useSignup = () => {
    //added this for deploying to vercel, to get the api url from the environment variable
    //we changing all the fetch requests to use this variable instead of the hardcoded url
    //this is done after deploying the backend to Ren
    //const API_URL = process.env.REACT_APP_API_URL;
    const [error, setError] = useState(null)

    const [isLoading, setIsLoading] = useState(null)
    //this state will be true when starting request

    const { dispatch } =useAuthContext()
    const signup = async (name, email, password) => {
        setIsLoading(true)
        setError(null)

        //const response = await fetch(`${API_URL}/api/user/signup`
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, password})
        })
        const json = await response.json()
        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
            return false
        }
        if(response.ok){
            localStorage.setItem('user', JSON.stringify(json))

            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
            return true
        }
    }
    return {signup, isLoading, error}
}