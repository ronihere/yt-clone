import React, { useEffect, useState } from 'react'
import { closemenu } from '../utils/appSlice';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
// import Comments from './Comments';
import CommentSection from './CommentSection';
import SubscribeChannelSection from './SubscribeChannelSection';
import VideoDetailsSection from './VideoDetailsSection';
import WatchPageRightView from './WatchPageRightView';
import { fetchWatchPageData } from '../utils/API_calls';
const WatchPage = () => {
  const dispatch = useDispatch();
  const [videoData, setVideoData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  useEffect(() => {
    dispatch(closemenu());
    fetchData();
  }, [])
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  const fetchData = async () => {
    const { data, error } = await fetchWatchPageData(videoId);
    if (data) {
      const { channel, video } = data;
      setChannelData(channel);
      setVideoData(video);
    } else {
      console.log(error);
    }
  }

  return (
    <section className='px-6 py-4 flex'>
      <div className='w-2/3 flex flex-col h-[100vh] overflow-y-scroll'>
        <div className=''>
          <iframe className='w-full h-[60vh]' src={`https://www.youtube-nocookie.com/embed/${videoId}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='py-2 w-full pb-6'>
          {
            channelData && videoData &&
            <>
              <VideoDetailsSection {...videoData} />
              <SubscribeChannelSection {...channelData} />
              <CommentSection video={videoId} />
            </>
          }
          {/* <Comments/> */}
        </div>
      </div>
      <div className='w-1/3 pl-2 h-[100vh] pb-6 overflow-y-auto'>
        <WatchPageRightView />
      </div>
    </section>
  )
}

export default WatchPage;