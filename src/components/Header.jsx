import React from 'react'

export default function Header() {
  return (
    <header className='w-full flex items-center justify-between gap-4 p-4 bg-lime-800'>
        <h1 className='font-medium'><span className='text-white'>Graine de </span><span className='text-green-200 bold'>Champion</span></h1>
    </header>
  )
}