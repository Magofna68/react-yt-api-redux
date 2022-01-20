import React, { Component } from 'react';
// import PropTypes from 'prop-types';


const VideoDetail = (props) => {
  const video = props.video;
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className='video-detail col-lg-6'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-responsive-item' src={url}></iframe>
      </div>
      <div className='details'>
        <br/>
        <h3>{video.snippet.title}</h3>
        <p>{video.snippet.channelTitle}</p>
        <div className='video-description'>{video.snippet.description}</div>
      </div>
    </div>
  )
}

export default VideoDetail;