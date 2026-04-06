import React from 'react'
import { FidgetSpinner } from 'react-loader-spinner'

export default function loading() {
  return (
    <div className='flex items-center justify-center h-screen'>


<FidgetSpinner
visible={true}
height="100"
width="200"
ariaLabel="fidget-spinner-loading"
wrapperStyle={{}}
wrapperClass="fidget-spinner-wrapper"
/>

    </div>
  )
}
