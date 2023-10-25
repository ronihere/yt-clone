import React, { useEffect, useState } from 'react'
import { GET_COMMENTS , GET_COMMENT_THREADS } from '../utils/Constants'
import IndividualComment from './IndividualComment';
import sortIcon from '../assets/icons/sortIcon.svg'
const CommentSection = ({ video }) => {
    const [comments, setComments] = useState([]);
    const [showReplies, setShowReplies] = useState(false);
    const fetchComments = async () => {
        try {
            // const response = await fetch(GET_COMMENTS(video));
            const response = await fetch(GET_COMMENT_THREADS(video));
            const jsonResponse = await response.json();
            setComments(jsonResponse.items);
        } catch (error) {
            console.log('error');
        }
    }
    useEffect(() => {
        fetchComments();
    }, [video]);
    
  return (
      <section>
          <div className='flex py-6'>
              <p className='font-sans'>
              {comments.length} Comments
              </p>
              <div className='flex ml-10 font-bold'>   
              <img src={sortIcon} alt='sort icon' className='mr-2' />SORT BY
              </div>
          </div>

          <div className='flex mb-8'>
              <img src='https://s3-alpha-sig.figma.com/img/177f/160a/7952386bb2224fea86799bdf8f4a8d55?Expires=1696809600&Signature=bkOrrpIEZvzjXMZWXLx3HRgAPOMmIK7G369mlxs8nFLj0kjpUaQfo7fpO~3v~LQAokz4mO3tXxXRI6TCNxVbgOjDfd8NbCOWMMxgqzIVDYS8HWMffiHGLX9y335tgyMbfiZXxcU8XWP5tNk0ouIuieSvjp5RzhyCN1myq50W892eEKfxS4I13kDPbAUM4nRqpTKje92PVPeJn~GLDefgy1Tv~fW2gZ0iX42M0JmXG2GSSUgK2hTK-29E6H0sH1NYVUq9j4ovlgX5AygyftwLmQSVW~mzGXCIXfcLjSf8zq0I9eqPM0zE5fTjVfc~FbuwhSN5vjdTiMZXe18Bxfy39w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' alt='user-img' className='h-10 rounded-full' />
              <div className='w-full pl-4 text-slate-700'>
                  Add a public comment...
              <div className='w-full h-[1px] border border-gray-900 border-opacity-80 mt-1'></div>
              </div>
          </div>
          {
              comments.map((comment) => {
                  return (< IndividualComment key={comment.id} props={comment} showReplies={showReplies} setShowReplies = {setShowReplies} />)
              })
          }
      
    </section>
  )
}

export default CommentSection
