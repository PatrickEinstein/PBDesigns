import React from 'react'
import {clientReviews} from "../constants/index.js";

const Clients = () => {
    return (
        <section className='c-space my-20'>
            <h3 className='head-text'>
                Hear from My Clients
            </h3>
            <div className='client-container'>
                {
                    clientReviews.map(({id, name, review, img, position}) => (
                        <div className='client-review ' key={id}>
                            <div>
                                <p className='text-white font-light'>
                                    {review}
                                </p>
                                <div className='client-content'>
                                    <div className='flex flex-row justify-between px-3 w-full'>
                                        <img src={img} alt={name} className='h-12 rounded-full'/>
                                        <div className='flex flex-col'>
                                            <p className='font-semibold text-white-800'>
                                                {name}
                                            </p>
                                            <p className='text-white-500 md:text-base text-sm'>
                                                {position}
                                            </p>
                                        </div>
                                        <div className='flex gap-1 items-center'>
                                            {
                                                Array.from({length: 5}).map((_, index) => (
                                                    <img key={index} src="/assets/star.png" alt='start'
                                                         className="w-3 h-5"/>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
export default Clients
