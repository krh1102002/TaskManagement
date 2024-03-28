import React from 'react'
import ReactLoading from 'react-loading'

const Loading = () => {
    return (
        <div className='h-full w-full flex justify-center items-center'>
            <ReactLoading type='spin' color={'blue'} height={67} width={35} />
        </div>
    )
}

export default Loading