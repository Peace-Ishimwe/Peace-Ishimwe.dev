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

import { MyImages } from './images';


const MyGallery = () => {
    return (
        <div className="gallery-container container mt-20 mx-auto">
            <div className="header">
                <p className="font-general-medium text-2xl sm:text-4xl text-ternary-dark dark:text-ternary-light text-center mb-10">
                    My Gallery
                </p>
            </div>
            <LightGallery plugins={[lgThumbnail, lgZoom, lgRotate, lgShare]} speed={500}>
                {MyImages && MyImages.map((image) => {
                    return (
                        <a key={image.id} href={image.image} className="w-[16rem] max-w-[20rem] flex-grow">
                            <img src={image.image} loading='lazy' alt="Profile 1" className="w-full h-full object-cover" />
                        </a>
                    )
                })}
            </LightGallery>
        </div>
    );
};

export default MyGallery;
