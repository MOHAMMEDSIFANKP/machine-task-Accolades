import React from 'react'
import BgImage from '../assets/footer/bgimage.png'
import Logo from '../assets/logo/logo.png'
import { Card } from '@material-tailwind/react'

function Footer() {
  return (
    <div className='h-screen grid grid-rows-[10rem,1px,1fr]'>
      <div className='flex justify-center items-center'>
        <img src={Logo} className='h-16 w-64 ' alt="" />
      </div>
      <hr className='mx-auto container border border-gray-900' />
      <div className='mx-auto container grid grid-rows-[1fr,8rem,12rem]  bg-no-repeat bg-contain bg-center' style={{ backgroundImage: `url(${BgImage})` }}>
        <div className='grid grid-cols-[1fr,5rem,1fr] gap-8'>
          <Card className='bg-gray-900 bg-opacity-50 grid grid-rows-[1fr,1fr,5rem,8rem] border border-gray-800 my-10' style={{ borderRadius: '3rem' }}>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
          </Card>

          <Card className='bg-gray-900 bg-opacity-50  border border-gray-800 my-10' style={{ borderRadius: '3rem' }}>
            fgds
          </Card>
          <Card className='bg-gray-900 bg-opacity-50  border border-gray-800 my-10' style={{ borderRadius: '3rem' }}>
            fgds
          </Card>
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  )
}

export default Footer