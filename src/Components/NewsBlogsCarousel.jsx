import { Card } from '@material-tailwind/react';
import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import Building1 from '../assets/NewsBlogsCarousel/building1.jpg';
import Building2 from '../assets/NewsBlogsCarousel/building2.jpg';
import Building3 from '../assets/NewsBlogsCarousel/building3.jpg';
import Building4 from '../assets/NewsBlogsCarousel/building4.jpg';
import Building5 from '../assets/NewsBlogsCarousel/building5.jpg';

function NewsBlogsCarousel() {
    return (
      <>
      
      <div className='flex w-full max-w-[112rem] overflow-x-auto' style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='w-[45rem] h-[27rem] bg-gray-900 grid grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className=' h-full bg-cover bg-center' style={{ backgroundImage: `url(${Building1})`, borderRadius: '2rem 0 0 2rem' }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-10'>
                        <p className='font-bold text-white text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-xl text-white my-5'>March 16, 2022</p>
                        <p className='text-white text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-12 text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='w-[45rem] h-[27rem] bg-gray-900 grid grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className=' h-full bg-cover bg-center' style={{ backgroundImage: `url(${Building2})`, borderRadius: '2rem 0 0 2rem' }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-10'>
                        <p className='font-bold text-white text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-xl text-white my-5'>March 16, 2022</p>
                        <p className='text-white text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-12 text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>
            <div className='flex h-full mt-20 mx-7'>
                <Card className='w-[45rem] h-[27rem] bg-gray-900 grid grid-cols-[20rem,1fr]' style={{ borderRadius: '2rem' }}>
                    <div className=' h-full bg-cover bg-center' style={{ backgroundImage: `url(${Building2})`, borderRadius: '2rem 0 0 2rem' }}>
                        <p className='p-1 text-center text-white font-bold bg-blue-gray-600 text-sm m-8 w-20 rounded-full'>Article</p>
                    </div>
                    <div className='mx-10 mt-10'>
                        <p className='font-bold text-white text-2xl'>Renting vs Buying: What is the Right Choice for you in Kochi?</p>
                        <p className='text-xl text-white my-5'>March 16, 2022</p>
                        <p className='text-white text-xl'>At accumsan condimentum donec dictumst eros, tempus in diam. Ornare gravida quis eu blandit lectus vestibulum egestas.</p>
                        <button className='flex justify-center items-center mt-12 text-xl text-red-500'>Read more <IoIosArrowForward />
                            <IoIosArrowForward className='-ms-3' />
                        </button>
                    </div>
                </Card>
            </div>    
        </div>
        </>
    );
}

export default NewsBlogsCarousel;
