import React from 'react'
import { useSelector } from 'react-redux/es'
import { sideNavData } from '../utils/Constants'
import SidenNavSection from './SidenNavSection'
const SideNav = () => {
    const isSideNavVisible = useSelector(state => state.app.isMenuOpen);
    const navSections = Object.keys(sideNavData);
    return (
      <>
            {
                isSideNavVisible ?
                        <div className='min-w-[240px] h-[100vh] overflow-scroll'>
                            {
                            navSections.map((sec, index) => <div key={index}>
                                <SidenNavSection {...sideNavData[sec]} />
                                <div className='w-full h-[1px] bg-gray-700'></div>
                                </div>)
                           }
                        </div>
                    :
                    null
            }

    </>
    )
}

export default SideNav
