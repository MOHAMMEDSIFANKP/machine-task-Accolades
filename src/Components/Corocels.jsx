import React from 'react'
import { Carousel, Typography, Button, Card, Rating } from "@material-tailwind/react";
import Image from '../assets/cardimage.png'
import Shyamaprasad from '../assets/Shyamaprasad.png'


function Corocels() {
    return (
        <Carousel className="rounded-xl  text-white">
            <div className='grid grid-cols-2 h-full'>
                <div className='flex justify-center items-center h-full'>
                    <Card className='h-5/6 grid grid-rows-3 w-8/12' style={{ backgroundColor: 'rgba(32,33,45,255)', borderRadius: '3rem' }}>
                        <div className='text-6xl text-center flex justify-center items-center'>
                            <div>
                                <p className='text-red-500'>What they say</p>
                                <p className='text-white'>about us?</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <img src={Image} alt="" />
                        </div>
                        <div className='flex justify-center items-center'>
                            <div className='ms-12 text-white'>
                                <p className='text-4xl font-bold z-10 sticky'>SHYAMPRASAD T C</p>
                                <p className='text-xl mt-3'>NATIONAL SIGNATURE</p>
                            </div>

                        </div>
                    </Card>
                </div>
                <div className='grid grid-rows-[18rem,1fr]'>
                    <div className='flex ms-20 items-center '>
                        <div className='rounded-full border border-gray-500  h-28 w-28'>
                        </div>
                        <div className='rounded-full border -ms-24 -mt-3 border-gray-500 h-28 w-28'>
                        </div>
                        <p className='ps-10 opacity-90 text-5xl font-extralight'>Testimonials</p>
                    </div>
                    <div className='flex items-center'>
                        <Card className='h-4/6 -mt-10 w-full grid grid-cols-2 -ms-52 bg-gray-900' style={{ borderRadius: '3rem' }}>
                            <div className='w-full h-full bg-cover relative' style={{ backgroundImage: `url(${Shyamaprasad})`, borderRadius: '3rem 0 0 3rem' }}>
                            </div>
                            <div className='grid grid-rows-[1fr,7rem] my-auto '>
                                <div className='text-center leading-8 text-[1.4rem] opacity-[0.5] text-white mx-5 text-balance ' >
                                    <p>When i thought buy a home at kochi i started immense research and finally i arrived at a conclusion that natinal bilders is the best builders in kochi.</p>
                                    <p>When i went through the history of projects of national Builders...</p>
                                </div>
                                <div className='grid grid-cols-[1fr,5rem] h-full w-full mt-10'>
                                    <div className='flex justify-center -mt-5'>
                                    <Rating value={5} className='h-20 w-20'/>
                                    </div>
                                    <div className='flex justify-center items-end h-full '>
                                        <img src={Image} alt="" />
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