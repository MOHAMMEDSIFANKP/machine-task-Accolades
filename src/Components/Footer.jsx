import React from 'react'
import BgImage from '../assets/footer/bgimage.png'
import Logo from '../assets/logo/logo.png'
import { Card } from '@material-tailwind/react'

import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { MdCopyright } from "react-icons/md";

function Footer() {
  return (
    <div className='h-screen grid grid-rows-[10rem,1px,1fr]'>
      <div className='flex justify-center items-center'>
        <img src={Logo} className='h-16 w-64 ' alt="" />
      </div>
      <hr className='mx-auto container border border-gray-900' />
      <div className='mx-auto container grid grid-rows-[1fr,6rem,12rem]  bg-no-repeat bg-contain bg-center' style={{ backgroundImage: `url(${BgImage})` }}>
        <div className='grid grid-cols-[1fr,5rem,1fr] gap-8'>
          <Card className='bg-gray-900 bg-opacity-50 border grid grid-cols-[5rem,1fr] border-gray-800 my-10 rounded-[2rem]'>
            <div className='text-red-500 ps-7'>
              <IoLocationSharp className='h-7 w-7 mt-[7rem]' />
              <MdEmail className='h-6 w-6 mt-[5.3rem]' />
              <FaPhoneAlt className='h-6 w-6 mt-[2rem]' />

            </div>
            <div className='text-xl text-white opacity-90 me-5 leading-8'>
              <p className='pt-10'>NAVI MUMBAI </p>
              <p className='pt-8'>National Builders Office, Sea  Queen Heritage Buiding, 1st Floor, Plot No, Sector 18, Palm Beach Service Road, Sanpada, Navi Mumbai-400705 </p>
              <p className='pt-5'>marketingmumbai@nationalbuilders.in</p>
              <p className='pt-5'>+ 9122 49639871 /72/ 73, 2249737814 +91 9223300950 / 9223300960, +91 9004091082</p>
            </div>

          </Card>

          <Card className='bg-gray-900 bg-opacity-50  border flex justify-center items-center border-gray-800 my-10 rounded-[2rem]'>
            <FaFacebook className='w-11 h-11 text-red-500 m-5 bg-black p-3 rounded-full ' />
            <GrInstagram className='w-11 h-11 text-red-500 m-5 bg-black p-3 rounded-full ' />
            <FaLinkedin className='w-11 h-11 text-red-500 m-5 bg-black p-3 rounded-full ' />
            <IoLogoYoutube className='w-11 h-11 text-red-500 m-5 bg-black p-3 rounded-full ' />


          </Card>
          <Card className='bg-gray-900 bg-opacity-50 border grid grid-cols-[5rem,1fr] border-gray-800 my-10 rounded-[2rem]'>
            <div className='text-red-500 ps-7'>
              <IoLocationSharp className='h-7 w-7 mt-[7rem]' />
              <MdEmail className='h-6 w-6 mt-[4rem]' />
              <FaPhoneAlt className='h-6 w-6 mt-[2rem]' />

            </div>
            <div className='text-xl text-white opacity-90 me-5 leading-8'>
              <p className='pt-10'>KOCHI </p>
              <p className='pt-8'>National Pearl Star, 5Th Floor, High School Jn.Edappally, Kochi, Kerala - 682024 </p>
              <p className='pt-9'>marketingkochi@nationalbuilders.in</p>
              <p className='pt-5'>+91 484 2340781, 2333391, +91 484 2534558</p>
            </div>

          </Card>
        </div>
        <Card className='rounded-[2rem] grid grid-cols-[1fr,1fr,1fr,1fr,1fr,1fr,9rem,1fr,1fr] pe-8 bg-opacity-50 text-white font-bold text-xl bg-gray-900 border border-gray-800'>
          <p className='flex justify-center items-center'>Home</p>
          <p className='flex justify-center items-center'>Projects</p>
          <p className='flex justify-center items-center'>Rentals</p>
          <p className='flex justify-center items-center'>About</p>
          <p className='flex justify-center items-center'>Contact</p>
          <p className='flex justify-center items-center'>Testimonials</p>
          <p className='flex justify-center items-center'>News & Events</p>
          <p className='flex justify-center items-center'>Blogs</p>
          <p className='flex justify-center items-center'>Key handover</p>
        </Card>
        <Card className='rounded-[2rem] h-20 mt-10 grid grid-cols-3 text-white text-xl bg-gray-900 bg-opacity-50 border border-gray-900'>
          <p className='flex justify-center items-center'><MdCopyright className='w-6 h-6' /> National Builders All Rights Reseved
          </p>
          <p className='flex justify-center items-center'>ACCOLADES Integrated</p>
          <p className='flex justify-center items-center'>Privacy | Terms of Service</p>
        </Card>
      </div>
    </div>
  )
}

export default Footer