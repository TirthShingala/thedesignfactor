import partner1 from "../assets/manishchoksi.jpg";
import partner2 from "../assets/urichoksi.jpg";
import aboutImg from "../assets/about1.png";
import First from "../assets/1.webp";
import Second from "../assets/2.webp";
import Third from "../assets/3.webp";
import Four from "../assets/4.webp";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useNavigate } from "react-router-dom";
import client1 from "../assets/sahil.png";
import client2 from "../assets/chitan.png";



const Aboutus = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="lg:container md:mx-auto px-5 py-10 ">
                <div className="flex flex-col lg:flex-row">
                    <div className=""><img src={aboutImg} alt="about" className="max-w-[300px]" /></div>
                    <div className="pl-10">
                        <p className="text-[32px] border-b-4 border-[#A35733] w-36 ">About US</p>
                        <p className="mt-8 tracking-wider">The Change Starts With You</p>
                        <p className="my-3 tracking-wider">
                            The DesignFactor is among the top interior design and architecture practices in Surat. Since 1991, after completing over 2000 projects we have grown in both size and reputation, and we couldn’t be happier. Our priority is understanding the specific needs of each client and applying them throughout the entire design process.
                        </p>
                        <p className="tracking-wider">
                            What we create is born from a collaboration with each client, which is why we include our clients in each step of the process to ensure that our work is exactly what they had in mind. The end result is an inspiring space that promotes well-being. Want to transform your space? Give us a call.
                        </p>
                        <button className="rounded-full inline-flex items-center bg-[#915213] hover:bg-[#b68b60] border-0 py-2 px-6 text-white mt-5" onClick={() => navigate("/contact")}>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-10 lg:container md:mx-auto px-5 ">
                <p className="text-center text-[32px] ">Meet The Principal Architects</p>
                <div className="flex flex-col justify-around lg:flex-row mt-10 space-y-10 lg:space-y-0">
                    <div>
                        <img src={client1} alt="" className="m-auto rounded-full h-[400px] w-[400px] " />
                        <p className="text-center text-[20px] mt-5 font-semibold">Ar. Sahil Gajera  </p>
                    </div>
                    <div className="">
                        <img src={client2} alt="" className="m-auto rounded-full h-[400px] w-[400px]" />
                        <p className="text-center text-[20px] mt-5 font-semibold">Ar. Chintan Bhadiyadra  </p>
                    </div>
                </div>
            </div>
            <div className="bg-[#A35733] my-16">
                <div className="py-10 lg:container md:mx-auto px-5 lg:px-60">
                    <p className="text-center text-[32px] text-[#fff] font-semibold pb-10">Our Journey</p>
                    <div class="timeline">
                        <div class="container1 left ">
                            <div class="content shadow">
                                <h2 className="">1991</h2>
                                <p className="tracking-wider">The inception of an idea became a multi-disciplinary organization that serves not only at the domestic level but also internationally.
                                    Ar. Manish Choksi, having completed his architectural education from CEPT University in Ahmedabad, instituted a startup under the name DESIGN CORE.
                                </p>
                            </div>
                        </div>
                        <div class="container1 right">
                            <div class="content shadow">
                                <h2>1993</h2>
                                <p>
                                    When The Design Fector was still in the adolescent stage, Ar. Sahil Gajera collaborated with Ar. Chintan Bhadiyadra, who was at that time, an experienced architect from Singapore. Very soon, their partnership sailed for the most adventurous trip, professionally and personally.
                                </p>
                            </div>
                        </div>
                        <div class="container1 left">
                            <div class="content shadow">
                                <h2>1995</h2>
                                <p>It was a significant turnaround when the duo won the local bank competition - an open competition where 25-30 architects designed the bank space. Their hard work and sheer commitment helped them gain the contract while winning the contest against the top architects, boosting their confidence with a milestone achieved for the organization.</p>
                            </div>
                        </div>
                        <div class="container1 right">
                            <div class="content shadow">
                                <h2>2012</h2>
                                <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                            </div>
                        </div>
                        <div class="container1 left">
                            <div class="content shadow">
                                <h2>1995 - 1999</h2>
                                <p>A blooming tenure, during which they left their fingerprints on - a chain of 45 banks, 290 corporate sectors, companies like Reliance, Gujarat gas, L&T, Sugar factories etc.</p>
                            </div>
                        </div>
                        <div class="container1 right">
                            <div class="content shadow">
                                <h2>2001</h2>
                                <p>
                                    During this time, DesignFactor's focus was routed towards the residential sector. Ar. Sahil Gajera & Ar. Chintan Bhadiyadra also made their first international trip to Singapore for a furniture exhibition, which turned into an exploratory trip. The exposure, networking, knowledge sharing, the various books aided in changing their perspective in architecture and interior design.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className="lg:container md:mx-auto px-20 py-10">
                <p className="text-center text-[32px] mb-8">Projects We Undertake</p>
                <Swiper
                    // slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        300: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        782: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={First} alt="" />
                            </a>
                            <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold dark:text-white">Architecture</h5>
                                <p class="mb-3 font-normal  dark:text-gray-400">DesignCore Studio fosters developing fully integrated design practices. We offer architectural design services throughout India. Architectural services provide high-quality designs and strategic advice to clients based on master planning, innovation, parametric designs, functionality, and sustainability.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={Second} alt="" />
                            </a>
                            <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold dark:text-white">Interior</h5>
                                <p class="mb-3 font-normal dark:text-gray-400">For two decades, we have specialized in creating interiors with distinction for private clients and developers. Offering a complete range of design services from conceptualizing, space planning, designing and furniture design and procurement. We also provide quality checks  furnishings selection.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={Third} alt="" />
                            </a>
                            <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold dark:text-white">Landscape</h5>
                                <p class="mb-3 font-normal  dark:text-gray-400">Our landscape design studio artfully creates designs to bring you closer to nature within your built spaces. We have done a wide range of exceptional landscaping work from terrace garden to rooftop restaurants, private bungalows to gardens and landscaping of big housing colonies.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="max-w-sm bg-white  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img class="rounded-t-lg" src={Four} alt="" className="" />
                            </a>
                            <div class="p-5">
                                <h5 class="mb-2 text-2xl font-bold dark:text-white">Ambiance & Styling</h5>
                                <p class="mb-3 font-normal dark:text-gray-400">We specialise in reinventing existing designed spaces and modifying them as per international standards and clients’ expectations. Our Design & styling team directs and characterise areas by giving an artistic and aesthetic appeal to your space and end-to-end design solutions working across the globle and work.To Idetifi With Together</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div >
        </>
    )
}
export default Aboutus;