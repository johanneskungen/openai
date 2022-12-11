import Link from 'next/link'
import React from 'react'
import Facebook from '../../assets/facebooklogo.svg'
import Tiktok from '../../assets/tiktoklogo.svg'
import Twitter from '../../assets/twitter.svg'

function page() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center p-24 pb-8'>Who are JeConsulting?</h1>
      <p className=' md:w-[45rem] mx-auto text-lg'>JeConsulting helps customer to take their million dollar start-up idea from plans to a fully working application. Our team consists of young, driven and talented people. The business is based in Sweden and started in the end of 2022. It all started when the founder was selling website on Fiverr and realised that he could start a business and do the same thing as he did on Fiverr.</p>
      <p className='text-lg pt-6 md:w-[45rem] mx-auto'>For pricing and more detailed info about our different services, please contact us by clicking this link <Link className='text-[#ff3471]' href={'/#contact'}>here.</Link></p>
      <div className='flex md:w-[45rem] mx-auto mt-6'>
      <Facebook/>
      
      <Link href={'https://www.tiktok.com/@jeconsulting_'}><Tiktok /></Link>
      <Twitter />
      </div>
    </div>
  )
}

export default page