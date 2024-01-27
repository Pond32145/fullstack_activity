import React from 'react'
import ConnectWeb3 from '../components/ConnectWeb3'
import AddActivity from '../components/addActivityBlock'

function Wallet() {
    return (
        <div className='flex justify-center h-screen'>
            <div className='md:w-3/4 mx-5 md:p-5 h-2/4 bg-slate-200 shadow-lg rounded-lg'>
                <ConnectWeb3 />
                {/* <AddActivity /> */}
            </div>
        </div>

    )
}

export default Wallet