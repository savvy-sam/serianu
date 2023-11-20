import React from 'react'

const ReusableSpinner = () => {
  return (
    <div class="flex items-center justify-center w-full h-full">
    <div class="w-24 h-24 border-l-2 border-gray-900 rounded-full animate-spin"></div>
    </div>
  )
}

export default ReusableSpinner