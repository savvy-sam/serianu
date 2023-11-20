import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = []

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className='flex items-center justify-between border-t border-gray-200 bg-white px-2 py-1 sm:px-6 rounded-md'>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div className=' invisible'>
          <p className='text-sm text-gray-700'>
            Showing <span className='font-medium'>{currentPage}</span> to{' '}
            <span className='font-medium'>
              {Math.min(currentPage * 7, pageNumbers.length * 7)}
            </span>{' '}
            of <span className='font-medium'>{totalPages}</span> results
          </p>
        </div>
        <div>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'
          >
            <a
              href='#'
              onClick={goToPreviousPage}
              className={`relative inline-flex items-center ${
                currentPage === 1
                  ? 'text-gray-400 pointer-events-none'
                  : 'text-gray-900'
              } rounded-l-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0`}
            >
              <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              <span>Previous</span>
            </a>
            {pageNumbers.map((number) => (
              <a
                key={number}
                href='#'
                onClick={() => onPageChange(number)}
                className={`relative inline-flex items-center ${
                  currentPage === number
                    ? 'bg-indigo-600 text-white focus:outline-offset-2 focus:outline-indigo-600'
                    : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0'
                } px-4 py-2 text-sm font-semibold`}
              >
                {number}
              </a>
            ))}
            <a
              href='#'
              onClick={goToNextPage}
              className={`relative inline-flex items-center ${
                currentPage === totalPages
                  ? 'text-gray-400 pointer-events-none'
                  : 'text-gray-900'
              } rounded-r-md px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0`}
            >
              <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              <span>Next</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Pagination
