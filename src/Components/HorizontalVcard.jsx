import moment from 'moment';
import { FaUserCircle } from "react-icons/fa"
import ThreeDots from '../assets/icons/ThreeDots.svg'
import React from 'react';

const HorizontalVcard = ({ snippet, id  }) => {
    const { videoId } = id;
    const { title, thumbnails, channelTitle, description, publishTime } = snippet;
  const publishDate = moment(publishTime, "YYYYMMDD").fromNow()
  
  return (
    <div className='w-fit p-1 flex bg-black shadow-lg'>
          <img alt='thumbnail' src={thumbnails.medium.url} className='rounded-lg object-contain' />
          <div className='flex flex-col px-4'>
          <div className=' font-semibold text-xl font-sans'>{title}</div>
        <p className='font-semibold text-sm text-gray-400 mt-2'>
        {publishDate}
        </p>
        <div className='flex mt-2'><FaUserCircle size={20} /> <span className='text-gray-400 font-sm font-sans ml-2 font-bold'>{channelTitle} </span></div>
      <div className='text-xs font-extralight text-gray-400 mt-5'>
        {description}
      </div>
      </div>
      <div className='absolute top-5 right-0 '>
        <img src={ThreeDots} alt='threeDots' className='rotate-90 hover:bg-gray-400 p-3 rounded-full'/>
      </div>
    </div>
  )
}

export default HorizontalVcard
