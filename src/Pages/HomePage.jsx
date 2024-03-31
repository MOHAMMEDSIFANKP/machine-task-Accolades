import React from 'react'
import NavBar from '../Components/NavBar'
import backgroundImage from '../assets/bgimage.avif';
import { GoArrowUpRight } from "react-icons/go";

import Image1 from '../assets/awards/image1.png'
import Image2 from '../assets/awards/image2.png'
import Image3 from '../assets/awards/image3.png'
import Image4 from '../assets/awards/image4.png'
import Image5 from '../assets/awards/image5.png'

import Video1 from '../assets/video1.mp4'
import { Card } from '@material-tailwind/react';
import Corocels from '../Components/Corocels';
import NewsBlogsCarousel from '../Components/NewsBlogsCarousel';
import Footer from '../Components/Footer';

function HomePage() {
  return (
    <>
      <div className='bg-black text-white'>
        <div className='h-screen bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
          <div className='top-0 fixed w-full'>
            <NavBar />
          </div>
        </div>
        <div className='mx-6 lg:mx-0 lg:h-[47rem] grid grid-rows-[1fr,18rem] '>
          <div className='lg:mx-auto container lg:flex w-full lg:justify-center '>
            <div className=' lg:ms-0 flex justify-center lg:justify-start items-end lg:w-7/12  '>
              <div className='text-6xl mt-28 lg:mt-0 '>
                <p className='my-3 '>Best Builders</p>
                <p className='my-3 '>In</p>
                <p className='my-3 text-red-500'>Navi Mumbai</p>
                <p className='my-3 '>and</p>
                <p className='my-3 text-red-500'>Kerala</p>
              </div>

            </div>
            <div className='w-full grid grid-rows-[1fr,5rem] lg:mt-28 mt-16'>
              <div className='opacity-[0.5] font- text-xl t'>
                <p className='leading-8' style={{ wordSpacing: '0.3em' }}>A vision real estate development firm, Natinal Builders specializers in pioneering architecturally distinct residential and mixed-user project in India's prime motropolitan markets of Navi Mumbai and Kerala.</p>
                <p className='leading-8 mt-6' style={{ wordSpacing: '0.3em' }}>The firm has a proven track record of successful real estate development, consistently fulfilling its commitments and exceeding customer expectations. Its stamp of quality, and delivery of best-in-class features is visible in each of the 135+ projects of National Builders.</p>

              </div>
              <div className='mt-10 lg:mt-0'>
                <button className='bg-blue-900 text-xl rounded-full flex p-4'>Read More <GoArrowUpRight className=' ms-4 p-1 h-8 w-8 bg-red-500 rounded-full' />
                </button>
              </div>
            </div>
          </div>
          <div className=' grid grid-cols-4 w-full px-24'>
            <div className='my-auto mx-auto text-center'>
              <p className='text-6xl my-4'>5</p>
              <p className='opacity-[0.5] text-xl'>Launched</p>
            </div>
            <div className='my-auto mx-auto text-center'>
              <p className='text-6xl my-4'>135</p>
              <p className='opacity-[0.5] text-xl'>Sold out</p>
            </div>
            <div className='my-auto mx-auto text-center'>
              <p className='text-6xl my-4'>4</p>
              <p className='opacity-[0.5] text-xl'>Ready to Move In</p>
            </div>
            <div className='my-auto mx-auto text-center '>
              <p className='text-6xl my-4'>4</p>
              <p className='opacity-[0.5] text-xl'>Ongoing</p>
            </div>

          </div>
        </div>
        <div className='h-[25rem] grid grid-rows-2 mx-auto container'>
          <div className='flex justify-center items-center text-6xl '>
            <p><span className='text-red-500'>Awards</span> and <span style={{
              backgroundImage: 'linear-gradient(to right, white, #64748b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent'
            }}>Recognitions</span>

            </p>
          </div>
          <div className='flex -mt-20 justify-center items-center gap-16'>
            <img src={Image1} alt="" />
            <img src={Image2} alt="" />
            <img src={Image3} alt="" />
            <img src={Image4} alt="" />
            <img src={Image5} alt="" />
          </div>
        </div>
        <div className='h-20'>
          pening
        </div>
        <div className='h-screen flex justify-center items-center mx-auto container'>
          <video controls className='w-full h-6/6' style={{ borderRadius: '8rem' }}>
            <source src={Video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className='h-[100vh] mx-36 mt-20'>
          <Corocels />
        </div>
        <div className='h-screen bg-gradient-to-r from-gray-900 to-gray-600 grid grid-rows-[20rem,1fr,10rem]'>
          <div className='grid grid-cols-2'>
            <div className='flex justify-center items-center '>
              <div className='flex'>
                <div className='rounded-full border border-gray-500  h-28 w-28'>
                </div>
                <div className='rounded-full border -mt-3 -ms-24 border-gray-500 h-28 w-28'>
                </div>
              </div>
              <p className='text-5xl ms-10 opacity-80'>New & Blogs </p>
            </div>
            <div className='flex justify-center items-center'>
              <button className='bg-blue-900 text-xl rounded-full flex p-4 '>View All <GoArrowUpRight className=' ms-4 p-1 h-8 w-8 bg-red-500 rounded-full' /></button>

            </div>

          </div>
          <div className='w-full -mt-20 ps-28'>
            <NewsBlogsCarousel />

          </div>
          <div className='grid grid-cols-2'>
          <div></div>
          <div className='flex justify-center items-center ps-52'>
          <button className='text-gray-100 font-bold'>Prev</button> <hr className='w-16 mx-2 border-2' /> <button className='text-gray-100 font-bold'>Next</button>
          </div>
          </div>
        </div>
        <div className=''>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default HomePage