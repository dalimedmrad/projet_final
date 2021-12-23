import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    const [dep, setdep] = useState("")
    const [arrive, setarrive] = useState("")
    const [date_dep, setdate_dep] = useState("");
    useEffect(() => {
        document.getElementById('e').value = new Date().toISOString().substring(0, 10);
    }, [])
    return (
        <div>
            <div className ="bg1">
                <img src='/bg1.png'/>
                <div className="bg2">
                    <h1>Un vaste choix de trajets à petits prix</h1>
                </div>
                <div className="search">
                    <input type="text" placeholder="Départ" onChange={(e)=>setdep(e.target.value)}/>
                    <input type="text" placeholder="Destination" onChange={(e)=>setarrive(e.target.value)}/>
                    <input type="date" id="e" onChange={(e)=>setdate_dep(e.target.value)}/>
                    <Link to={(dep && arrive && date_dep)?`/search/${dep}/${arrive}/${date_dep}`:""}><button disabled={(dep && arrive && date_dep)?false:true} className="btn btn-primary button"> <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="kirk-icon sc-3dofso-0 gVVdlM mr-1" width="25" height="25"  aria-hidden="true"><g fill="none" stroke="#ffff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><line x1="22" y1="22" x2="16.4" y2="16.4"></line><circle cx="10" cy="10" r="9"></circle></g></svg>Rechercher</button></Link>
                </div>
            </div>
            <div className="section3">
                <img src='section3.png'/>
            </div>
            <div className="section4">
                <div><img src="ds.svg"/></div>
                <div>
                    <h2>Et si covoiturer remboursait <br/> votre plein d’essence ?</h2>
                    <p>Prendre la route coûte de plus en plus cher. Proposez vos trajets sur TAWSILA et TAWSILA Daily, notre application dédiée aux trajets domicile-travail, et faites des économies en partageant les frais avec vos passagers.
                    Et ce n’est pas tout ! Recevez en plus des cartes carburant en cadeau pour vos 1ers covoiturages au volant : 25 DT sur TAWSILA et 30 DT sur TAWSILA Daily.</p>
                <button className="btn btn-primary">Proposer un trajet</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
