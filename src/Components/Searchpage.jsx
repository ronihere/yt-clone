import React, { useEffect, useState } from "react";
import ButtonList from './ButtonList'
import { Link, useSearchParams } from "react-router-dom";
import HorizontalVcard from './HorizontalVcard';
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getSearchedVideosList } from '../utils/API_calls';

const SearchPage = () => {
    const query = useSelector(state => state.search.queryParam);
    const [searchParams] = useSearchParams();
    const searchedParams = searchParams.get('search_query');
    const [videosList, setVideosList] = useState([]);
    useEffect(() => {
        getVideosOnSearch();
    }, [query])
    const getVideosOnSearch = async () => {
        const data = await getSearchedVideosList(searchedParams);
        setVideosList(data)
    }
    if (!videosList.length) return null;
    return (
        <div>
            <ButtonList />
            <div className="bg-black h-screen w-9/12 overflow-y-auto">
                {
                    videosList.map((video, index) =>
                        <Link to={`/watch?v=${video.id?.videoId}`}>
                            <HorizontalVcard key={index} {...video} />
                        </Link>
                    )
                }
            </div>
        </div>

    )
}
export default SearchPage;