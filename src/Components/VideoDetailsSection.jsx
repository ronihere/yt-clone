import React, { useState } from 'react'
import { addCommasToNumber, getSubScribers } from '../utils/Constants'
import LikeIcon from '../assets/icons/LikeIcon.svg'
import ShareIcon from '../assets/icons/Share.svg'
import SaveIcon from '../assets/icons/SaveIcon.svg'
import DownArrow from '../assets/icons/LeftArrow.svg' 
import moment from 'moment'

const VideoDetailsSection = ({ snippet, statistics }) => {
    const [showDescription, setShowDescription] = useState(false);
  return (
    <section className='border-y-[1px] border-gray-900 h-fit py-6 w-full'>
          <p className='font-sans leading-10 text-xl'>{snippet?.title}</p>
          <div className='flex justify-between mt-4'>
              <p className='font-semibold text-gray-400'>{addCommasToNumber(statistics?.viewCount)} views <span className='font-extrabold'> . </span>{moment(snippet.publishedAt).format("MMM D, YYYY") }</p>
              <div className='flex'>
                  <div className='mr-8 flex'>
                    <img src={LikeIcon} className='h-6 mr-3' />{getSubScribers(statistics.likeCount)}
                  </div>
                  <div className='mr-8 flex'>
                    <img src={LikeIcon} className='h-6 mr-3 rotate-180' />{getSubScribers(statistics.favoriteCount)}
                  </div>
                  <div className='mr-8 flex '>
                      <img src={ShareIcon} className='h-6 mr-3' />
                      <span className='font-semibold'>
                      SHARE
                      </span>
                  </div>
                  <div className='mr-8 flex font-semibold items-center'>
                      <img src={SaveIcon} className='h-4 mr-3 text-center' />
                      <span className='font-semibold'>
                      SAVE
                      </span>
                  </div>
                  <div className='mr-8 flex items-center'>
                      <img src={DownArrow} className={`h-4 mr-3 ${showDescription ? '-rotate-90' : 'rotate-90' } text-white cursor-pointer`} onClick={()=>setShowDescription(prev=>!prev)} />
                  </div>
              </div>
          </div>
          {
              showDescription &&
              <p className='text-sm mt-6 text-gray-400'>{ snippet.description }</p>
          }
    </section>
  )
}

export default VideoDetailsSection
