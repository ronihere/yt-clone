import Explore_icon from '../assets/icons/Explore_icon.svg'
import History_icon from '../assets/icons/History_icon.svg'
import Library_icon from '../assets/icons/Library_icon.svg'
import Watchlater_icon from '../assets/icons/Watchlater_icon.svg'
import Subscription_icon from '../assets/icons/Subscription_icon.svg'
import Likedvideos_icon from '../assets/icons/Likedvideos_icon.svg'
import Home_icon from '../assets/icons/Home_icon.svg'
import Yourvideos_icon from '../assets/icons/Yourvideos_icon.svg'

// const API_KEY = 'AIzaSyBYdglZvX7ct9Wp8IjvvCHqj1Rdlj71hzY';
const API_KEY='AIzaSyDHeBrlVJB_DY6k6p2NMKzWlWxzjUvdMEE'
export const YT_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=${API_KEY}`;

export const GET_COMMENTS = (video_id) => (`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${video_id}&key=AIzaSyDHeBrlVJB_DY6k6p2NMKzWlWxzjUvdMEE`);
export const GET_COMMENT_THREADS = (videoId)=>`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
export const GET_VIDEOS_BY_QUERY = (query) => `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&order=viewCount&type=video&videoDuration=medium&q=${query}&key=${API_KEY}`
export const SEARCH = (q) => `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${q}`

export const commentData = [{
    "id": 0,
    name:'no name',
    text: 'Comment 0',
    children:[]
},
  {
    "id": 1,
    name:'no name',
    "text": "Comment 1",
    "children": [
      {
        "id": 2,
        name:'no name',
        "text": "Reply to Comment 1",
        "children": []
      },
      {
        "id": 3,
        name:'no name',
        "text": "Another Reply to Comment 1",
        "children": []
      }
    ]
  },
  {
    "id": 4,
    name:'no name',
    "text": "Comment 2",
    "children": [
      {
        "id": 5,
        name:'no name',
        "text": "Reply to Comment 2",
        "children": [
          {
            "id": 6,
            name:'no name',
            "text": "Nested Reply 1",
            "children": []
          },
          {
            "id": 7,
            name:'no name',
            "text": "Nested Reply 2",
            "children": []
          }
        ]
        },
        {
            "id": 8,
    name:'no name',
    "text": "Comment 2",
            "children": [
        {
            "id": 9,
            name:'no name',
            "text": "Nested Reply 1",
            "children": []
          },
    ]
        }
    ]
  }
]
export const GET_VIDEOS_DATA = (videoId)=> `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}` //for watch page subscribe ke uparwala section

export const CHANNEL_DETAILS = (channellId)=>`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channellId}&key=${API_KEY}`

export const listOfButtons = ['All', 'Messi', "BB Ki Vines", 'FC Barcelona', 'Pedri', 'DP', 'Gaming', 'Pubg', 'Songs', 'Valentines', 'Love', 'Food', 'Prank', 'ISRO', 'Nasa', 'R15','ReactJS','NextJS','Node']

export const sideNavData = {
  firstsection: [
    {
      icon: Home_icon,
      text: "Home"
    },
    {
      icon: Explore_icon,
      text: "Explore"
    },
    {
      icon: Subscription_icon,
      text: "Subcriptions"
    },
  ],
  secondsection: [
    {
      icon: Library_icon,
      text: "Library"
    },
    {
      icon: History_icon,
      text: "History"
    },
    {
      icon: Yourvideos_icon,
      text: "Your Videos"
    },
    {
      icon: Watchlater_icon,
      text: "Watch later"
    },
    {
      icon: Likedvideos_icon,
      text: "Liked Videos"
    },
  ],
  thirdsection: [
    {
      icon: Library_icon,
      text: "Library"
    },
    {
      icon: History_icon,
      text: "History"
    },
    {
      icon: Yourvideos_icon,
      text: "Your Videos"
    },
    {
      icon: Watchlater_icon,
      text: "Watch later"
    },
    {
      icon: Likedvideos_icon,
      text: "Liked Videos"
    },
  ],
  forthsection: [
    {
      icon: Library_icon,
      text: "Library"
    },
    {
      icon: History_icon,
      text: "History"
    },
    {
      icon: Yourvideos_icon,
      text: "Your Videos"
    },
    {
      icon: Watchlater_icon,
      text: "Watch later"
    },
    {
      icon: Likedvideos_icon,
      text: "Liked Videos"
    },
  ]
}


 export const getSubScribers = (subCount) => {
    if (subCount > 1000000) return `${(subCount / 1000000).toFixed(1)}M`
    else if (subCount > 1000) return `${(subCount / 1000).toFixed(1)}K`
    else return subCount;
}
  

export const addCommasToNumber =(number) =>{
  const numberString = number.toString();

  // Use regular expression to add commas
  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedNumber;

}


export const videoDuration = (durationString) => {
  // Input duration string


// Parse the duration string
const duration = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/.exec(durationString);

// Extract the hours, minutes, and seconds
const hours = duration[1] ? parseInt(duration[1], 10) : 0;
const minutes = duration[2] ? parseInt(duration[2], 10) : 0;
const seconds = duration[3] ? parseInt(duration[3], 10) : 0;

// Format it as "9:54:11"
const formattedDuration = hours >0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`; 

// Display it in your front-end
return (formattedDuration); // Output will be "9:54"

}
