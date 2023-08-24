import React from "react";
import ReactPlayer from 'react-player/youtube';

 export function VIDEOS () {
return(
    <div className="video">
        <div><h1>See What Our Customer Says!</h1></div>
        <ReactPlayer  url= 'https://www.youtube.com/shorts/M17twPO0ffg'>
        
        </ReactPlayer>
    </div>
)
}
