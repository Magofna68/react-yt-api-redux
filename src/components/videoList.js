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
    <ul className='col-md-6 list-group'>
      {videoItems}
    </ul> 
  )
}

export default VideoList;