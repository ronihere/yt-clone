import React from 'react'
import { getSubScribers, videoDuration } from '../utils/Constants';
import moment from 'moment';

const RightSideVideoCard = (video) => {
    const { snippet, statistics , contentDetails } = video;
    const { channelTitle, title, thumbnails , publishedAt } = snippet;
    const { viewCount } = statistics;
  return (
      <section className='h-36 mb-4  flex shadow-lg'>
          <div className='relative w-1/2'>
              <img src={thumbnails.medium?.url} className='h-36 p-2 rounded-lg' alt='video thumbnail' />
              <p className='absolute bottom-0 right-2 text-xs bg-black p-1 font-sans'>{videoDuration(contentDetails.duration) }</p>
          </div>
          <div className='flex flex-col font-sans p-2  w-1/2 justify-between'>
              <p className='text-sm'>
                  {title}
              </p>
              <p className='text-xs text-gray-400'>{channelTitle}</p>
              <p className='text-xs text-gray-400'>{getSubScribers(viewCount)} <span className='font-bold'>.</span> {moment(publishedAt, "YYYYMMDD").fromNow() }</p> 
          </div>
      
    </section>
  )
}

export default RightSideVideoCard
