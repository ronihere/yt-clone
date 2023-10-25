import React, { useEffect, useState } from 'react'
import { fetchVideosData } from '../utils/API_calls'
import RightSideVideoCard from './RightSideVideoCard'
import { Link } from 'react-router-dom'

const WatchPageRightView = () => {
    const [videos , setVideos] = useState([])
    useEffect(() => {
        fetchVideos();
    },[])
    const fetchVideos = async () => {
        setVideos(await fetchVideosData())
    }
  return (
    <section>
          {
              videos.map((video) => {
                  return (
                  <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <RightSideVideoCard  {...video}/>
                      </Link>
                  )
              })
      }
    </section>
  )
}

export default WatchPageRightView
