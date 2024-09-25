import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/transparent-logo.png";
import Avatar from 'react-avatar';
import userIcon from "../../assets/usericon.png";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";

// import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

const Header = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [open, setOpen] = useState(false);
    console.log("user", user)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const confirLogout = () => {
        setOpen(false);
        localStorage.setItem("isLogin", false);
        setIsLogin(false)
    }
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    useEffect(() => {
        const userData = localStorage.getItem("UserData");
        setUser(JSON.parse(userData));
        const LoginMethod = localStorage.getItem("isLogin");
        setIsLogin(JSON.parse(LoginMethod));
    }, []);

    return (
        <>
            <div className="md:mx-auto px-5 w-full bg-[#fff] shadow-lg">
                <header className="py-3">
                    <nav className=" container md:mx-auto flex justify-between">
                        <div>
                            <img src={Logo} alt="" className="h-20 cursor-pointer" onClick={() => navigate("/")} />
                        </div>
                        <div className="lg:hidden">
                            <button onClick={toggleMenu} className="navbar-burger flex items-center text-blue-600 p-3">
                                <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                        <ul className={`hidden lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}>
                            <li><a className="text-[18px] text-gray-900 hover:text-gray-500 font-normal" href="/">Home</a></li>

                            <li><a className="text-[18px] text-gray-900 hover:text-gray-500 font-normal" href="/about-us">About Us</a></li>

                            {/* <li><a className="text-[16px] text-gray-900 hover:text-gray-500" href="/projects">Projects</a></li> */}

                            <li><a className="text-[18px] text-gray-900 hover:text-gray-500 font-normal" href="/contact">Contact</a></li>

                            <li><a className="text-[18px] text-gray-900 hover:text-gray-500 font-normal" href="/faq">FAQ</a></li>
                        </ul>
                        <div className={`hidden lg:flex flex-col lg:flex lg:items-center lg:w-auto lg:space-x-6 cursor-pointer`}>
                            {isLogin ?
                                <Avatar src={userIcon} size="40" round={true} onClick={handleClickOpen} color="#A35733" className="mt-1" /> :
                                <button className="rounded-full inline-flex items-center bg-[#915213] hover:bg-[#b68b60] border-0 py-2 mt-1.5 px-6 text-white" onClick={() => navigate("/login")}>
                                    Log In
                                </button>
                            }
                        </div>
                    </nav>
                    {isMenuOpen && (
                        <div className="md:hidden mt-5 transition duration-300 ease-in-out translate-x-0">
                            <ul className="flex flex-col space-y-3">
                                <li>
                                    <a className="cursor-pointer" href="/">Home</a>
                                </li>
                                <li>
                                    <a className="cursor-pointer" href="about-us">About Us</a>
                                </li>
                                <li>
                                    <a className="cursor-pointer" href="/projects">Projects</a>
                                </li>
                                <li>
                                    <a className="cursor-pointer" href="/contact">Contact</a>
                                </li>
                                <li>
                                    <a className="cursor-pointer" href="/faq">FAQ</a>
                                </li>
                            </ul>
                            <button className="rounded-full inline-flex items-center mt-5 bg-[#915213] hover:bg-[#b68b60] border-0 py-2  px-6 text-white" onClick={() => navigate("/login")}>
                                Log In
                            </button>
                        </div>
                    )}
                </header>
                {/* <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        {"Use Google's location service?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Let Google help apps determine location. This means sending anonymous
                            location data to Google, even when no apps are running.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Disagree</Button>
                        <Button onClick={handleClose} autoFocus>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog> */}

                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"

                >
                    <DialogTitle id="alert-dialog-title">
                        {"Confirm Logout"}
                    </DialogTitle>
                    <DialogContent id="alert-dialog-description">
                        Are You Sure You Want to Logout ?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={confirLogout}>Yes</Button>
                        <Button onClick={handleClose} >
                            No
                        </Button>
                    </DialogActions>

                </Dialog>


            </div>
        </>
    )

}
export default Header;

