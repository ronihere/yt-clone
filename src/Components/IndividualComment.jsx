import React, { useState } from 'react'
import moment from 'moment/moment';
import Triangle from '../assets/icons/Triangle.svg'
import LikeIcon from '../assets/icons/LikeIcon.svg'
import ShowCommentReplies from './showCommentReplies';
import { parseHtmlString } from '../utils/API_calls'
function IndividualComment({props , showReplies , setShowReplies}) {
    
    const { totalReplyCount, channelId } = props?.snippet;
    const { textDisplay, textOriginal, authorDisplayName, authorProfileImageUrl, authorChannelUrl, likeCount, publishedAt, updatedAt } = props?.snippet?.topLevelComment?.snippet;
    const publishDate = moment(updatedAt, "YYYYMMDD").fromNow()
    const showRepliesHandler = () => {
        setShowReplies(prev => !prev);
    }
  return (
      <div className='py-3 flex w-full'>
          <img src={authorProfileImageUrl} alt='commenter Image' className='h-10 rounded-full'/>
          <div className='w-full pl-4 flex flex-col'>
              <div>
                  <span className='font-bold font-sans mr-2'>
                  {authorDisplayName}
              </span>
                  <span className='text-sm text-gray-400'>
                      {publishDate}
                  </span>
              </div>
              {parseHtmlString(textDisplay)}
              <div className='flex gap-8 p-3'>
                  <div className='flex'>    
                      <img src={LikeIcon} alt='like icon' className='h-4' /><span className='mx-2 text-sm'>{likeCount }</span>
                  </div>
                  <div className='flex'>    
                      <img src={LikeIcon} alt='like icon' className='h-4 rotate-180 mt-[1px]' /><span className='mx-2 text-sm'>{totalReplyCount }</span>
                  </div>
                  <p className='text-gray-400 text-xs mb-1'>REPLY </p>
                  
              </div>
              {
                  totalReplyCount>0 &&
                  <div className='relative'>
                        <div className='flex text-sm items-center text-blue-500 font-bold  cursor-pointer' onClick={()=>showRepliesHandler()}>
                          <img src={Triangle} alt='triangle' className='mr-2 h-2 rotate-90' />{`${totalReplyCount}${totalReplyCount>1 ? ' replies' : ' reply'}`}
                          </div>
                          {
                              showReplies &&
                              
                                    <ShowCommentReplies replies={props.replies.comments}/>
                            
                          }
              </div>
              }
          </div>
      </div>
  )
}

export default IndividualComment
