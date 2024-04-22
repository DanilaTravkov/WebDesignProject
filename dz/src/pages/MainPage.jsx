import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsonData from './data.json';
import { Hero } from '../components/Hero';

export function MainPage() {

    return (
        <div className='relative z-20 h-full'>
            <Hero content={"Search for festival organizators"}/>
            <ul className="grid md:grid-cols-5 grid-cols-3 grid-rows-2 gap-4 mx-8">
                {Object.entries(jsonData.organizatoriFestivala).map(([key, item]) => {
                    return (
                        <Link className='relative z-20' to={`/org/${key}`} key={key}>
                            <div className='text-white transition-colors hover:bg-slate-500/20 rounded-md rounded-b-none backdrop-blur-lg relative border-b h-32' key={key}>
                                <img className='z-10 absolute object-cover rounded-full top-0 right-0 w-8 h-8 m-2' src={item.logo} alt="icon" />
                                <p className='p-4 border-b inline-block'>{item.naziv}</p>
                                <p className='pt-4 pl-4 z-20 font-thin text-sm relative'>Lorem dolore consequuntur accusamus ullam! Quam, labore provident.</p>
                            </div>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}
