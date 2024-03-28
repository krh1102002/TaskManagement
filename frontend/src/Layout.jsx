import React from 'react'
import Navbar from './components/Navbar'

const Layout = (Componet) => ({ ...props }) => {
    return (
        <div className='flex flex-col h-full'>
            <Navbar />
            <Componet {...props} />
        </div>
    )
}

export default Layout