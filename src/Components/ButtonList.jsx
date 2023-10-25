import Button from './Button'
import { listOfButtons } from "../utils/Constants";
import { useSearchParams } from 'react-router-dom';
import { useButtonListContextHomePage } from '../Context/ButtonListContext';
import React from 'react';

const ButtonList = () => {
    const { topic } = useButtonListContextHomePage();
    const [searchParams] = useSearchParams();
    let searchedParams = searchParams.get('search_query');
    if (!searchedParams) searchedParams = topic;
    return (
        <div className="mr-10 h-16 w-[100vw] flex overflow-scroll">
            {listOfButtons.map((ele, index) => {
                return (
                    < Button key={index} name={ele} selected={searchedParams===null ? 'All' : searchedParams} ></Button>
                    )
                
            })}
        </div>
    )
}
export default ButtonList;