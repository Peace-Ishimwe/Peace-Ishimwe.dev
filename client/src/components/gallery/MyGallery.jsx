import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

import Profile1 from "../../images/ProfileMe/Profile1.jpg";
import Profile2 from "../../images/ProfileMe/Profile2.jpg";
import Profile3 from "../../images/ProfileMe/Profile3.jpg";
import Profile4 from "../../images/ProfileMe/Profile4.jpg";
import Profile5 from "../../images/ProfileMe/Profile5.jpg";
import Profile6 from "../../images/ProfileMe/Profile6.jpg";
import Profile7 from "../../images/ProfileMe/Profile7.jpg";
import Profile8 from "../../images/ProfileMe/Profile8.jpg";
import Profile9 from "../../images/ProfileMe/Profile9.jpg";
import Profile10 from "../../images/ProfileMe/Profile10.jpg";


const MyGallery = () => {
    return (
        <div className="gallery-container container mt-20 mx-auto">
            <div className="header">
                <p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light text-center mb-10">
                    My Gallery
                </p>
            </div>
            <LightGallery plugins={[lgThumbnail, lgZoom, lgRotate, lgShare]} speed={500}>
                <a href={Profile1} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile1} alt="Profile 1" className="w-full h-full object-cover" />
                </a>
                <a href={Profile3} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile3} alt="Profile 3" className="w-full h-full object-cover" />
                </a>
                <a href={Profile5} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile5} alt="Profile 5" className="w-full h-full object-cover" />
                </a>
                <a href={Profile6} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile6} alt="Profile 6" className="w-full h-full object-cover" />
                </a>
                <a href={Profile4} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile4} alt="Profile 4" className="w-full h-full object-cover" />
                </a>
                <a href={Profile7} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile7} alt="Profile 7" className="w-full h-full object-cover" />
                </a>

                <a href={Profile8} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile8} alt="Profile 8" className="w-full h-full object-cover" />
                </a>
                <a href={Profile9} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile9} alt="Profile 9" className="w-full h-full object-cover" />
                </a>
                <a href={Profile2} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile2} alt="Profile 2" className="w-full h-full object-cover" />
                </a>
                <a href={Profile10} className="w-[16rem] max-w-[20rem] flex-grow">
                    <img src={Profile10} alt="Profile 10" className="w-full h-full object-cover" />
                </a>
            </LightGallery>
        </div>
    );
};

export default MyGallery;
