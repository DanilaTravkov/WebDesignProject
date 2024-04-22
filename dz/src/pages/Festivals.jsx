import { Link } from 'react-router-dom';
import jsonData from './data.json';
import { Hero } from '../components/Hero';

const offsetRow = 5;
const offset = 2;

export function Festivals() {

    return (
        <div className='relative z-20 h-full'>
            <Hero content={"Search for festivals"}/>
            <ul className="grid md:grid-cols-5 grid-cols-3 gap-4 mx-8">

                {Object.entries(jsonData.festivali).slice(0, offsetRow).map(([festivalId, festival]) => (

                    Object.entries(festival).slice(0, offset).map(([key, item]) => (
                        <Link className='relative z-20' to={`/fest/${key}`} key={key}>
                            <div className='text-white transition-colors hover:bg-slate-500/20 rounded-md rounded-b-none backdrop-blur-lg relative border-b h-32' key={key}>
                                <img className='z-10 absolute object-cover rounded-full top-0 right-0 w-8 h-8 m-2' src={item.logo} alt="icon" />
                                <p className='p-4 border-b inline-block'>{item.naziv}</p>
                                <p className='pt-4 pl-4 z-20 font-thin text-sm relative'>Lorem dolore consequuntur accusamus ullam! Quam, labore provident.</p>
                            </div>
                        </Link>
                    ))
                ))}
            </ul>
            {Object.entries(jsonData.festivali)[offsetRow + 1] !== null && <p className='mx-8 mt-4 text-white text-2xl flex items-center justify-center'>
                <span className='p-4 pt-0 inline bg-black/40 rounded-xl'>...</span>
            </p>
            }
        </div>
    )
}
