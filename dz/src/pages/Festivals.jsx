import { useState, Suspense, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jsonData from './data.json';
import { Hero } from '../components/Hero';

const itemsPerRow = 5;
const initialLoadCount = 10;

export function Loader() {
    return (
        // TODO: add a spinner
        <div className='w-full h-fullrounded-full'>Loading...</div>
    )
}


export function Festivals() {

    const [offset, setOffset] = useState({ value: initialLoadCount });
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({});

    const festivals = Object.entries(jsonData.festivali).map(([festivalId, festival]) =>
        Object.entries(festival).map(([key, item]) => ({ id: key, ...item }))
    ).flat();

    const visibleFestivals = festivals.slice(0, offset.value);

    // Imitation of a data loading from some external sourse
    useEffect(() => {
        if (isLoading) {
            const timeout = setTimeout(() => {
                setOffset(prevState => ({ value: prevState.value + itemsPerRow }));
                setIsLoading(false);
            }, 800);

            return () => clearTimeout(timeout);
        }
    }, [isLoading])

    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const response = await fetch("https://api.quotable.io/random");
    //             const data = await response.json();
    //             console.log("Succsessful request");
    //             setData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    //     fetchData();

    // }, [])

    const handleLoadMore = () => {
        setIsLoading(true)
    }

    return (
        <div className='flex flex-col items-center justify-center relative z-20 h-full'>
            <Hero content={"Search for festivals"}/>
            <ul className="grid md:grid-cols-5 grid-cols-3 gap-4 mx-8">
                {visibleFestivals.map((festival, index) => (
                    <li key={index}>
                        <Link to={`/fest/${festival.id}`} key={festival.id}>
                            <div className='text-white transition-colors hover:bg-slate-500/50 bg-slate-500/20  rounded-md rounded-b-none backdrop-blur-lg relative border-b h-32' key={festival.id}>
                                <img className='z-10 absolute object-cover rounded-full top-0 right-0 w-8 h-8 m-2' src={festival.logo} alt="icon" />
                                <p className='p-4 border-b inline-block'>{festival.naziv}</p>
                                <p className='pt-4 pl-4 z-20 font-thin text-sm relative overflow-hidden text-ellipsis text-nowrap'>Lorem dolore consequuntur accusamus ullam! Quam, labore provident.</p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            {festivals.length > offset.value && (
                <p className='my-8 text-white flex items-center justify-center'>
                    <button onClick={handleLoadMore} className='hover:bg-slate-700 bg-slate-800 p-3 px-8 inline rounded-full duration-300'>
                        {isLoading ? <Loader/> : "Load more"}
                    </button>
                </p>
            )}
        </div>
    );
}