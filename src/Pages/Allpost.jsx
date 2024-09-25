
import view from "../assets/viewicon.png";
import comment from "../assets/chatimg.png";
import heartLine from "../assets/Icon (3).png";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Allpost = () => {
    const navigate = useNavigate();
    const [allProject, setAllProject] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    console.log("allProject", allProject);

    const ViewAllPost = () => {
        const url = `${API_URL}/admin/post/view_post/?title=`;

        axios.get(url)
            .then(response => {
                setAllProject(response?.data?.record);
            })
            .catch(error => {
                console.error("Error:", error.response.status, error.response.statusText);
                console.error(error.response.data);
            });
    }

    const handleSearch = () => {
        // try {
        //     const response = await axios.get(`${API_URL}/admin/post/search_post/`, {
        //         params: {
        //             title: searchTerm
        //         }
        //     });
        //     console.log("SearchData", response);
        // } catch (error) {
        //     console.error('Error fetching search results:', error);
        // }  
        const params = searchTerm;
        const url = `${API_URL}/admin/post/search_post/?sub_post_title=${params}`;

        axios.get(url)
            .then(response => {
                setAllProject(response?.data?.record);
            })
            .catch(error => {
                console.error("Error:", error.response.status, error.response.statusText);
                console.error(error.response.data);
            });
    };

    useEffect(() => {
        ViewAllPost();
    }, [])
    return (
        <>
            <div className="lg:container md:mx-auto px-5 py-10 ">
                <div className="flex justify-center mb-10">
                    <p className="text-[32px]  border-b-4  tracking-wider border-[#A35733]">All Posts</p>
                </div>

                <div class="box py-6">
                    <div class="box-wrapper">
                        <div class=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                            <button class="outline-none focus:outline-none"><svg class=" w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg></button>
                            <input type="search" value={searchTerm} name="searchTerm" onChange={(e) => setSearchTerm(e.target.value)} placeholder="search Projects" x-model="q" class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent rounded-lg" />
                            <button class="bg-[#A35733] px-2 py-1 mx-5 rounded-lg text-white" onClick={() => handleSearch()}>
                                Search
                            </button>
                        </div>
                    </div>
                </div>

                <div class="container mx-auto pb-20">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {allProject?.map((item) => {
                            console.log("item:---", item);
                            return (
                                <div>
                                    <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                        <div class="relative">
                                            <img class="w-full h-auto" src={`${API_URL}${item.sub_post_image}`} alt="" />
                                        </div>
                                        <div class="p-4 mt-2">
                                            <div class="flex justify-between mb-3">
                                                <p class="mb-0 text-[22px] font-semibold">{item.sub_post_title}</p>
                                            </div>
                                            <div class="flex mb-3 space-x-4">
                                                <div className="flex space-x-2"><img src={view} className="h-5" alt="" /><small >300 Views</small></div>
                                                <div className="flex space-x-2"><img src={comment} className="h-4 mt-0.5" alt="" /><small >2 Comments</small></div>
                                                <div className="flex space-x-2"><img src={heartLine} className="h-4 mt-0.5" alt="" /><small>Like</small></div>
                                            </div>
                                            {/* <div className="mt-8">
                                                <p className="text-gray-700 mb-3"><span className="font-semibold">Completion Year -</span> {item.project_complet_year}</p>
                                                <p className="text-gray-700 mb-3"><span className="font-semibold">Project Location -</span> {item.project_location}</p>
                                                <p className="text-gray-700 mb-3 line-clamp-1"><span className="font-semibold">Program -</span> {item.program}</p>
                                            </div> */}
                                            <div className="flex justify-center mt-10" onClick={() => navigate(`/detail/${item._id}`)}>
                                                <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                    View Detail
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

            </div >
        </>
    )
}
export default Allpost;