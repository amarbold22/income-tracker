import Layout from '@/components/Layout'
import React from 'react'
import Currency from '@/components/Currency'

const Step1 = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-white gap-16'>
        <Layout/> 
        <Currency/>
    </div>
  )
}

export default Step1