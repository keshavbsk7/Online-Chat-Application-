import React from 'react'
import Conversations from './sidebar/Conversations'
import Searchinput from './sidebar/Searchinput'
import LogoutButton from './sidebar/LogoutButton'
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <Searchinput />
      <div className='divider px-3'>
        </div>
        <Conversations/>
        <LogoutButton /> 
       
      </div>
    
  );
}
 


export default Sidebar


/*
import React from 'react'
import Conversations from './sidebar/Conversations'
import Searchinput from './sidebar/Searchinput'
import LogoutButton from './sidebar/LogoutButton'
const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <Searchinput />
      <div className='divider px-3'>
        </div>
        <Conversations/>
        <LogoutButton /> 
       
      </div>
    
  );
}
 


export default Sidebar
*/
