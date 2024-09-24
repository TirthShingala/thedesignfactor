import { Divider } from "@mui/material";
import GoogleImg from "../../assets/google.png";
import FacebookImg from "../../assets/facebook.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from "../../assets/logo.webp";
import { useState } from "react";
import { API_URL } from "../../config";
import axios from "axios";
import { googleProvider, signInWithGooglePopup } from "../../utils/firebase";

const Login = () => {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const loginFormData = {
            ...loginData,
            [e.target.name]: e.target.value,
        };
        setLoginData(loginFormData);
    }
    const handleLogin = () => {
        const url = `${API_URL}/admin/login`;

        const data = new URLSearchParams();
        data.append('email', loginData.email);
        data.append('password', loginData.password);

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        axios.post(url, data, config)
            .then(response => {
                console.log('Login successful!');
                localStorage.setItem("UserData", JSON.stringify(response?.data))
                localStorage.setItem("JWT_Token", response?.data?.record);
                toast.success("Successfully Login!!!");
                localStorage.setItem("isLogin", true);
                setTimeout(() => {
                    navigate("/")
                }, 3000)
            })
            .catch(error => {
                console.error('Login failed:', error.response.data);
            });
    }



    const logGoogleUser = async () => {
        try {
            await signInWithGooglePopup(googleProvider);
            navigate('/'); // Redirect to main screen after successful login
        } catch (error) {
            console.error('Login failed:', error);
        }
    };
    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                    <img src={Logo} className="m-auto mb-10" alt="logo" />
                    <h2 className="text-3xl mb-4 text-center font-semibold text-gray-800">Log In</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">Email</label>
                            <input type="text" id="email" name="email" value={loginData.email} onChange={(e) => handleChange(e)} className="form-input mt-1 block border-b-4 border-[#A35733] w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 ring-[#A35733] focus:ring-[#A35733] focus:border-transparent" placeholder="Enter your email" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" id="password" name="password" value={loginData.password} onChange={(e) => handleChange(e)} className="form-input mt-1 border-b-4 border-[#A35733] block w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35733] focus:border-transparent" placeholder="Enter your password" />
                        </div>
                        <div className="bg-[#A35733] p-3 rounded-lg" onClick={() => handleLogin()}>
                            <p className="text-white text-center cursor-pointer">Login</p>
                        </div>
                    </form>
                    <div className="text-center my-8">
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                    </div>
                    <Divider>or log in with</Divider>
                    <div className="flex justify-center space-x-5 my-10">
                        <img src={GoogleImg} alt="google" onClick={logGoogleUser} className="h-8 cursor-pointer" />
                        <img src={FacebookImg} alt="facebook" className="h-8 cursor-pointer" />
                    </div>
                    <div className="text-center mt-4">
                        <span className="text-sm text-gray-600">Don't have an account?</span> <a href="/signup" className="text-sm text-blue-600 hover:underline">Sign Up</a>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}
export default Login;