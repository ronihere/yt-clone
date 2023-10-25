import React , { useEffect, useState } from "react";
import { fetchVideosData, getSearchedVideosList } from "../utils/API_calls";
import VideosCard from "./VideosCard";
import { Link } from "react-router-dom";
import { useButtonListContextHomePage } from "../Context/ButtonListContext";
import { useSelector } from "react-redux";
const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const isSideNavVisible = useSelector(state => state.app.isMenuOpen);
    const { topic } = useButtonListContextHomePage();
    useEffect(() => {
        fetchVideos();
    }, [topic]);
    const fetchVideos = async () => {
        if (!topic) {
            const data = await fetchVideosData();
            setVideos(data);
        }
        else {
            const data =await getSearchedVideosList(topic);
            setVideos(data);
        }
    }
    if (videos?.length === 0) return null;
    return (
        <div className="flex flex-wrap h-[100vh] max-w-[100vw] overflow-y-auto ">
            {videos.map((video) => {
                return (
                    <div key={typeof (video.id) === 'object' ? video.id.videoId : video.id} className={`${!isSideNavVisible ? 'w-[32rem]' : 'w-[27rem]'}`} >
                        <Link to={`/watch?v=${typeof(video.id) === 'object' ? video.id.videoId : video.id}`}>
                            <VideosCard info={video} />
                        </Link>
                    </div>
                )
            })}

        </div>
    )
}
export default VideoContainer;