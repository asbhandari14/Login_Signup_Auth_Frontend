import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import LoginValidation from '../Components/LoginValidation';
import axios from "axios"
// import { LuLoaderCircle } from "react-icons/lu";



const Login = ({url}) => {
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    }

    const handleFormSubmit =async(e) => {
        e.preventDefault(); 
        let err = LoginValidation(loginInfo)
        setError({...err});

        try {
            if(error?.email == "" && error?.password == ""){
                console.log(loginInfo);
                setLoading(true);
                const response = await axios.post(`${url}/auth/login`, loginInfo, {withCredentials: true, headers: {"Content-Type" : "application/json"}})

                if(response.data.success){
                    window.localStorage.setItem("token", response.data.token)
                    navigate("/home");
                    setLoading(false);
                }

            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        } finally{
            setLoading(false);
        }

    }

    return (
        <>
            <div className="login_page_container w-100 min-vh-100 d-flex justify-content-center align-items-center border-3 border-danger">
                <div className="loginBox bg-gradient py-5 px-4 border-1 border-primary bg-body-secondary rounded-3">
                    <h1 className='fs-3 fw-bold text-center'>Login Page</h1>
                    <form onSubmit={handleFormSubmit} className='d-flex flex-column justify-content-start align-items-center gap-3 mt-5'>

                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="userEmail" className='fw-semibold'>Email</label>
                            <input type="email" name='email' value={loginInfo.email} onChange={handleInputChange} placeholder='Enter your email address' id='userEmail' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.email) ? error.email : ""}</span>
                        </div>

                        <div className='w-100'>
                            <label htmlFor="userPassword" className='fw-semibold'>Password</label>
                            <input type="password" name='password' value={loginInfo.password} onChange={handleInputChange} placeholder='Enter your password' autoComplete='off' id='userPassword' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.password) ? error.password : ""}</span>
                        </div>


                        <button type='submit' style={{ cursor: 'pointer' }} className='w-100 py-2 bg-success fw-semibold border-0 text-white rounded-3 mt-4 d-flex justify-content-center align-items-center gap-3'>
                            Login
                            {(loading) ? <div class="spinner-border spinner-border-sm" role="status">
                                            <span class="visually-hidden">Loading...</span>
                            </div> :
                             ""} 
                             </button>
                        <p className='w-100 small_para_size px-2 text-start'>Don't have an account ? <NavLink to="/signup"><span style={{ cursor: 'pointer' }} className='text-decoration-underline text-danger text-start '> SignIn here </span></NavLink> </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
