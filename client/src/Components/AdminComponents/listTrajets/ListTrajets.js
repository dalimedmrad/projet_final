import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Trajet from '../Trajet/Trajet';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ListTrajets = (props) => {
    const trajetRedux = useSelector((state) => state.trajet.trajets);
    const params  = useParams()
    const[result,setResult]=useState([]);
    useEffect(() => {
        setResult(trajetRedux?.filter(el=>el.createdBy == params.id))
    }, [])
    return (
        
        <div style={{margin:'5% 0'}}>
            <Link to="/admin/home/"><button style={{margin:'0% 4%'}} className="btn btn-success">List des utilisateurs</button></Link>
            {(result.length===0)?<div style={{fontSize:"24px",textAlign:"center",margin:"3% 0"}}>cet utilisateur n'a pas encore des trajets</div>:result.map((el)=>(<Trajet trajet={el}/>))}       
        </div>
    )
}

export default ListTrajets;
