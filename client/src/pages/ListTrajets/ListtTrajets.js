import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import Trajet from '../../Components/Trajet/Trajet';
import './listtrajets.css';

const ListtTrajets = () => {
    const userRedux = useSelector((state) => state.user.user);
    const trajetRedux = useSelector((state) => state.trajet.trajets);
    const [list,setList]=useState([]);
    useEffect(() => {
      setList(trajetRedux?.filter(el=>el.createdBy === userRedux?._id));
    }, [trajetRedux,userRedux]);
    return (
        <div className="listtrajets">
          {(list?.length == 0)?<div className="nu">Vous n'avez aucun trajet, Criez si vous voulez !</div>:list?.map((el)=>(<Trajet trajet={el}/>))}
          {/* {(list.length > 0)?list.map((el)=>(<Trajet trajet={el}/>)):<div className="loading"><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="dzdz" /></div>} */}
          {/* {(list)?list.map((el)=>(<Trajet trajet={el}/>)):(<div className="nu">ddeedede</div>)} */}
          {/* {
            (trajetRedux)?
            ((trajetRedux.filter(el=>el.createdBy === userRedux?._id))?.map((el)=>(<Trajet trajet={el}/>)):(<div className="nu">ddeedede</div>))
            :
            (<div className="loading"><img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="dzdz" /></div>)
          } */}
          
        </div>
    )
}

export default ListtTrajets;
