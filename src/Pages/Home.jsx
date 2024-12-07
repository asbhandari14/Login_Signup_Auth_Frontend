import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = ({url}) => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});

    const getUserData = async () => {

        try {
            const token = localStorage.getItem('token')
            const response = await axios.get(`${url}/auth/home`, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            });

            if(response.data.success){
                setUserData({...response.data.user})
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getUserData();
    }, []);
    return (
        <>
            <div className="home_page_container min-vh-100 d-flex justify-content-center align-items-center">
                <h1>Welcome back {userData?.first_name} {userData?.last_name}</h1>
            </div>
        </>
    )
}

export default Home
