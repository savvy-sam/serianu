import React from 'react'

const DataSync = ({ sync, status, update, sync_success }) => {
    return (
        <div className='bg-[#E0E6EB] flex justify-between p-[20px] mb-[10px]'>
            <div>
                <span className='text-black/60'>Last Sync: </span>
                <span>{sync}</span>
            </div>
            <div>
                <span className='text-black/60'>Status: </span>
                <span>{status}</span>
            </div>
            <div>
                <span className='text-black/60'>Update: </span>
                <span>{update}</span>
            </div>
            <div>
                <span className='text-black/60'>Sync Success: </span>
                <span>{sync_success}</span>
            </div>
        </div>
    )
}

export default DataSync