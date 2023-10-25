import React from 'react'
import { getSubScribers } from '../utils/Constants'

const SubscribeChannelSection = ({ snippet, statistics }) => {

    return (
        <section className=' border-b-[1px] border-gray-900  py-4 w-full'>
            <div className='flex justify-between py-2 h-16'>
                <div className='flex h-full'>
                    <img src={snippet.thumbnails?.medium?.url} className='h-[4rem] rounded-full' alt='channel_default_image' />
                    <div className='flex flex-col mx-4 mt-6 justify-center '>
                        <p className='font-sans '>{snippet.title}</p>
                        <p className='font-sans text-gray-400'>{getSubScribers(statistics.subscriberCount)} <span className='text-sm'>subscribers</span></p>
                    </div>
                </div>
                <button className='bg-red-800 h-full px-6 text-center font-sans font-semibold rounded-lg'>
                    SUBSCRIBE
                </button>
            </div>
            <p className='p-2 text-gray-400 text-sm font-sans my-4'>
                {snippet.description}
            </p>
        </section>
    )
}

export default SubscribeChannelSection
