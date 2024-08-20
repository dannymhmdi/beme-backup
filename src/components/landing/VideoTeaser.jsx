import React from 'react';

const VideoTeaser = () => {
  return (
    // <div className='border'>
       <video
            id="video_background"
            preload="auto"
            autoPlay={true}
            loop={true}
            muted
            width="100%"
            className="rounded-md my-6"
            // playsInline=""
          >
            <source src="./videos/promo.mp4" type="video/mp4" />
          </video>
    // </div>
  )
}

export default VideoTeaser