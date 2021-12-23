import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import TrajetHome from '../../Components/SearchTrajet/TrajetHome';
import './Search.css';

const Search = () => {
    const params =  useParams();
    const [dep, setdep] = useState("")
    const [arrive, setarrive] = useState("")
    const [date_dep, setdate_dep] = useState("")
    useEffect(() => {
        setdep(params.depart);
        setarrive(params.arrive)
        setdate_dep(params.date)
    }, []);
    const trajetRedux = useSelector((state) => state.trajet.trajets);
    return (
    <div>
        <div className="search2">
            <input type="text" placeholder="Depart" value={dep} onChange={(e)=>setdep(e.target.value)}/>
            <input type="text" placeholder="Arrivée" value={arrive} onChange={(e)=>setarrive(e.target.value)}/>
            <input type="date" value={date_dep} onChange={(e)=>setdate_dep(e.target.value)}/>
        </div>
        <div>
            {trajetRedux?(trajetRedux.filter(el=>el?.depart.toLowerCase().includes(dep.toLowerCase())  && el?.arrive.toLowerCase().includes(arrive.toLowerCase())  && el.date_dep.includes(date_dep.toLowerCase())).map((el)=>(<TrajetHome trajet={el}/>))):(
                <div className="loading"> <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="dzdz" /></div>
            )}
        </div>
    </div> 
    )
}

export default Search;
