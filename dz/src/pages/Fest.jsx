import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsonData from './data.json';

export function Fest() {
    const { id } = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {
        Object.entries(jsonData.festivali).filter(item => {
            item[1][id] !== undefined ? setData(item[1][id]) : null;
        });
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center  z-20 text-white">
            <p className="text-4xl mb-10">Festival page</p>
            <div className="text-xl">
                {data && (
                    <div>
                        <p>Name: {data.naziv}</p>
                        <p>Opis: {data.opis}</p>
                        <p>Tip: {data.tip}</p>
                        <p>Prevoz: {data.prevoz}</p>
                        <p>Cena: {data.cena}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

