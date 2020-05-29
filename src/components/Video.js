import React from 'react';

const Video = () => {
    return (
            <div className="responsive-iframe d-flex justify-content-center">
                <iframe
                    title="Video"
                    width="560" 
                    height="315"  
                    src="https://www.youtube.com/embed/YlWFPjctO7Q" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
                    allowFullScreen>
                </iframe>
            </div>
    );
};

export default Video;