import { Link, useNavigate, useParams } from "react-router-dom";
import gallary15 from "../assets/gallaryImg/g2.jpg";
import gallary16 from "../assets/gallaryImg/g3.jpg";
import gallary17 from "../assets/gallaryImg/g4.jpg";
import gallary18 from "../assets/gallaryImg/g5.jpg";
import gallary20 from "../assets/gallaryImg/g7.jpg";
import gallary21 from "../assets/gallaryImg/g8.jpg";
import gallary22 from "../assets/gallaryImg/g9.jpg";
import { useEffect, useState } from "react";
import { API_URL } from "../config";
import axios from "axios";
import VG1 from "../assets/V.G. 1.jpg";
import VG2 from "../assets/V.G. 2.jpg";
import VG3 from "../assets/V.G. 3.jpg";
import VG4 from "../assets/V.G. 4.jpg";

import TV1 from "../assets/CAm 19_View.jpg";
import TV2 from "../assets/Cam_02_01.jpg";
import TV3 from "../assets/Cam_04.jpg";
import TV4 from "../assets/Cam_06.jpg";
import TV5 from "../assets/Cam_07.jpg";
import TV6 from "../assets/Cam_10.jpg";

import GP1 from "../assets/GP1.jpg";
import GP2 from "../assets/GP2.jpg";

import GV1 from "../assets/GV1.jpg";
import GV2 from "../assets/GV2.jpg";

import SV1 from "../assets/SV1.png";
import SV2 from "../assets/SV2.png";
import SV3 from "../assets/SV3.png";
import SV4 from "../assets/SV4.png";
import SV5 from "../assets/SV5.png";

import Sai1 from "../assets/Sai1.jpg";
import Sai2 from "../assets/Sai2.jpg";
import Sai3 from "../assets/Sai3.jpg";
import Sai4 from "../assets/Sai4.jpg";
import Sai5 from "../assets/Sai5.jpg";
import Sai6 from "../assets/Sai6.jpg";

import PS1 from "../assets/PS1.jpg";
import PS2 from "../assets/PS2.jpg";

import SH1 from "../assets/SH1.jpg";
import SH2 from "../assets/SH2.jpg";


import SHIVdARSHAN1 from "../assets/SHIV DARSHAN-1.jpg";
import SHIVdARSHAN2 from "../assets/SHIV DARSHAN-3.jpg";
import SHIVdARSHAN3 from "../assets/SHIV DARSHAN-4.jpg";
import SHIVdARSHAN4 from "../assets/SHIV DARSHAN-5.jpg";

import SHY1 from "../assets/SHY1.jpg";
import SHY2 from "../assets/SHY2.jpg";
import SHY3 from "../assets/SHY3.jpg";
import SHY4 from "../assets/SHY4.jpg";

import VV1 from "../assets/VV1.jpg";
import VV2 from "../assets/VV2.jpg";

import DV1 from "../assets/DV1.jpeg";
import DV2 from "../assets/DV2.jpeg";

import TVG1 from "../assets/TVG-01.jpg";
import TVG2 from "../assets/TVG-02.jpg";
import TVG3 from "../assets/TVG-03.jpg";
import TVG4 from "../assets/TVG-04.jpg";

import AJ1 from "../assets/AJ1.jpg";
import AJ2 from "../assets/AJ2.jpg";
import AJ3 from "../assets/AJ3.jpg";
import AJ4 from "../assets/AJ4.jpg";

import DX1 from "../assets/DAX B.ROOM 1.jpg";
import DX2 from "../assets/DAX B.ROOM 2.jpg";
import DX3 from "../assets/DAX B.ROOM 3.jpg";

import TH1 from "../assets/TH1.jpg";
import TH2 from "../assets/TH2.jpg";

import SS1 from "../assets/SS1.jpg";
import SS2 from "../assets/SS2.jpg";
import SS3 from "../assets/SS3.jpg";
import SS4 from "../assets/SS4.jpg";

import SB1 from "../assets/SB1.jpg";
import SB2 from "../assets/SB2.jpg";
import SB3 from "../assets/SB3.jpg";
import SB4 from "../assets/SB4.jpg";

import YB1 from "../assets/YB1.jpg";
import YB2 from "../assets/YB2.jpg";
import YB3 from "../assets/YB3.jpg";
import YB4 from "../assets/YB4.jpg";

import PP1 from "../assets/PP1.jpg";
import PP2 from "../assets/PP2.jpg";

import SY1 from "../assets/SY1.jpg";
import SY2 from "../assets/SY2.jpg";
import SY3 from "../assets/SY3.jpg";
import SY4 from "../assets/SY4.jpg";

import RJ1 from "../assets/RJ1.jpg";
import RJ2 from "../assets/RJ2.jpg";
import RJ3 from "../assets/RJ3.jpg";
import RJ4 from "../assets/RJ4.jpg";

import designOffice1 from "../assets/designOffice.png";

import SJ1 from "../assets/SJ1.jpg";
import SR1 from "../assets/SR1.jpg";
import SDB1 from "../assets/SDB1.jpg";
import SDBE1 from "../assets/SDBE1.jpg";
import GI1 from "../assets/GI.jpg";
import SD1 from "../assets/SD1.jpg";
import AE1 from "../assets/AE1.jpg";
import CC1 from "../assets/CC1.jpg";













const ProjectList = () => {
    // const slug = useParams();
    // console.log("slug", slug.slug);
    // const [slugValue, setSlugValue] = useState('');
    // const [projectData, setProjectData] = useState([]);
    // console.log("slugValue", projectData?.length);
    // // const decodeText = (text) => {
    // //     return text.replace(/[-_]+/g, ' ');
    // // };
    // const decodeText = (text) => {
    //     const decodedText = text.replace(/[-_]+/g, ' ');
    //     return decodedText.charAt(0).toUpperCase() + decodedText.slice(1);
    // };

    // useEffect(() => {
    //     const ProjectTitle = localStorage.getItem("ProjectTitle");
    //     setSlugValue(ProjectTitle);
    // }, [1000]);
    // // 192.168.1.15:8000/admin/post/view_sub_post/?post_sub_type=Residance
    // const ViewSingleProjectData = () => {
    //     // const url = `${API_URL}/admin/post/view_sub_post/?post_sub_type=${slugValue}`;
    //     const url = `${API_URL}/admin/post/view_sub_post/?post_type=architecture&post_sub_type=${slugValue}`
    //     axios.get(url)
    //         .then(response => {
    //             console.log("respose:-----", response);
    //             setProjectData(response?.data?.record);
    //         })
    //         .catch(error => {
    //             // Handle error
    //             console.error("Error:", error.response.status, error?.response?.statusText);
    //             console.error(error.response.data);
    //         });
    // }
    // useEffect(() => {
    //     ViewSingleProjectData();
    // }, [slugValue]);

    const { type } = useParams();
    const { slug } = useParams();
    const [slugValue, setSlugValue] = useState('');
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const navigate = useNavigate();
    console.log("slug", type, slug);

    // ARCHITECTURE
    const villaschemaList = [
        {
            id: '1',
            image: VG1,
            title: 'Vrundavan Greens',
            type: 'ARCHITECTURE',
            year: '1995',
            location: 'Surat',
            program: 'Corporate Office',
            galleyImages: [VG1, VG2, VG3, VG4],
            description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work. '
        },
        { id: '2', image: GP1, galleyImages: [GP1, GP2], title: 'Gokuldham Premium', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '3', image: GV1, galleyImages: [GV1, GV2], title: 'Green vally', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '4', image: SV1, galleyImages: [SV1, SV2, SV3, SV4, SV5], title: 'Shivansh villa', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '5', image: TV1, galleyImages: [TV1, TV2, TV3, TV4, TV5, TV6], title: 'Tulsivills gardenia', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '6', image: Sai1, galleyImages: [Sai1, Sai2, Sai3, Sai4, Sai5, Sai6], title: 'Saivilla 10', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]
    const CommercialshoppingList = [
        { id: '1', image: gallary15, galleyImages: [gallary15], title: 'JM House', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '2', image: SH1, galleyImages: [SH1, SH2], title: 'Shyam Plaza', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '3', image: SHIVdARSHAN1, galleyImages: [SHIVdARSHAN1, SHIVdARSHAN2, SHIVdARSHAN3, SHIVdARSHAN4], title: 'Shivdarsan Shoppers', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '4', image: PS1, galleyImages: [PS1, PS2], title: 'Prime Shoppers', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]
    const ResidenceappartmentList = [
        { id: '1', image: SHY4, galleyImages: [SHY1, SHY2, SHY3, SHY4], title: 'Shyam heaven', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]
    const ResidenceList = [
        { id: '1', image: VV1, galleyImages: [VV1, VV2,], title: 'Vraj Villa', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '2', image: DV1, galleyImages: [DV1, DV2,], title: 'Mr Dax Villa', type: 'ARCHITECTURE', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]

    // INTERIOR

    const InterirorResidenceList = [
        { id: '1', image: TVG1, galleyImages: [TVG1, TVG2, TVG3, TVG4], title: 'Tulsivilla Gardenia', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '2', image: AJ1, galleyImages: [AJ1, AJ2, AJ3, AJ4], title: 'Mr.Ajaybhai', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '3', image: DX1, galleyImages: [DX1, DX2, DX3], title: 'Mr.Dakshbhai', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '4', image: TH1, galleyImages: [TH1, TH2], title: 'Mr.Thirthbhai', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '5', image: SS1, galleyImages: [SS1, SS2, SS3, SS4], title: 'Mr.Salin Shah ', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '6', image: SB1, galleyImages: [SB1, SB2, SB3, SB4], title: 'Saivilla Bunglow 8-9', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '7', image: SB1, galleyImages: [SB1], title: 'Saivilla Bunglow 12', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '8', image: YB1, galleyImages: [YB1, YB2, YB3, YB4], title: 'Mr.Yashbhai Sonani', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '9', image: PP1, galleyImages: [PP1, PP2], title: 'Mr.Pareen Pansuriya', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '10', image: SY1, galleyImages: [SY1, SY2, SY3, SY4], title: 'Mr.Sureshbhai Yogi Bunglow', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '11', image: RJ1, galleyImages: [RJ1, RJ2, RJ3, RJ4], title: 'Mr. Rajubhai(Avadh Pulsberry)', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]
    const OfficeList = [
        { id: '1', image: designOffice1, galleyImages: [designOffice1], title: 'The Design Factor Office', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '2', image: SJ1, galleyImages: [SJ1], title: 'Shivay gems', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '3', image: SR1, galleyImages: [SR1], title: 'SDB Riteshbhai', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '4', image: SDB1, galleyImages: [SDB1], title: 'SDB E-912', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '5', image: SDBE1, galleyImages: [SDBE1], title: 'SDB E-1415', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '6', image: GI1, galleyImages: [GI1], title: 'Ghanshyam Impex', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '7', image: SD1, galleyImages: [SD1], title: 'Shreenathji Daim', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '8', image: AE1, galleyImages: [AE1], title: 'AAkash Export', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '9', image: CC1, galleyImages: [CC1], title: 'Cosmo Chemistry india', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]
    const HospitalList = [
        { id: '1', image: gallary15, title: 'S.P Clicnic', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '1', image: gallary15, title: 'Rupala Hospital', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '1', image: gallary15, title: 'Kalpdeep Hospital', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '1', image: gallary15, title: 'Bhakti Hospital', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]
    const SaloonList = [
        { id: '1', image: gallary15, title: 'Simy Saloon', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
        { id: '2', image: gallary15, title: 'Raj Hair Art', type: 'INTERIOR', year: '1995', location: 'Surat', program: 'Corporate Office', description: 'An office building in the present time is a great icon, which dominates the skyline of every city. They come to define the economic, social, technological and financial progress. This in turn symbolizes their presence and dominance as a great architectural structure.Corporate Identity is rightly expressed through the workspace design.The strong layering of cuboids has been done in the facade expressing Rajhans Groups identity of being power-full, fearless and demanding attention. Angular detailing has been added to create a visual depth and give the structure its own uniqueness.Programmatically speaking the well- being of the employees has strongly been taken into account.Consequently, programs such as lounges, gym, library, indoor games area, theatre, karaoke room, rooftop café, etc., have been integrated into the design to create a balanced environment where there is equal opportunity to complete daily tasks as well as have some fun while at work.' },
    ]


    useEffect(() => {
        const ProjectTitle = localStorage.getItem("ProjectTitle");
        setSlugValue(ProjectTitle);
    }, []);

    const ViewSingleProjectData = () => {
        const url = `${API_URL}/admin/post/view_sub_post/?post_type=${type}&post_sub_type=${slugValue}`;
        axios.get(url)
            .then(response => {
                setProjectData(response?.data?.record);
                setLoading(false); // Set loading to false when data is fetched
            })
            .catch(error => {
                console.error("Error:", error.response.status, error?.response?.statusText);
                console.error(error.response.data);
                setLoading(false); // Set loading to false even if there's an error
            });
    }

    useEffect(() => {
        if (slugValue) {
            ViewSingleProjectData();
        }
    }, [slugValue]);
    return (
        <>
            <div className="lg:container md:mx-auto px-5 py-10 ">
                {/* <div className="flex  mb-10">
                    <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >{slugValue}</p>
                </div> */}
                {/* {loading ? (
                    <div className="flex justify-center items-center h-[300px]">
                        <p>Loading...</p>
                    </div>
                ) : (
                    <div class="container mx-auto pb-20">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {projectData?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <div class="shadow-lg rounded overflow-hidden cursor-pointer" onClick={() => navigate(`/detail/${item._id}`)}>
                                            <div class="relative">
                                                <img class="w-full h-[300px]" src={`${API_URL}${item.postImage}`} alt="" />
                                            </div>
                                            <div class="p-4 mt-2">
                                                <div class="flex justify-center mb-3">
                                                    <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                </div>
                                                <div className="flex justify-center">
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
                )} */}

                {slug === "architecture" &&
                    <div class="container mx-auto pb-20">
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Villa Scheme</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {villaschemaList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Commercial Shopping</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {CommercialshoppingList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Residence Appartment</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {ResidenceappartmentList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Residence</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {ResidenceList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
                {slug === "interiaror" &&
                    <div class="container mx-auto pb-20">
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Recidence</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {InterirorResidenceList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Office</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {OfficeList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Hospital</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {HospitalList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex  mb-10">
                            <p className="text-[32px] border-b-4 tracking-wider border-[#A35733]" >Saloon</p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
                            {SaloonList?.map((item) => {
                                console.log("item:----", item);
                                return (
                                    <div>
                                        <Link to={`/detail/${item.id}`} state={item}>
                                            <div class="shadow-lg rounded overflow-hidden cursor-pointer">
                                                <div class="relative">
                                                    <img class="w-full h-[300px]" src={item?.image} alt="" />
                                                </div>
                                                <div class="p-4 mt-2">
                                                    <div class="flex justify-center mb-3">
                                                        <p class="mb-0 text-[22px] font-semibold">{item?.title}</p>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <p class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#A35733] rounded-lg hover:bg-[#A35733]">
                                                            View Detail
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                }
            </div >
        </>
    )
}
export default ProjectList;