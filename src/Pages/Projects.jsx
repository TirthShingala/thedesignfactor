import { useEffect, useState } from "react";
import RajhanshImg from "../assets/Rajhans Empire office-2.webp";
import tejaniImg from "../assets/Tejani.webp";
import royalton from "../assets/RajhansRoyalTon.webp";
import AvadhImg from "../assets/Avadh.webp";
import gallary1 from "../assets/gallary1.webp";
import gallary2 from "../assets/gallary2.webp";
import gallary3 from "../assets/gallary3.webp";
import gallary4 from "../assets/gallary4.webp";
import gallary5 from "../assets/gallary5.webp";
import gallary6 from "../assets/gallary6.webp";
import gallary7 from "../assets/gallary7.webp";
import gallary8 from "../assets/gallary8.webp";
import gallary9 from "../assets/gallary9.webp";
import gallary10 from "../assets/gallary10.webp";
import gallary12 from "../assets/gallary12.webp";
import gallary13 from "../assets/gallaryImg/g11.jpg";
import gallary14 from "../assets/gallaryImg/g1.jpg";
import gallary15 from "../assets/gallaryImg/g2.jpg";
import gallary16 from "../assets/gallaryImg/g3.jpg";
import gallary17 from "../assets/gallaryImg/g4.jpg";
import gallary18 from "../assets/gallaryImg/g5.jpg";
import gallary20 from "../assets/gallaryImg/g7.jpg";
import gallary21 from "../assets/gallaryImg/g8.jpg";
import gallary22 from "../assets/gallaryImg/g9.jpg";
import gallary23 from "../assets/gallaryImg/g10.jpg";
import gallary24 from "../assets/gallaryImg/g11.jpg";
import gallary25 from "../assets/gallaryImg/g12.jpg";


import axios from "axios";
import { API_URL } from "../config";
import { useNavigate } from "react-router-dom";
const Projects = () => {
    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('all');
    const [allProject, setallProject] = useState([]);
    const [architectureProject, setArchitectureProject] = useState([]);
    const [interiorProject, setInteriorProject] = useState([]);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // useEffect(() => {
    //     const token = localStorage.getItem("JWT_Token");
    //     setToken(token);
    // }, [])

    const ViewAllPost = () => {
        const post_type = "interior";
        const url = `${API_URL}/admin/post/view_post/?title=`;
        const token = localStorage.getItem("JWT_Token");
        // const config = {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // };
        axios.get(url)
            .then(response => {
                setallProject(response.data.record);
            })
            .catch(error => {
                // Handle error
                console.error("Error:", error.response.status, error.response.statusText);
                console.error(error.response.data);
            });
    }
    useEffect(() => {
        ViewAllPost();
    }, [])

    // Function to handle tab click
    const handleTabClick = (tab) => {
        setActiveTab(tab);

        if (tab === "architecture") {
            const post_type = "interior";
            const url = `${API_URL}/admin/post/view_architecture_post/?post_type_title=architecture`;
            const token = localStorage.getItem("JWT_Token");
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }   
            // }; 

            axios.get(url)
                .then(response => {
                    setArchitectureProject(response.data.record);
                })
                .catch(error => {
                    console.error("Error:", error.response.status, error.response.statusText);
                    console.error(error.response.data);
                });
        } else if (tab === "interior") {
            const post_type = "interior";
            const url = `${API_URL}/admin/post/view_interior_post/?post_type_title=interior`;
            const token = localStorage.getItem("JWT_Token");

            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`
            //     }
            // };

            axios.get(url)
                .then(response => {
                    setInteriorProject(response.data.record);
                })
                .catch(error => {
                    console.error("Error:", error.response.status, error.response.statusText);
                    console.error(error.response.data);
                });
        } else {
            console.log("All Data");
        }
    };


    const encodeSlug = (name) => {
        return name.replace(/\s+/g, '-').toLowerCase();
    };
    const handleProjectList = (item) => {
        console.log("item:------", item);
        localStorage.setItem("ProjectTitle", item.sub_post_title)
        navigate(`/projectlist/${item?.post_type_title}/${encodeSlug(item.sub_post_title)}`)
    }

    return (
        <>
            <div className="lg:container md:mx-auto px-5 py-10 ">
                <div className="flex justify-center mb-16">
                    <p className="text-[32px]  border-b-4  tracking-wider border-[#A35733]">Our Portfolio</p>
                </div>
                <p className="text-center mb-5 tracking-wider">DesignCore Studio wants your space to be your favourite spot in the whole wide world. We understand that every space can look completely different with the right design. Our team of designers are here to tailor your space’s perfect look and make it as interesting as you are.</p>
                <p className="text-center tracking-wider">
                    We invite you to view some of our most amazing projects. Our team at DesignCore Studio are experts at freshening up places and unlocking their full potential. Here are just a few of our projects.
                </p>
            </div>
            <div className="">
                <div className="flex justify-center">
                    <button className={`tab-button tracking-wider rounded-lg ${activeTab === 'all' ? 'active' : ''}`} onClick={() => handleTabClick('all')}>All</button>
                    <button className={`tab-button tracking-wider rounded-lg  ${activeTab === 'architecture' ? 'active' : ''}`} onClick={() => handleTabClick('architecture')}>Architecture</button>
                    <button className={`tab-button tracking-wider rounded-lg ${activeTab === 'interior' ? 'active' : ''}`} onClick={() => handleTabClick('interior')}>Interior Design</button>
                </div>

                <div className="flex justify-center mt-16 ">
                    {/* <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-10"> */}
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {activeTab === 'all' ?
                            allProject.map((item, index) => {
                                console.log("item", item)
                                return (
                                    <>
                                        <div
                                            key={index}
                                            className="image-container"
                                            onMouseEnter={() => setHoveredIndex(index)}
                                            onMouseLeave={() => setHoveredIndex(null)}
                                            // onClick={() => navigate('/projectlist')}
                                            onClick={() => handleProjectList(item)}>
                                            <img src={`${API_URL}${item?.sub_post_image}`} alt="" className="image w-80 h-80" />
                                            {hoveredIndex === index && (
                                                <div className="overlay">
                                                    <p className="overlay-text">{item.sub_post_title}</p>
                                                </div>
                                            )}
                                        </div>
                                    </>
                                )
                            })
                            : activeTab === 'architecture' ?
                                architectureProject?.map((item, index) => {
                                    return (
                                        <>
                                            <div
                                                key={index}
                                                className="image-container "
                                                onMouseEnter={() => setHoveredIndex(index)}
                                                onMouseLeave={() => setHoveredIndex(null)}
                                                // onClick={() => navigate(`/detail/${item._id}`)} 
                                                onClick={() => handleProjectList(item)}>
                                                <img src={`${API_URL}${item.sub_post_image}`} alt="" className="image w-80 h-80" />
                                                {hoveredIndex === index && (
                                                    <div className="overlay">
                                                        <p className="overlay-text">{item.sub_post_title}</p>
                                                    </div>
                                                )}
                                            </div>

                                        </>
                                    )
                                }) : activeTab === 'interior' ?
                                    interiorProject?.map((item, index) => {
                                        return (
                                            <>
                                                <div
                                                    key={index}
                                                    className="image-container"
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    // onClick={() => navigate(`/detail/${item._id}`)}
                                                    onClick={() => handleProjectList(item)}>
                                                    <img src={`${API_URL}${item.sub_post_image}`} alt="" className="image w-80 h-80" />
                                                    {hoveredIndex === index && (
                                                        <div className="overlay">
                                                            <p className="overlay-text">{item?.sub_post_title}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            </>
                                        )
                                    }) : ''
                        }
                    </div>
                </div>
            </div>
            <div className="lg:container md:mx-auto px-5 py-10 mt-16 ">
                <p className="text-[32px] pl-3 pb-5">And Many More</p>
                <div className="row">
                    <div className="column">
                        <img src={gallary12} style={{ width: "100%" }} alt="" />
                        <img src={gallary2} style={{ width: "100%" }} alt="" />
                        <img src={gallary3} style={{ width: "100%" }} alt="" />
                        <img src={gallary4} style={{ width: "100%" }} alt="" />
                        <img src={gallary5} style={{ width: "100%" }} alt="" />
                        <img src={gallary6} style={{ width: "100%" }} alt="" />
                        <img src={gallary7} style={{ width: "100%" }} alt="" />
                        <img src={gallary24} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="column">
                        <img src={gallary8} style={{ width: "100%" }} alt="" />
                        <img src={gallary9} style={{ width: "100%" }} alt="" />
                        <img src={gallary10} style={{ width: "100%" }} alt="" />
                        <img src={gallary11} style={{ width: "100%" }} alt="" />
                        <img src={gallary12} style={{ width: "100%" }} alt="" />
                        <img src={gallary1} style={{ width: "100%" }} alt="" />
                        <img src={gallary25} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="column">
                        <img src={gallary13} style={{ width: "100%" }} alt="" />
                        <img src={gallary14} style={{ width: "100%" }} alt="" />
                        <img src={gallary15} style={{ width: "100%" }} alt="" />
                        <img src={gallary16} style={{ width: "100%" }} alt="" />
                        <img src={gallary17} style={{ width: "100%" }} alt="" />
                        <img src={gallary18} style={{ width: "100%" }} alt="" />
                    </div>
                    <div className="column">
                        <img src={gallary20} style={{ width: "100%" }} alt="" />
                        <img src={gallary21} style={{ width: "100%" }} alt="" />
                        <img src={gallary22} style={{ width: "100%" }} alt="" />
                        <img src={gallary23} style={{ width: "100%" }} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Projects;