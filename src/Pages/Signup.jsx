import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Signup_Validation from '../Components/SignupValidation';
import axios from 'axios';

const Signup = ({url}) => {
    const [signupInfo, setSignupInfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
        countryCode: "+91",
        phone: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: ""
    })
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const countryCodes_array = [
        { code: '+1', country: 'USA' },
        { code: '+44', country: 'UK' },
        { code: '+91', country: 'India' },
        { code: '+61', country: 'Australia' },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    }

    const handleFormSubmit =async(e) => {
        e.preventDefault();
        let err = Signup_Validation(signupInfo);
        setError(err);

        try {
            if(error?.firstname == "" && error?.lastname == "" && error?.email == "" && error?.countryCode == "" && error?.phone == "" && error?.password == "" && error?.confirmPassword == "" && error?.dob == "" && error?.gender == ""){
                setLoading(true);
                const response = await axios.post(`${url}/auth/register`, signupInfo, {withCredentials: true, headers: {"Content-Type" : "application/json"}});
                
                if(response.data.success){
                    setLoading(false);
                    navigate("/");
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
            <div className="signup_page_container w-100 min-vh-100 d-flex justify-content-center align-items-center border-3 border-danger py-5">
                <div className="signupBox bg-gradient py-3 px-4 border-1 border-primary bg-body-secondary rounded-3">
                    <h1 className='fs-3 fw-bold d-flex flex-column justify-content-start align-items-center mt-3'>Signup Page</h1>
                    <form onSubmit={handleFormSubmit} className='d-flex flex-column justify-content-start align-items-center gap-3 mt-5'>

                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="userFirstName" className='fw-semibold'>First Name</label>
                            <input type="text" name='firstname' value={signupInfo.firstname} onChange={handleInputChange} placeholder='Enter your First Name' id='userFirstName' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.firstname) ? error.firstname : ""}</span>
                        </div>
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="lastName" className='fw-semibold'>Last Name</label>
                            <input type="text" name='lastname' value={signupInfo.lastname} onChange={handleInputChange} placeholder='Enter your Last Name' id='lastName' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.lastname) ? error.lastname : ""}</span>
                        </div>
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="userEmail" className='fw-semibold'>Email</label>
                            <input type="email" name='email' value={signupInfo.email} onChange={handleInputChange} placeholder='Enter your email address' id='userEmail' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.email) ? error.email : ""}</span>
                        </div>

                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="userPhone" className='fw-semibold'>Phone Number</label>
                            <div className='w-100 flex justify-content-start align-items-start gap-2'>
                                <select id="countryCode" name='countryCode' value={signupInfo.countryCode} onChange={handleInputChange} className='py-2 w-25'>
                                    {countryCodes_array?.map((item) => (
                                        <option key={item.code} value={item.code}>
                                            {item.country} ({item.code})
                                        </option>
                                    ))}
                                </select>
                                <input type="number" name='phone' value={signupInfo.phone} onChange={handleInputChange} placeholder='Enter your Phone number' id='userPhone' className='w-75 px-4 py-2 rounded-2 outline-0 border-1 border-secondary' />
                            </div>
                            {(error.countryCode) ? <span className='text-danger'>{error.countryCode}</span> : (error.phone) ? <span className='text-danger'>{error.phone}</span> : ""}
                        </div>

                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="userPassword" className='fw-semibold'>Password</label>
                            <input autoComplete='off' type="password" name='password' value={signupInfo.password} onChange={handleInputChange} placeholder='Enter your password' id='userPassword' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.password) ? error.password : ""}</span>
                        </div>
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="userConfirmPassword" className='fw-semibold'>Confirm Password</label>
                            <input autoComplete='off' type="password" name='confirmPassword' value={signupInfo.confirmPassword} onChange={handleInputChange} placeholder='Confirm your Password here' id='userConfirmPassword' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.confirmPassword) ? error.confirmPassword : ""}</span>
                        </div>
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="userPhone" className='fw-semibold'>Date</label>
                            <input type="date" name='dob' value={signupInfo.dob} onChange={handleInputChange} placeholder='Enter your current date address' className='w-100 p-2 rounded-2 outline-0 border-1 border-secondary' />
                            <span className='text-danger'>{(error.dob) ? error.dob : ""}</span>
                        </div>
                        <div className='w-100 d-flex flex-column justify-content-start align-items-start'>
                            <label htmlFor="Gender" className='fw-semibold'>Gender</label>
                            <div className='d-flex justify-content-start align-items-center gap-3'>
                                <div><input type="radio" name="gender" value="male" onChange={handleInputChange} id="male" /> <label htmlFor="male">Male</label></div>
                                <div><input type="radio" name="gender" value="female" onChange={handleInputChange} id="female" /> <label htmlFor="female">Female</label></div>
                                <div><input type="radio" name="gender" value="other" onChange={handleInputChange} id="other" /> <label htmlFor="other">Other</label></div>
                            </div>
                            <span className='text-danger'>{(error.gender) ? error.gender : ""}</span>
                        </div>

                        <button type='submit' className='w-100 py-2 bg-danger border-0 text-white rounded-3 mt-3 d-flex justify-content-center align-items-center gap-3 fw-semibold'>Signup
                            {(loading) ? <div style={{display: (loading)?"":"none"}} class="spinner-border spinner-border-sm" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div> :
                                ""}
                        </button>
                        <span className='small_para_size px-2 text-center'>Already have an account ? <NavLink to="/"><span style={{ cursor: 'pointer' }} className='text-decoration-underline text-danger '> Login here </span></NavLink> </span>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
