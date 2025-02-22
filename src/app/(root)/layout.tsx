
import React from 'react'
import Sidebar from '../../components/shared/Sidebar'
import MobileNav from '../../components/shared/MobileNav'

const Layout=({children}:{children:React.ReactNode}) =>{
  return (
    <main className='root'>
      <Sidebar></Sidebar>
      <MobileNav></MobileNav>
   <div className='root-conainer'>
    <div className='wrapper'>
        {children}
    </div>
   </div>
    </main>
  )
}

export default Layout