import Logo from "../../assets/logo.webp";
import HomeIcon from "../../assets/Homeicon.png";
import EmailIcon from "../../assets/emailiconf.png";
import CallIcon from "../../assets/calliconf.png";
import borderImg from "../../assets/border.png";
import { useEffect, useState } from "react";
import { API_URL } from "../../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Latest1 from "../../assets/gallaryImg/g34.jpg"
import Latest2 from "../../assets/gallaryImg/g35.jpg"
import Latest3 from "../../assets/gallaryImg/g36.jpg"



const Footer = () => {
    const navigate = useNavigate();
    const phoneNumber = '+91 95864 27271';
    const emailAddress = 'thedesignfactor.co.in';
    const [latestPost, setLatestPost] = useState([]);
    console.log("latestPost", latestPost);


    const recentPostData = () => {
        const url = `${API_URL}/admin/post/view_recent_post`;

        axios.get(url)
            .then(response => {
                setLatestPost(response.data.record);
            })
            .catch(error => {
                // Handle error
                console.error("Error:", error.response.status, error.response.statusText);
                console.error(error.response.data);
            });
    }
    useEffect(() => {
        recentPostData();
    }, [])

    return (
        <>
            <div className=" bg-white drop-shadow-2xl mt-10">
                <footer className="container md:mx-auto text-center text-lg-start text-muted py-10 px-10">
                    <section className="">
                        <div className="container text-center text-md-start mt-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="mb-4">
                                    <img src={Logo} alt="logo" className="m-auto mb-3" />
                                    <h6 className="text-uppercase font-bold mb-4 text-[18px]">
                                        The DesignFactor
                                    </h6>
                                    <p className="text-start">
                                        The DesignFactor was co-founded by Ar. Sahil Gajera & Ar. Chintan Bhadiyadra in 1991. Since then, we have grown into a family of creative and innovative designers who are committed to excellence and unparalleled design.
                                    </p>
                                </div>

                                <div className="mb-4">
                                    <p className="text-uppercase font-bold mt-4 text-[18px] ">
                                        Useful links
                                    </p>
                                    <img src={borderImg} className="mb-4 h-0.5 w-32 m-auto" alt="" />

                                    <p className="mb-3">
                                        <a href="/" className="hover:text-gray-500">Home</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="/about-us" className="hover:text-gray-500">About Us</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="/projects" className="hover:text-gray-500">Projects</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="/faq" className="hover:text-gray-500">FAQ</a>
                                    </p>
                                    <p className="mb-3">
                                        <a href="/contact" className="hover:text-gray-500">Contact</a>
                                    </p>
                                </div>
                                <div className="mb-4">
                                    <p className="text-uppercase font-bold mt-4 text-[18px]">
                                        Latest
                                    </p>
                                    <img src={borderImg} className="mb-4 h-0.5 w-20 m-auto" alt="" />
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-16 gap-2">
                                        {/* {latestPost.map((item) => {
                                            return (
                                                <div onClick={() => navigate(`/detail/${item._id}`)} className="cursor-pointer">
                                                    <img src={`${API_URL}${item?.postImage}`} alt="" className="w-24 h-24 rounded-lg m-auto" />
                                                </div>
                                            )
                                        })} */}
                                        <div className="cursor-pointer">
                                            <img src={Latest1} alt="" className="w-24 h-24 rounded-lg m-auto" />
                                        </div>
                                        <div className="cursor-pointer">
                                            <img src={Latest2} alt="" className="w-24 h-24 rounded-lg m-auto" />
                                        </div>
                                        <div className="cursor-pointer">
                                            <img src={Latest3} alt="" className="w-24 h-24 rounded-lg m-auto" />
                                        </div>

                                    </div>
                                </div>
                                <div className="mb-4 space-y-5">
                                    <div>
                                        <p className="text-uppercase font-bold mt-4 text-[18px]">
                                            Conatct
                                        </p>
                                        <img src={borderImg} className="mb-4 h-0.5 w-28 m-auto" alt="" />
                                    </div>
                                    <div className="flex">
                                        <img src={HomeIcon} className="w-8 h-8 " alt="" />
                                        <a className="cursor-pointer" href="https://www.google.com/maps?cid=4193855031504713995">A-207 SNS Atria,Vesu  Surat, Gujarat 395007, India </a>
                                    </div>
                                    <div className="flex">
                                        <img src={EmailIcon} className="w-8 h-8" alt="" />
                                        <a href={`mailto:${emailAddress}`} className="pl-7 pt-1">
                                            {emailAddress}
                                        </a>
                                    </div>
                                    <div className="flex">
                                        <img src={CallIcon} className="w-8 h-8" alt="" />
                                        <a href={`tel:${encodeURIComponent(phoneNumber)}`} className="pl-7 pt-0.5">
                                            {phoneNumber}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="text-center p-4">
                        <a className="font-bold text-black hover:text-gray-300" href="">©2024 by thedesignfactor</a>
                    </div>
                </footer>
            </div >
        </>
    )
}
export default Footer;