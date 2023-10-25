import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { togglemenu } from '../utils/appSlice';
import { SEARCH } from '../utils/Constants';
import { setSearchListStore, searchQueryParam } from '../utils/searchSlice';
import {  useNavigate } from 'react-router-dom';
import { BsSearch } from "react-icons/bs"
import { FaUserCircle } from "react-icons/fa"
import HAMBURGER_icon from '../assets/icons/Grouphamburger_icon.png'
import YT_icon from '../assets/icons/YT_icon.svg'
import MIC_icon from '../assets/icons/mic.svg'
import NOTIFICATION_icon from '../assets/icons/NotificationsIcon.svg'
import CREATE_icon from '../assets/icons/CreateIcon.svg'
import APPS_icon from '../assets/icons/AppsIcon.svg'
const Header = () => {
    const navigate = useNavigate();
    const searchStringFromStore = useSelector(state => state.search)
    const [showSearchList, setShowSearchList] = useState(false);
    const [searchString, setSearchString] = useState('');
    const [searchList, setSearchList] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {  
    },[showSearchList])
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (searchString.length > 0) fetchSearchList();
            else setSearchList([]);
        }, 300);
        return () => clearTimeout(timeoutId);
    }, [searchString])

    const toggleMenuHandler = () => {
        dispatch(togglemenu());
    }


    const fetchSearchList = async () => {
        try {
            if (searchStringFromStore[searchString]) {
                setSearchList(searchStringFromStore[searchString])
                return;
            }
            const data = await fetch(SEARCH(searchString));
            const newdata = await data.json();
            setSearchList(newdata[1]);
            dispatch(setSearchListStore({
                [searchString]: newdata[1],
            }))
            setShowSearchList(true);
        }
        catch (err) {
            console.log('ERROR', err);
        }
    }

    const navigateToSearchPage = (navigateTo) => {
        setSearchString(navigateTo);
        dispatch(searchQueryParam({ navigateTo }));
        navigate(`/results?search_query=${navigateTo}`)
    }

    return (


        <section className='flex mx-4 py-2 h-[7vh] justify-between sticky bg-black top-0'>
            <div className='flex w-[224px]'>
                <div className='flex p-[0.5rem] gap-[0.625rem]'>

                    <img src={HAMBURGER_icon} alt='Hamburger img' className='h-[1.5rem] w-[1.5rem] py-[0.3rem] px-[0.1rem] cursor-pointer' onClick={() => toggleMenuHandler()} />
                </div>
                <div className='flex py-[0.5rem] px-[0.9rem]'>
                    <img src={YT_icon} alt='yt_icon' className='h-[1.5rem] w-[8rem] cursor-pointer' onClick={() => navigate('/')} />
                </div>

            </div>
            <div className='flex w-[36rem] mr-14 relative'>
                <input className='border border-gray-900 p-3 w-full rounded-l-full focus:outline-none bg-black' placeholder='Search' value={searchString} tabIndex={0} onBlur={()=>setShowSearchList(false)} onChange={(event) => setSearchString(event.target.value)} ></input>
                <button className='rounded-r-full bg-gray-800 p-3' onClick={() => {
                    setShowSearchList(false);
                    navigateToSearchPage(searchString)
                }} ><BsSearch /></button>
                <div className='flex items-center justify-center px-4 py-2 rounded-full hover:bg-gray-800'>
                    <img src={MIC_icon} alt='mic' className='h-[24px] w-[18px] cursor-pointer' />
                </div>
                {
searchList?.length > 0 && showSearchList &&
                <div className='rounded-xl absolute top-12 py-4 bg-gray-800 w-full h-fit text-white' >
                    
                    { searchList.map((ele) => {
                        return (<p key={ele} className='p-2 w-full text-white shadow-sm' onClick={() => navigateToSearchPage(ele)}
                        >{ele}</p>)
                    })}
           </div>
                }

            </div>
            <div className='flex items-center justify-between w-48 px-4'>
                <img src={CREATE_icon} />
                <img src={APPS_icon} />
                <img src={NOTIFICATION_icon} />
                <FaUserCircle size={20} />

            </div>

        </section>
    )
}

export default Header;
