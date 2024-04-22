import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from './data.json';

export function FestOrg() {

    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        // запросы к беку
        // работу с временем
        const organizer = jsonData.organizatoriFestivala[id];
        if (organizer) {
            setData(organizer);
        }
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center z-20 text-white">
            <p className="text-4xl mb-10">Festival organizer page</p>
            <div className=" text-xl">
                {data && (
                    <div>
                        <p>Name: {data.naziv}</p>
                        <p>Adress: {data.adresa}</p>
                        <p>Founded in: {data.godinaOsnivanja}</p>
                    </div>
                )}
            </div>
        </div>
    )
}