import React,{useState} from "react";
import {Link} from "react-router-dom";

import ModalVideo from 'react-modal-video';

export default function Modal(){
    let [isOpen, setOpen] = useState(false);
    return(
        <>
        <div className="play-icon">
            <Link href="#!" scroll={false} onClick={() => setOpen(false)} className="play-btn lightbox">
                <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
            </Link>
        </div>
        <ModalVideo
            channel="youtube"
            youtube={{ mute: 0, autoplay: 0 }}
            isOpen={isOpen}
            videoId="yba7hPeTSjk"
            onClose={() => setOpen(false)} 
        />
        </>
    )
}