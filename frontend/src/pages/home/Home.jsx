import React from 'react'
import Sidebar from '../../components/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-1g overflow-hidden bg-gray-400 bg-clip-padding
     backdrop-filter backdrop-blur-1g bg-opacity-0'>
      <Sidebar />
    <MessageContainer />
    </div>
  )
}

export default Home
