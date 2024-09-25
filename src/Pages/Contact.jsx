import mapicon from "../assets/mapicon.png";
import callicon from "../assets/callicon.png";
import emailicon from "../assets/emailicon.png";
import instagram from "../assets/instaicon.png";
import facebook from "../assets/facebookicon.png";
import clockicon from "../assets/clock.png";
import GoogleMapReact from 'google-map-react';



const AnyReactComponent = ({ text }) => (
    < div style={{
        color: 'white',
        background: 'grey',
        padding: '15px 10px',
        display: 'inline-flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100%',
        transform: 'translate(-50%, -50%)'
    }}>
        <p>{text}</p>
    </div >
);
const Contact = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
    return (
        <>
            <div className=" py-10">
                <div className="flex justify-center">
                    <p className="text-[32px]  border-b-4 border-[#A35733] tracking-wider">Contact Us</p>
                </div>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-10">
                    <div className="bg-gray-900">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 py-10">
                            <div className="p-5">
                                <img src={mapicon} alt="map" className="m-auto h-12 mb-3    " />
                                <p className="text-slate-400 text-center mb-1 font-semibold">ADDRESS : </p>
                                <p className="text-slate-400 text-center">310/311 Union Heights, Maharana Pratap Marg, RahulRaj Mall Lane, Piplod, Surat, Gujarat 395007, India</p>
                            </div>
                            <div className="p-5">
                                <img src={emailicon} alt="map" className="m-auto h-12 mb-3" />
                                <p className="text-slate-400 text-center mb-1 font-semibold">EMAIL : </p>
                                <p className="text-slate-400 text-center">info@designcore.co.in</p>
                            </div>
                            <div className="p-5 m-auto">
                                <img src={callicon} alt="map" className="m-auto h-12 mb-3" />
                                <p className="text-slate-400 text-center mb-1 font-semibold">CALL US : </p>
                                <p className="text-slate-400 text-center mb-2">+91 93272 86102</p>
                                <div className="flex justify-center space-x-5">
                                    <img src={facebook} alt="facebook" className="h-4" />
                                    <img src={instagram} alt="linkedin" className="h-4" />
                                </div>
                            </div>
                            <div className="flex flex-col p-5">
                                <img src={clockicon} alt="map" className="m-auto h-12 mb-3 mt-3" />
                                <p className="text-slate-400 text-center mb-3 font-semibold">OPENING HOURS : </p>
                                <div className="flex justify-center space-x-8">
                                    <div>
                                        <p className="text-slate-400">Mon - Fri</p>
                                        <p className="text-slate-400">Saturday</p>
                                        <p className="text-slate-400">Sunday</p>
                                    </div>
                                    <div>
                                        <p className="text-slate-400">10:30 am – 6:30 pm</p>
                                        <p className="text-slate-400">10:30 am – 4:30 pm</p>
                                        <p className="text-slate-400">Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}>
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div> */}
                <div className="container md:mx-auto bg-gray-900 mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 py-10">
                        <div className="p-5">
                            <img src={mapicon} alt="map" className="m-auto h-12 mb-3    " />
                            <p className="text-slate-400 text-center mb-1 font-semibold">ADDRESS : </p>
                            <p className="text-slate-400 text-center">A-207 SNS Atria,Vesu  Surat, Gujarat 395007, India</p>
                        </div>
                        <div className="p-5">
                            <img src={emailicon} alt="map" className="m-auto h-12 mb-3" />
                            <p className="text-slate-400 text-center mb-1 font-semibold">EMAIL : </p>
                            <p className="text-slate-400 text-center">thedesignfactor.co.in</p>
                        </div>
                        <div className="p-5">
                            <img src={callicon} alt="map" className="m-auto h-12 mb-3" />
                            <p className="text-slate-400 text-center mb-1 font-semibold">CALL US : </p>
                            <p className="text-slate-400 text-center mb-2">+91 9586427271</p>
                            <div className="flex justify-center space-x-5">
                                <img src={facebook} alt="facebook" className="h-4" />
                                <img src={instagram} alt="linkedin" className="h-4" />
                            </div>
                        </div>
                        <div className="flex flex-col p-5">
                            <img src={clockicon} alt="map" className="m-auto h-12 mb-3 " />
                            <p className="text-slate-400 text-center mb-3 font-semibold">OPENING HOURS : </p>
                            <div className="flex justify-center space-x-8">
                                <div>
                                    <p className="text-slate-400">Mon - Fri</p>
                                    <p className="text-slate-400">Saturday</p>
                                    <p className="text-slate-400">Sunday</p>
                                </div>
                                <div>
                                    <p className="text-slate-400">10:30 am – 6:30 pm</p>
                                    <p className="text-slate-400">10:30 am – 4:30 pm</p>
                                    <p className="text-slate-400">Closed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div style={{ height: '90vh', width: '100%' }} className="my-10 mb-20">
                    {/* <GoogleMapReact bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}>
                        <AnyReactComponent
                            lat={59.955413}
                            lng={30.337844}
                            text="My Marker"
                        />
                    </GoogleMapReact> */}
                    <GoogleMapReact
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}>
                        <AnyReactComponent
                            lat={21.2408}
                            lng={72.8806}
                            text={'Designcore'}
                        />
                    </GoogleMapReact>
                </div>

                <div className="container md:mx-auto">
                    <p className="text-[32px] text-center mb-5 font-semibold tracking-wider">Specific Queries</p>
                    <p className="text-[16px] text-center tracking-wider">Please use the links provided below to quickly contact us and get your query registered in our database.</p>

                    <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                            <div className=" relative p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 tracking-wider">New Client Enquiry</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400 ">Hello! We're glad to see your interest in working with us. Please fill this Google form to provide us with all the necessary data we need and we will revert back to you as soon as possible.</p>
                                <a href="https://forms.gle/U2HYDiSt6UA9CENx8" className="flex justify-end cursor-pointer  bottom-5 right-5 pt-5 ">
                                    <p className="font-semibold border-b-4 border-[#A35733]">Click Me</p>
                                </a>
                            </div>
                            <div className=" relative p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 tracking-wider ">Job and internship application</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Hi! please send us your portfolio at applicant@designcore.co.in and fill this Google form
                                    You will be contacted by email if you are shortlisted.</p>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9YGNjKB4PDd8YywZH9rUwW-S68aQjOr_3VpYhAFMlX5fS0w/viewform?usp=sf_link" className="flex justify-end cursor-pointer  bottom-0 right-5 pt-12">
                                    <p className="font-semibold border-b-4 border-[#A35733]">Click Me</p>
                                </a>
                            </div>
                            <div className=" relative p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 tracking-wider">3D Visualisation service  providers</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Hi! please send us your work at info@designcore.co.in and fill this Google form https://forms.gle/CFArz4ZvvMHmY8Pr7 You will be contacted by email/call if your services are required.</p>
                                <a href="https://forms.gle/CFArz4ZvvMHmY8Pr7" className="flex justify-end cursor-pointer  bottom-5 right-5 pt-10 ">
                                    <p className="font-semibold border-b-4 border-[#A35733]">Click Me</p>
                                </a>
                            </div>
                            <div className=" relative p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 tracking-wider">Vendor registration</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Hi! Please write to us at info@designcore.co.in to get in touch. Kindly fill this vendor list form to register your firm in our database https://forms.gle/fdCvdpQFKxiXx29R9</p>
                                <a href="https://forms.gle/fdCvdpQFKxiXx29R9" className="flex justify-end cursor-pointer  bottom-5 right-5 pt-10 ">
                                    <p className="font-semibold border-b-4 border-[#A35733]">Click Me</p>
                                </a>
                            </div>
                            <div className=" relative p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 tracking-wider ">Photographer registration</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Hi! please send us your work at info@designcore.co.in and fill this Google form
                                    https://forms.gle/PSHhYtK1cQwjd5fAA
                                    You will be contacted by email/call if your services are required</p>
                                <a href="https://forms.gle/PSHhYtK1cQwjd5fAA" className="flex justify-end cursor-pointer  bottom-5 right-5 pt-10 ">
                                    <p className="font-semibold border-b-4 border-[#A35733]">Click Me</p>
                                </a>
                            </div>
                            <div className=" relative p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 tracking-wider">Contractor registration</h5>
                                <p class="font-normal text-gray-700 dark:text-gray-400">Hi! Please fill this Google form and email us at info@designcore.co.in to get in touch.
                                    https://forms.gle/EQR2b3Rf3dCFjt1c9</p>
                                <a href="https://forms.gle/EQR2b3Rf3dCFjt1c9" className="flex justify-end cursor-pointer  bottom-5 right-5 pt-10 ">
                                    <p className="font-semibold border-b-4 border-[#A35733]">Click Me</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Contact;