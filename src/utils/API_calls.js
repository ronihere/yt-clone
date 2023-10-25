import { CHANNEL_DETAILS, GET_VIDEOS_DATA, YT_VIDEOS_API } from "../utils/Constants";
import { GET_VIDEOS_BY_QUERY } from '../utils/Constants';

export const parseHtmlString = (htmlString) => {
  return htmlString
  // return ReactHtmlParser(htmlString);
}
export const fetchVideosData = async () => {
        const data = await fetch(YT_VIDEOS_API);
        const json = await data.json();
    return json.items;
}
    
export const fetchVideoData = async(videoId) => {
  const videoDetailsResponse = await fetch(GET_VIDEOS_DATA(videoId));
  const videoDetails = await videoDetailsResponse.json();
  return videoDetails;
}

export const fetchChannelData = async (channelId) => {
  const channelDescription = await fetch(CHANNEL_DETAILS(channelId));
  const channelDetails = await channelDescription.json();
  return channelDetails;
}
export const fetchWatchPageData = async (videoId) => {
    try {
      //fetch videoDetails
      const videoDetails = await fetchVideoData(videoId);
      const channelDetails = await fetchChannelData(videoDetails?.items[0]?.snippet?.channelId);
        return {
            data: {     
                video: videoDetails.items[0],
                channel : channelDetails.items[0]
            },
            error:null,
        }
    } catch (error) {
      return {error, data:null}
    }
}
  
export const getSearchedVideosList = (searchedParams) => {
  return fetch(GET_VIDEOS_BY_QUERY(searchedParams))
    .then(data => data.json())
    .then((data) => data.items);
    }