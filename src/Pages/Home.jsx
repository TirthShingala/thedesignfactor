
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import First from "../assets/1.webp";
import Second from "../assets/2.webp";
import Third from "../assets/3.webp";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import aboutImg2 from "../assets/about2.webp";
import aboutImg1 from "../assets/About-img.jpeg";
import ArrowPrevIcon from "../assets/prevIcon.png";
import ArrowNextIcon from "../assets/nextIcon.png";
import gallaryImg1 from "../assets/gallaryImg/g1.jpg"
import gallaryImg2 from "../assets/gallaryImg/g2.jpg"
import gallaryImg3 from "../assets/gallaryImg/g3.jpg"
import gallaryImg4 from "../assets/gallaryImg/g4.jpg"
import gallaryImg5 from "../assets/gallaryImg/g5.jpg"
import gallaryImg6 from "../assets/gallaryImg/g6.jpg"
import gallaryImg7 from "../assets/gallaryImg/g7.jpg"
import gallaryImg8 from "../assets/gallaryImg/g8.jpg"
import gallaryImg9 from "../assets/gallaryImg/g9.jpg"
import gallaryImg10 from "../assets/gallaryImg/g10.jpg"
import gallaryImg11 from "../assets/gallaryImg/g11.jpg"
import gallaryImg12 from "../assets/gallaryImg/g12.jpg"
import gallaryImg13 from "../assets/gallaryImg/g13.jpg"
import gallaryImg14 from "../assets/gallaryImg/g14.jpg"
import gallaryImg15 from "../assets/gallaryImg/g15.jpg"
import gallaryImg16 from "../assets/gallaryImg/g16.jpg"
import gallaryImg17 from "../assets/gallaryImg/g17.jpg"
import gallaryImg18 from "../assets/gallaryImg/g18.jpg"
import gallaryImg19 from "../assets/gallaryImg/g19.jpg"
import gallaryImg20 from "../assets/gallaryImg/g20.jpg"
import gallaryImg21 from "../assets/gallaryImg/g21.jpg"
import gallaryImg22 from "../assets/gallaryImg/video1.mp4"
import gallaryImg23 from "../assets/gallaryImg/video2.mp4"
import gallaryImg24 from "../assets/gallaryImg/video3.mp4"
import gallaryImg25 from "../assets/gallaryImg/g22.jpg"
import gallaryImg26 from "../assets/gallaryImg/g23.jpg"
import gallaryImg27 from "../assets/gallaryImg/g24.jpg"
import gallaryImg28 from "../assets/gallaryImg/g25.jpg"
import gallaryImg29 from "../assets/gallaryImg/g26.jpg"
import gallaryImg30 from "../assets/gallaryImg/g27.jpg"
import gallaryImg31 from "../assets/gallaryImg/g28.jpg"
import gallaryImg32 from "../assets/gallaryImg/g29.jpg"
import gallaryImg33 from "../assets/gallaryImg/g30.jpg"
import gallaryImg34 from "../assets/gallaryImg/g31.jpg"
import gallaryImg35 from "../assets/gallaryImg/g32.jpg"
import gallaryImg36 from "../assets/gallaryImg/g33.jpg"
import gallaryImg37 from "../assets/gallaryImg/g34.jpg"
import gallaryImg38 from "../assets/gallaryImg/g35.jpg"
import gallaryImg39 from "../assets/gallaryImg/g36.jpg"
import gallaryImg40 from "../assets/gallaryImg/video4.mp4"
import gallaryImg41 from "../assets/gallaryImg/video5.mp4"
import gallaryImg42 from "../assets/gallaryImg/video6.mp4"
import gallaryImg43 from "../assets/gallaryImg/video7.mp4"
import gallaryImg44 from "../assets/gallaryImg/video8.mp4"
import gallaryImg45 from "../assets/gallaryImg/video9.mp4"
import MainLogo from "../assets/Layer.png";
import AR1 from "../assets/AR1.png";
import IN1 from "../assets/IN1.png";
import LA1 from "../assets/LA1.jpg";




const Home = () => {
    const navigate = useNavigate();

    const GallaryData = [
        { id: 1, image: gallaryImg1, title: 'Moulding the living spaces', isVideo: false },
        { id: 2, image: gallaryImg2, title: 'Moulding the living spaces', isVideo: false },
        { id: 3, image: gallaryImg3, title: 'test', isVideo: false },
        { id: 4, image: gallaryImg4, title: 'test', isVideo: false },
        { id: 5, image: gallaryImg5, title: 'test', isVideo: false },
        { id: 6, image: gallaryImg6, title: 'Moulding the living spaces', isVideo: false },
        { id: 7, image: gallaryImg7, title: 'Moulding the living spaces', isVideo: false },
        { id: 8, image: gallaryImg8, title: 'Moulding the living spaces', isVideo: false },
        { id: 9, image: gallaryImg9, title: 'test', isVideo: false },
        { id: 10, image: gallaryImg10, title: 'Moulding the living spaces', isVideo: false },
        { id: 11, image: gallaryImg11, title: 'test', isVideo: false },
        { id: 12, image: gallaryImg12, title: 'test', isVideo: false },
        { id: 13, image: gallaryImg13, title: 'Moulding the living spaces', isVideo: false },
        { id: 14, image: gallaryImg14, title: 'Moulding the living spaces', isVideo: false },
        { id: 15, image: gallaryImg15, title: 'test', isVideo: false },
        { id: 16, image: gallaryImg16, title: 'Moulding the living spaces', isVideo: false },
        { id: 17, image: gallaryImg17, title: 'test', isVideo: false },
        { id: 18, image: gallaryImg18, title: 'test', isVideo: false },
        { id: 19, image: gallaryImg19, title: 'test', isVideo: false },
        { id: 20, image: gallaryImg20, title: 'test', isVideo: false },
        { id: 21, image: gallaryImg21, title: 'test', isVideo: false },
        { id: 22, image: gallaryImg22, title: 'test', isVideo: true },
        { id: 23, image: gallaryImg23, title: 'test', isVideo: true },
        { id: 24, image: gallaryImg24, title: 'test', isVideo: true },
        { id: 25, image: gallaryImg25, title: 'test', isVideo: false },
        { id: 26, image: gallaryImg26, title: 'test', isVideo: false },
        { id: 27, image: gallaryImg27, title: 'test', isVideo: false },
        { id: 28, image: gallaryImg28, title: 'test', isVideo: false },
        { id: 29, image: gallaryImg29, title: 'test', isVideo: false },
        { id: 30, image: gallaryImg30, title: 'test', isVideo: false },
        { id: 31, image: gallaryImg31, title: 'test', isVideo: false },
        { id: 32, image: gallaryImg32, title: 'test', isVideo: false },
        { id: 33, image: gallaryImg33, title: 'test', isVideo: false },
        { id: 34, image: gallaryImg34, title: 'test', isVideo: false },
        { id: 35, image: gallaryImg35, title: 'test', isVideo: false },
        { id: 36, image: gallaryImg36, title: 'test', isVideo: false },
        { id: 37, image: gallaryImg37, title: 'test', isVideo: false },
        { id: 38, image: gallaryImg38, title: 'test', isVideo: false },
        { id: 39, image: gallaryImg39, title: 'test', isVideo: false },
        { id: 40, image: gallaryImg40, title: 'test', isVideo: true },
        { id: 41, image: gallaryImg41, title: 'test', isVideo: true },
        { id: 42, image: gallaryImg42, title: 'test', isVideo: true },
        { id: 43, image: gallaryImg43, title: 'test', isVideo: true },
        { id: 44, image: gallaryImg44, title: 'test', isVideo: true },
        { id: 45, image: gallaryImg45, title: 'test', isVideo: true },
    ]
    useEffect(() => {
        document.getElementById('main-title').classList.add('zoom-out');
        document.getElementById('heading').classList.add('Heading');
    }, []);
    const offerSliderBreakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        580: {
            slidesPerView: 2,
            spaceBetween: 16,
        },
        1153: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1920: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
    };

    return (
        <>
            {/* <div className="bg">
                <p className="text-center text-[72px] text-black py-80" id="main-title">asasdas</p>
            </div> */}
            <div className="">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 6000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bg">
                            <p className="text-center text-[72px] text-[#A35733] py-80" id="heading">Welocme to Thedesignfactor</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg1">
                            <p className="text-center text-[1px] text-[#A35733] py-80">.</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg2">
                            <p className="text-center text-[1px] text-[#A35733] py-80">.</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="container md:mx-auto">
                <section className="py-20 section-padding" id="section_2">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="px-10" >
                                <p className="text-xl border-b-4 border-[#A35733] pb-3 font-light text-[#A35733]">About Us</p>
                                <h2 className="mt-4 mb-4 text-[28px] text-slate-700 font-medium"><span class="text-muted">DesignCore</span> Studio</h2>
                                <p className="mb-3 text-[18px] text-slate-700 font-medium">Thedesign Factor is driven by the principles of creativity, originality, consideration and enthusiasm. We have a fearless attitude and approach towards architecture and interior designing. We always have an unquenchable thirst for what is new, interesting, exciting and creative. We pride ourselves in outshining the very depth of design by delivering in luxurious, creative and beautiful homes that directly corresponds to our client needs.</p>
                                <p className="text-slate-700 text-[18px] font-normal mb-3">Our aim is to provide our clients with a personalized and customized design that goes beyond their imagination. We conceive an exclusive and chic design that not only reflect our client's taste and preferences but also enriches their lives. Our design reflects the style, desires and personality of our clients that are sophisticated, subtle and elegant.</p>
                                <p className="text-slate-700 text-[18px] font-normal mb-3">Thedesign Factor is a one-stop architecture and interior design firm specializing in exclusive, cost-effective and luxurious interior design, interior detailing and space planning in India and United States.</p>
                                <p className="text-slate-700 text-[18px] font-normal mb-3">Over the past years, Thedesign Factor has completed over 180+ projects, which includes architecture and interiors for residential projects, offices, multi-storeyed projects, commercial projects, housing projects, hospital projects, hospitality projects and also landscape design projects.                                </p>
                                <p className="text-slate-700 text-[18px] font-normal">Thedesign Factor is a multidisciplinary design studio based in Surat, Ahmedabad, Mumbai & Pune initiated in 2017 ,led by <span className="font-semibold"> Ar. Sahil Gajera and Ar. Chintan Bhadiyadra.</span></p>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-5 " id="main-title">
                                {/* <div className="col-lg-3 col-md-5 col-5 mx-lg-auto pt-60">
                                    <img src={aboutImg3} class="rounded-full w-80 h-80 m-auto" alt="" />
                                </div>
                                <div className="col-lg-4 col-md-7 col-7 pt-10 lg:pt-44">
                                    <img src={aboutImg1} class="rounded-full w-96 h-96 m-auto " alt="" />
                                </div> */}
                                <img src={MainLogo} class="w-80 h-80 m-auto" alt="" />
                                <img src={aboutImg1} class="w-[28rem] h-[28rem] m-auto " alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className="container md:mx-auto">
                <section className="pb-20 section-padding" id="section_2">
                    <div className="container">
                        <div className="">
                            <div className="px-10" >
                                <p className="text-xl border-b-4 border-[#A35733] pb-3 font-light text-[#A35733]">Our Services</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5" >
                                <div className="max-w-sm  rounded-lg shadow-lg shadow-gray-500 ">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={First} alt="" />
                                    </a>
                                    <div class="p-5">
                                        <h5 className="mb-2 text-2xl font-bold text-black">SPATIAL PLANNING</h5>
                                        <p className="mb-3 font-normal text-gray-400  ">All Great Things Have Humble Beginnings</p>
                                        <p className="mb-3 font-normal text-gray-400 ">Our Spatial Planning services suit each client’s specific needs, requirements and taste. Our architects do everything to reflect our client’s desires and translate those into a design that hits all the right notes. Contact us today to see what we are able to do to transform your space and Management.</p>
                                        <button className="rounded-full inline-flex items-center bg-[#915213] hover:bg-[#b68b60] border-0 py-2 px-6 text-white" onClick={() => navigate("/contact")}>
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                                <div class="max-w-sm bg-white rounded-lg shadow-lg shadow-gray-500 ">
                                    <a href="#">
                                        <img className="rounded-t-lg" src={Second} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold text-black">EXECUTION</h5>
                                        <p className="mb-3 font-normal text-gray-400  ">The Way to Your Dream Space Starts Here</p>
                                        <p className="mb-3 font-normal text-gray-400 ">Sometimes the little things make all the difference. Our team is equipped to handle all site and execution related concerns. Whatever your interior design needs may be, our team of engineers and designers are here to make sure they are executed to perfection. Contact us today and get started.</p>
                                        <button className="rounded-full inline-flex items-center bg-[#915213] hover:bg-[#b68b60] border-0 py-2 px-6 text-white" onClick={() => navigate("/contact")}>
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                                <div className="max-w-sm bg-white rounded-lg shadow-lg shadow-gray-500	 ">
                                    <a href="#">
                                        <img class="rounded-t-lg" src={Third} alt="" />
                                    </a>
                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold text-black">STYLING</h5>
                                        <p className="mb-3 font-normal text-gray-400  ">The Little Touches that Make All the Difference</p>
                                        <p className="mb-3 font-normal text-gray-400 ">From furnishings and material selection to interior architectural planning, we imbue each space with the owner’s unique style and personality. Brighten up your space with our styling that meets the needs of each area. Get in touch with us today to start benefiting from our outstanding services.</p>
                                        <button className="rounded-full inline-flex items-center bg-[#915213] hover:bg-[#b68b60] border-0 py-2 px-6 text-white" onClick={() => navigate("/contact")}>
                                            Contact Us
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container md:mx-auto">
                <section className="pb-20 section-padding" id="section_2">
                    <div className="container">
                        <div className="">
                            <div className="px-10" >
                                <p className="text-xl border-b-4 border-[#A35733] pb-3 font-light text-[#A35733]">Our Projects</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-5" >

                                <div
                                    className="image-container "
                                    onClick={() => navigate(`/projectlist/${1}/${'architecture'}`)}
                                >
                                    <img src={AR1} alt="" className="image  h-[500px] w-full rounded-lg " />
                                    <div className="overlay">
                                        <p className="overlay-text">Architecture</p>
                                    </div>
                                </div>
                                <div
                                    className="image-container "
                                    onClick={() => navigate(`/projectlist/${2}/${'interiaror'}`)}
                                >
                                    <img src={IN1} alt="" className="image h-[500px] w-full rounded-lg" />
                                    <div className="overlay">
                                        <p className="overlay-text">Interiaror</p>
                                    </div>
                                </div>
                                <div
                                    className="image-container "
                                    onClick={() => navigate(`/projectlist/${3}/${'landscap'}`)}
                                >
                                    <img src={LA1} alt="" className="image h-[500px] w-full rounded-lg" />
                                    <div className="overlay">
                                        <p className="overlay-text">Landscap</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="container md:mx-auto">
                <div className="px-10" >
                    <p className="text-xl border-b-4 border-[#A35733] pb-3 font-light text-[#A35733]">Gallary</p>
                </div>
                <div className="p-10 ">
                    <Swiper
                        // id="handPicked_products"
                        breakpoints={offerSliderBreakpoints}
                        modules={[Navigation]}
                        spaceBetween={30}
                        navigation={{
                            nextEl: '.next',
                            prevEl: '.prev',
                        }}>
                        {GallaryData.map((item) => (
                            <SwiperSlide>
                                <div
                                    className="image-container">
                                    {item.isVideo ?
                                        <a href="https://www.instagram.com/designcore_studio/?img_index=1"><video controls autoplay className="h-96 w-96 rounded-lg">
                                            <source src={item.image} type="video/mp4" />
                                            Your browser does not support the video tag.
                                        </video></a>
                                        :
                                        <a href="https://www.instagram.com/designcore_studio/?img_index=1"><img src={item.image} alt="" className="image h-96 w-96 rounded-lg " /></a>
                                    }
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="flex justify-end space-x-5 mt-5">
                        <div className="prev">
                            <img src={ArrowPrevIcon} className="w-10 h-10 cursor-pointer" alt="" />
                        </div >
                        <div className="next" >
                            <img src={ArrowNextIcon} className="w-10 h-10 cursor-pointer" alt="" />
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}
export default Home;