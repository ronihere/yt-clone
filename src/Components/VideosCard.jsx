import React from 'react'
import { getSubScribers } from '../utils/Constants';

const VideosCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=' px-2 shadow-lg'>
      <img className='rounded-lg w-full' src={thumbnails.high.url} alt="thumbnail" />
      <div className='font-bold font-mono'>{title} || {channelTitle}</div>
      <div></div>
      {
        statistics?.viewCount &&
        <div className='text-gray-400 text-sm'>{getSubScribers(statistics.viewCount)} views</div>
      }
    </div>
  )
}

export default VideosCard
