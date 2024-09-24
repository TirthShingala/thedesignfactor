// import { useNavigate, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { API_URL } from "../config";
// import axios from "axios";
// import { SlideshowLightbox } from 'lightbox.js-react'
// import 'lightbox.js-react/dist/index.css'
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import Avatar from "react-avatar";
// import { ToastContainer, toast } from "react-toastify";



// const ProjectDetail = () => {
//     const navigate = useNavigate();
//     const { projectid } = useParams();
//     const [isDetail, setIsDetail] = useState([]);
//     const [WorkSpaceImg, setWorkSpaceImg] = useState([]);
//     const [recentPost, setRecentPost] = useState([]);
//     const [value, setValue] = useState('');
//     const [newValue, setnewValue] = useState();
//     const [allComment, setAllComment] = useState([]);
//     console.log("allComment", allComment);


//     const projectDetailData = () => {
//         const url = `${API_URL}/admin/post/view_single_post/${projectid}`;
//         const token = localStorage.getItem("JWT_Token");

//         const config = {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         };
//         axios.get(url, config)
//             .then(response => {
//                 setIsDetail(response?.data?.record);
//                 setWorkSpaceImg(response.data?.record?.work_space_image)
//             })
//             .catch(error => {
//                 console.log("Error", error);
//             })
//     }

//     const recentPostData = () => {
//         const url = `${API_URL}/admin/post/view_recent_post`;

//         axios.get(url)
//             .then(response => {
//                 setRecentPost(response.data.record);
//             })
//             .catch(error => {
//                 // Handle error
//                 console.error("Error:", error.response.status, error.response.statusText);
//                 console.error(error.response.data);
//             });
//     }

//     useEffect(() => {
//         projectDetailData();
//         recentPostData();
//     }, []);

//     const updatevalue = (e) => {
//         setValue(e)
//         setnewValue(e)
//     }

//     const viewAllComment = () => {
//         const url = `${API_URL}/admin/comment/single_post_comment/${projectid}`;

//         axios.get(url)
//             .then(response => {
//                 setAllComment(response?.data?.record);
//             })
//             .catch(error => {
//                 console.error("Error:", error.response.status, error.response.statusText);
//                 console.error(error.response.data);
//             });
//     }
//     const publishComment = () => {
//         const url = `${API_URL}/admin/comment/add_comment/`;

//         const data = new URLSearchParams();
//         data.append('post_id', projectid);
//         data.append('comment', newValue);


//         axios.post(url, data)
//             .then(response => {
//                 toast.success("Successfully Add Comment!!!");
//                 console.log("response", response);
//                 viewAllComment();
//             })
//             .catch(error => {
//                 console.error('Login failed:', error.response.data);
//             });
//     }

//     useEffect(() => {
//         viewAllComment();
//     }, [])
//     return (
//         <>
//             <div className="">
//                 <div className="p-20 bg-[#A35733]">
//                     <p className="text-center text-[50px] text-white font-semibold">{isDetail?.title}</p>
//                     <p className="text-center text-[20px] py-5 text-white tracking-wider">{isDetail?.post_type}</p>
//                 </div>
//                 <div>
//                     <div className="lg:container md:mx-auto">
//                         <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 gap-20 m-10">
//                             <div>
//                                 <div>
//                                     <p className="text-[23px] pt-5 tracking-wider font-medium">Project Completion Year </p>
//                                     <p className="text-[17px] not-italic tracking-wider text-[#676767] mt-5">{isDetail?.project_complet_year}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-[23px] pt-5 tracking-wider font-medium">Project Location</p>
//                                     <p className="text-[17px] not-italic tracking-wider text-[#676767] mt-5">{isDetail?.project_location}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-[23px] pt-5 tracking-wider font-medium">Program </p>
//                                     <p className="text-[17px] not-italic tracking-wider text-[#676767] mt-5">{isDetail?.program}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-[23px] pt-5 tracking-wider font-medium">Project Description </p>
//                                     <p className="text-[17px] not-italic tracking-wider text-[#676767] mt-5">{isDetail?.description}</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <img src={`${API_URL}${isDetail?.postImage}`} className="bg-[#676767] w-10/12 m-auto" />
//                             </div>
//                         </div>
//                         <div className="m-10 lg:px-20">
//                             <p className="text-[17px] not-italic tracking-wider text-[#676767] mt-5">{isDetail?.description_1}</p>
//                             <p className="text-[17px] not-italic tracking-wider text-[#676767] mt-5">{isDetail?.description_2}</p>
//                         </div>
//                         <div className="m-10 lg:px-20">
//                             <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
//                                 {isDetail?.work_space_image?.map((item) => {
//                                     return (
//                                         <>
//                                             <SlideshowLightbox className="container mx-auto">
//                                                 <img id="image1" src={`${API_URL}${item}`} className="h-80 w-80 m-auto rounded-lg shadow-xl dark:shadow-gray-800" />
//                                             </SlideshowLightbox >
//                                         </>
//                                     )
//                                 })}
//                             </div>

//                             <p className="text-[17px] not-italic tracking-wider text-[#676767] mt-10">
//                                 {isDetail?.description_3}
//                             </p>

//                         </div>
//                         <div className="m-10 lg:px-20">
//                             <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mx-auto">

//                                 {isDetail?.gallary_image?.map((item) => {
//                                     return (
//                                         <>
//                                             <SlideshowLightbox className="container mx-auto">
//                                                 <img src={`${API_URL}${item}`} className="h-96 w-96" alt="" />
//                                             </SlideshowLightbox>
//                                         </>
//                                     )
//                                 })}
//                             </div>



//                             <section class="py-6 sm:py-12  text-gray-800 ">
//                                 <div class="container p-6 mx-auto space-y-8">
//                                     <div class="space-y-2 text-center">
//                                         <h2 class="text-3xl font-bold">Recent Post</h2>
//                                     </div>

//                                     <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
//                                         {recentPost?.map((item) => {
//                                             return (
//                                                 <>
//                                                     <div className="flex flex-col bg-[#A35733] cursor-pointer" onClick={() => navigate("/allpost")}>
//                                                         <div rel="noopener noreferrer" aria-label="Te nulla oportere reprimique his dolorum">
//                                                             <img alt="" className="object-cover w-full h-52 bg-gray-500 dark:bg-gray-700" src={`${API_URL}${item?.postImage}`} />
//                                                         </div>
//                                                         <div class="flex flex-col flex-1 p-6">
//                                                             <a href="#" className="text-xs tracking-wider uppercase hover:underline text-white">{item.title}</a>
//                                                             <h3 class="flex-1 py-2 text-lg font-semibold leading-snug text-white">{item.program}</h3>
//                                                             <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600 dark:text-gray-400">
//                                                                 <span className="text-white">{item.created_date}</span>
//                                                                 <span className="text-white">2.1K views</span>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </>
//                                             )
//                                         })}
//                                     </div>
//                                     <div className="flex justify-center" onClick={() => navigate("/allpost")}>
//                                         <button className="inline-flex items-center hover:bg-[#A35733] py-2 px-6 text-black hover:text-white border border-[#A35733]">
//                                             All Post
//                                         </button>
//                                     </div>
//                                 </div>
//                                 {/* <ReactQuill theme="snow" value={value} onChange={setValue} /> */}
//                                 <div className="border border-slate-500 p-5">
//                                     <div>
//                                         <p>Comments</p>
//                                         {allComment?.map((item) => {
//                                             console.log("item", item);
//                                             return (
//                                                 <div className="flex space-x-5 bg-[#f2f2f2] p-5 rounded-lg my-5">
//                                                     <div>
//                                                         <Avatar name="Test" size="50" />
//                                                     </div>
//                                                     <div>
//                                                         <p>Admin</p>
//                                                         <p>{item.created_date}</p>
//                                                         <p>{item.comment}</p>
//                                                     </div>
//                                                 </div>
//                                             )
//                                         })}

//                                     </div>
//                                     <ReactQuill
//                                         theme="snow"
//                                         value={value}
//                                         onChange={updatevalue}
//                                         modules={{
//                                             toolbar: [
//                                                 [{ header: [1, 2, 3, 4, 5, 6, false] }],
//                                                 ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code'],
//                                                 [
//                                                     { list: 'ordered' },
//                                                     { list: 'bullet' },
//                                                     { script: 'sub' },
//                                                     { script: 'super' },
//                                                     { indent: '-1' },
//                                                     { indent: '+1' },
//                                                 ],
//                                                 [
//                                                     { 'color': [] },
//                                                     { 'background': [] },
//                                                     { 'font': [] },
//                                                     { 'align': [] }
//                                                 ],
//                                                 ['link', 'image'],
//                                                 ['clean'],
//                                             ],
//                                             // Clipboard: { matchVisual: false }
//                                             // matchVisual: false
//                                         }}
//                                         formats={[
//                                             'header',
//                                             'bold',
//                                             'italic',
//                                             'underline',
//                                             'strike',
//                                             'blockquote',
//                                             'code',
//                                             'list',
//                                             'bullet',
//                                             'sub',
//                                             'super',
//                                             'indent',
//                                             'link',
//                                             'image',
//                                             'color',
//                                             'background',
//                                             'font',
//                                             'align'
//                                         ]}
//                                     />
//                                     <div className="my-5">
//                                         <button className="rounded-full inline-flex items-center bg-[#915213] hover:bg-[#b68b60] border-0 py-2 px-6 text-white" onClick={() => publishComment()}>
//                                             Submit
//                                         </button>
//                                     </div>
//                                 </div>
//                             </section>
//                         </div>
//                     </div>
//                 </div>
//                 <ToastContainer />
//             </div >
//         </>
//     )
// }
// export default ProjectDetail;

//Static Data :----------------
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";
import { SlideshowLightbox } from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Avatar from "react-avatar";
import { ToastContainer, toast } from "react-toastify";
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



const ProjectDetail = () => {
    const { state } = useLocation();

    return (
        <>
            <div className="">
                <div className="p-20 bg-[#A35733]">
                    <p className="text-center text-[50px] text-white font-semibold">{state?.title}</p>
                    <p className="text-center text-[20px] py-5 text-white tracking-wider">{state?.type}</p>
                </div>
                <div className="lg:container md:mx-auto px-5 py-10 mt-16 ">
                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 gap-20 m-10">
                        {state.galleyImages.map((item) => {
                            return (
                                <div>
                                    <img src={item} style={{ width: "100%", height: "500px" }} alt="" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <ToastContainer />
            </div >
        </>
    )
}
export default ProjectDetail;