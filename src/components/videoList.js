import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        key={video.etag} 
        video={video}
        onUserSelected={props.onVideoSelect}
      />
    )
  })
  return (
    // <div className='video-list'>
      <ul className='col-md-4 list-group'>
        {videoItems}
      </ul> 
    // </div>
  )
}

export default VideoList;