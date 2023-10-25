import React from 'react'
import LikeIcon from '../assets/icons/LikeIcon.svg'
import { parseHtmlString } from '../utils/API_calls'
const ShowCommentReplies = ({replies}) => {
    return (
        <div className='py-3 flex flex-col w-full'>
            {
                replies.map((reply) => {
                    return (
                        <div key={reply.id} className='flex'>
                            <img src={reply.snippet.authorProfileImageUrl} alt='commenter' className='h-6 rounded-full' />
                            <div className='w-full pl-4 flex flex-col'>
                                <div>
                                    <span className='font-bold font-sans mr-2'>
                                        {reply.snippet.authorDisplayName}
                                    </span>
                                    <span className='text-sm text-gray-400'>
                                        {reply.snippet.publishDate}
                                    </span>
                                </div>
                                {parseHtmlString(reply.snippet.textDisplay)}
                                <div className='flex gap-8 py-3'>
                                    <div className='flex'>
                                        <img src={LikeIcon} alt='like icon' className='h-4' /><span className='mx-2 text-sm'>{reply.snippet.likeCount}</span>
                                    </div>
                                    <div className='flex'>
                                        <img src={LikeIcon} alt='like icon' className='h-4 rotate-180 mt-[1px]' /><span className='mx-2 text-sm'></span>
                                    </div>
                                    <p className='text-gray-400 text-xs mb-1'>REPLY </p>

                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ShowCommentReplies
