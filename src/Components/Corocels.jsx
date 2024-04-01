import React from 'react'
import { Carousel, Typography, Button, Card, Rating } from "@material-tailwind/react";
import Image from '../assets/cardimage.png'
import Shyamaprasad from '../assets/Shyamaprasad.png'


function Corocels() {
    return (
        <Carousel className="rounded-xl text-white ">
            <div className='grid grid-cols-2 h-full'>
                <div className='flex justify-center items-center h-full'>
                    <Card className='lg:h-5/6 md:h-[26rem] h-[20rem] grid grid-rows-3 w-[10rem] md:w-[16rem] lg:w-[31rem] rounded-[2rem] lg:rounded-[3rem]' style={{ backgroundColor: 'rgba(32,33,45,255)' }}>
                        <div className='text-xl md:text-4xl lg:text-6xl ms-4 text-center flex lg:justify-center items-center'>
                            <div className='mt-4 lg:mt-'>
                                <p className='text-red-500'>What they say</p>
                                <p className='text-white'>about us?</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={Image} className='h-28 lg:h-full z-10 lg:z-0' alt="" />
                        </div>
                        <div className='flex justify-center items-center z-10 -mt-4 lg:-mt-0'>
                            <div className='ms-6 lg:ms-12 text-white'>
                                <p className='text-xl md:text-2xl lg:text-4xl font-bold  sticky'>SHYAMPRASAD T C</p>
                                <p className='text-xs md:text-xl lg:text-xl mt-3'>NATIONAL SIGNATURE</p>
                            </div>

                        </div>
                    </Card>
                </div>
                <div className='grid grid-rows-[18rem,1fr]'>
                    <div className='flex ms-20 items-center mt-48 lg:mt-0'>
                        <div className='rounded-full border border-gray-500 -ms-12 lg:-ms-0 h-10 w-10 lg:h-28 lg:w-28'>
                        </div>
                        <div className='rounded-full border -ms-9 lg:-ms-24 -mt-3 border-gray-500 h-10 w-10 lg:h-28 lg:w-28'>
                        </div>
                        <p className='ps-10 opacity-90 -ms-8 lg:-ms-0 lg:text-5xl font-extralight'>Testimonials</p>
                    </div>
                    <div className='flex items-center'>
                        <Card className='h-[10rem] md:h-[14rem]  lg:h-4/6 -mt-[11rem] lg:-mt-10 w-[15rem] md:w-[25rem] lg:w-full grid grid-cols-2 -ms-16 md:-ms-28 lg:-ms-52 bg-gray-900 rounded-[2rem] lg:rounded-[3rem]'>
                            <div className='w-full h-[10rem] md:h-full lg:h-full bg-cover relative rounded-s-[2rem] lg:rounded-s-[3rem]' style={{ backgroundImage: `url(${Shyamaprasad})` }}>
                            </div>
                            <div className='grid grid-rows-[1fr,7rem] my-auto '>
                                <div className='text-center  lg:leading-8 text-xs h-[6rem]  lg:h-full overflow-hidden pt-5 lg:pt-0 lg:text-[1.4rem] opacity-[0.5] text-white mx-5 text-balance ' >
                                    <p>When i thought buy a home at kochi i started immense research and finally i arrived at a conclusion that natinal bilders is the best builders in kochi.</p>
                                    <p>When i went through the history of projects of national Builders...</p>
                                </div>
                                <div className='grid grid-cols-[1fr,5rem] h-full w-full mt-10'>
                                    <div className='flex justify-center -mt-36 md:-mt-32 lg:-mt-5'>
                                    <Rating value={5} className='lg:h-20 lg:w-20'/>
                                    </div>
                                    <div className='flex justify-center items-end h-full '>
                                        <img src={Image} className='lg:w-[10rem] lg:h-[5rem]' alt="" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>

        </Carousel>
    )
}

export default Corocels