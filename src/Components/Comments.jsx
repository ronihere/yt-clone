import React from 'react'
import { commentData } from '../utils/Constants'
import React from 'react';

const Comment = ({ id, text, name, children }) => {
    return (
        <div className='flex my-8 shadow-sm bg-gray-100'>
                <img className='h-12 w-12' alt='user' src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" />
            <div className='flex flex-col'>
                <div className='font-bold'>{name}</div>
                <div>{text}</div>
            </div>
    </div>
    )
}
const CommentList = ({ comments }) => {
    return (
        comments.map((comment) => {
            return(
            <div key={comment.id} className='border border-l-2'>
                <Comment  {...comment} />
                 <div className='pl-10 '>
                    <CommentList comments={comment.children} />
                </div> 
             </div>
        )})
    )
}
const Comments = () => {
  return (
      <div>
          <div className='text-2xl font-bold'>Comments:</div>
          <CommentList comments={commentData}/>
    </div>
  )
}

export default Comments
