import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import TrajetHome from '../../Components/SearchTrajet/TrajetHome';
import './Search.css';
import {Link} from 'react-router-dom';

const Search = () => {
    const params =  useParams();
    const [dep, setdep] = useState("");
    const [arrive, setarrive] = useState("");
    const [date_dep, setdate_dep] = useState("");
    const [result,setResult]=useState([]);
    const trajetRedux = useSelector((state) => state.trajet.trajets);

    useEffect(() => {
        setdep(params.depart);
        setarrive(params.arrive);
        setdate_dep(params.date);
        setResult(trajetRedux?.filter(el=>el?.depart.toLowerCase().includes(dep.toLowerCase())  && el?.arrive.toLowerCase().includes(arrive.toLowerCase())  || el.date_dep.includes(date_dep.toLowerCase())))
    }, [dep || arrive || date_dep]);
    return (
    <div>
        <div className="sc-nll3ti-1 jLmFAm">
            <Link to="/">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-3dofso-0 kvCBWc" width={24} height={24} aria-hidden="true">
                    <g fill="none" stroke="#708C91" strokeWidth={1} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10}>
                    <line x1={22} y1={22} x2="16.4" y2="16.4" />
                    <circle cx={10} cy={10} r={9}  />
                    </g>
                </svg>
            </Link>
            <div className="kirk-uneditableTextField-label kirk-uneditableTextField-label--ellipsis">
                <p className="kirk-text kirk-text-body sc-d9g8h2-0 grUvZq kirk-requestRecap-route" style={{color: 'rgb(5, 71, 82)'}}>
                <span className="sc-3jatzg-0 dvIJjD"><span>{dep}</span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="kirk-icon sc-3dofso-0 kvCBWc sc-3jatzg-1 gQuTBd" width={24} height={24} aria-hidden="true">
                    <g fill="none" stroke="#708C91" strokeWidth={2} strokeMiterlimit={10} strokeLinejoin="round" strokeLinecap="round" transform="rotate(180 12 12)">
                        <path d="M9 19l-7-7 7-7" /><path d="M22 12H2" />
                    </g>
                    </svg>
                    <span>{arrive}</span></span>
                </p>
                <span className="kirk-text kirk-text-body sc-d9g8h2-0 grUvZq kirk-requestRecap-info">{date_dep}</span>
            </div>
        </div>

        <div>
            {(result?.length === 0)?(<div className='result'>Aucun trajet, chercher de nouveau SVP ! </div>):(result?.map((el)=>(<TrajetHome trajet={el}/>)))}
        </div>
    </div> 
    )
}

export default Search;
