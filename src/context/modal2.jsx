import React,{useState} from "react";
import {Link} from 'react-router-dom';

import ModalVideo from 'react-modal-video';

import {FiPlay} from '../assets/icons/vander'

export default function Modal2(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="section-title">
            <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
            <p className="text-light para-dark para-desc mx-auto">Start working with Creadoc that can provide everything you need to generate awareness, error ,bug and let's connect.</p>
            <Link href="#!" scroll={false} onClick={() => setOpen(true)} className="play-btn border border-light mt-4 lightbox">
                <FiPlay className="fea icon-ex-md text-white title-dark"/>
            </Link>
        </div>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="UZfaIx57UqU"
            onClose={() => setOpen(false)} 
        />
        </>
    )
}