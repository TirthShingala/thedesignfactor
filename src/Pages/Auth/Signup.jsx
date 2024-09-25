import { Divider } from "@mui/material";
import GoogleImg from "../../assets/google.png";
import FacebookImg from "../../assets/facebook.png";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { API_URL } from "../../config";



const Signup = () => {
    const navigate = useNavigate();
    const [signupData, setSignUpData] = useState({
        username: "",
        email: "",
        password: "",
        confirm_password: ""
    });


    const handleChange = (e) => {
        const signFormData = {
            ...signupData,
            [e.target.name]: e.target.value,
        };
        setSignUpData(signFormData);
    }

    const handleSignup = () => {
        const url = `${API_URL}/admin/register`;

        const data = new URLSearchParams();
        data.append('username', signupData.username);
        data.append('email', signupData.email);
        data.append('password', signupData.password);
        data.append('confirm_password', signupData.confirm_password);

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };
        axios.post(url, data, config)
            .then(response => {
                console.log('Registration successful!');
                localStorage.setItem("UserData", JSON.stringify(response?.data?.record))
                localStorage.setItem("JWT_Token", response.data.token);
                localStorage.setItem("isLogin", true);
                toast.success("Registration Sucessfully!!!");
                setTimeout(() => {
                    navigate("/")
                }, 3000)
            })
            .catch(error => {
                console.error('Login failed:', error.response.data);
            });
    }
    return (
        <>
            <div className="flex justify-center items-center h-screen ">
                <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
                    <img src={Logo} className="m-auto mb-10" alt="logo" />

                    <h2 className="text-3xl mb-4 text-center font-semibold text-gray-800">Sign Up</h2>
                    <form onSubmit={handleSignup}>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">Username</label>
                            <input type="text" id="username" name="username" value={signupData.username} onChange={(e) => handleChange(e)} className="form-input mt-1 block border-b-4 border-[#A35733] w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 ring-[#A35733] focus:ring-[#A35733] focus:border-transparent" placeholder="Enter your email" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700">Email</label>
                            <input type="text" id="email" name="email" value={signupData.email} onChange={(e) => handleChange(e)} className="form-input mt-1 block border-b-4 border-[#A35733] w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 ring-[#A35733] focus:ring-[#A35733] focus:border-transparent" placeholder="Enter your email" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input type="password" id="password" name="password" value={signupData.password} onChange={(e) => handleChange(e)} className="form-input mt-1 border-b-4 border-[#A35733] block w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35733] focus:border-transparent" placeholder="Enter your password" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700">Confirm Password</label>
                            <input type="password" id="confirm_password" name="confirm_password" value={signupData.confirm_password} onChange={(e) => handleChange(e)} className="form-input mt-1 border-b-4 border-[#A35733] block w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#A35733] focus:border-transparent" placeholder="Enter your password" />
                        </div>
                        <div className="bg-[#A35733] p-3 rounded-lg" onClick={() => handleSignup()}>
                            <p className="text-white text-center cursor-pointer">SignUp</p>
                        </div>
                    </form>

                    <Divider className="pt-10">or Sign up with</Divider>
                    <div className="flex justify-center space-x-5 my-10">
                        <img src={GoogleImg} alt="google" className="h-8 cursor-pointer" />
                        <img src={FacebookImg} alt="facebook" className="h-8 cursor-pointer" />
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
export default Signup;