import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import './loginsignup.css'
const Login = () => {

    

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const {login, error, isLoading} = useLogin()
    const navigate = useNavigate() 

        const handleSubmit = async (e) => {
            
            e.preventDefault()
            //console.log(email, password)
            const success = await login(name, email, password)
            if(success){
                //navigate('/formOne')
                navigate('/dashboard')
            }
        }
        return(
            <>
            
    <div className="login-page">
            <button
            className="back-btn1"
            onClick={() => navigate(-1)}
        >
            ← Back
        </button>
    <div className="login">

        

        <div className="login-badge">
            Administrator Portal
        </div>

        <form onSubmit={handleSubmit}>

            <h1>Welcome Back</h1>

            <p>Log in to manage community events</p>

            <div className="form-group">
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <button
                className="login-button"
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? "Signing In..." : "Log In"}
            </button>

            {error && (
                <div className="error">
                    {error}
                </div>
            )}

        </form>

    </div>

</div>
            
            </>
        )
    
}

export default Login