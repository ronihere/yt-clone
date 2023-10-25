import React, { useEffect } from 'react'
import { searchQueryParam } from '../utils/searchSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getSearchedVideosList } from '../utils/API_calls';
import { useButtonListContextHomePage } from '../Context/ButtonListContext';

const Button = ({ name, selected }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {topic , setTopic} = useButtonListContextHomePage();
  const navigateToSearchPage = (ele) => {
    if (window.location.href.includes('results') && name!=='All') {
      dispatch(searchQueryParam({ ele }));
      setTopic(null);
      navigate(`/results?search_query=${ele}`)
    } else {
      setTopic(ele === 'All' ? null : ele); 
    }
  }
  return (
    selected !== name
      ?
      <button className='py-1 px-4 m-2 text-white bg-gray-800 rounded-lg w-fit whitespace-nowrap'  onClick={() => navigateToSearchPage(name)}>{name}</button>
      :
      <button className='py-1 px-4 m-2 text-gray-800 bg-gray-300 rounded-lg w-fit whitespace-nowrap' onClick={() => navigateToSearchPage(name)} >{name}</button>

  )
}

export default Button
