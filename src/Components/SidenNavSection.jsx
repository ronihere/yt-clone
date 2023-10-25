import React from 'react'
const SidenNavSection = (subsectionList) => {
  const Entries = Object.entries(subsectionList);
  return (
    <section className='w-full'>
      {
        Entries.map(ele =>
          <div key={ele[1].text}>
            <div className='flex items-center hover:bg-gray-800 rounded-2xl cursor-pointer'>
              <img src={ele[1].icon} alt={ele[1].text} className='py-4 px-6' />
              <p>{ele[1].text}</p>
            </div>
          </div>)
      }
    </section>
  )
}

export default SidenNavSection
