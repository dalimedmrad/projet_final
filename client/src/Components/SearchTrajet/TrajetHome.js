import React from 'react';
import "./TrajetHome.css";
import UserDetail from '../userDetail/UserDetail';
import './TrajetHome.css';

const TrajetHome = ({trajet}) => {
    return (
        <div className="trajet-card1">
            <div className="image1"><i class="fas fa-map-marker-alt"></i></div>   
            <div className="trajet-body1">
                <div className="trajet-row1"><i class="fas fa-map-marked-alt"></i><span>Depart :</span> {trajet.depart} </div>
                <div className="trajet-row1"><i class="fas fa-map-marked-alt"></i><span>Arrive :</span> {trajet.arrive} </div>
                <div className="trajet-row1"><i class="fas fa-calendar-week"></i><span>Date :</span> {trajet.date_dep} </div>
            </div>  
            <div className="trajet-body1">
                <div className="trajet-row1"><i class="far fa-money-bill-alt"></i><span>Prix :</span> {trajet.prix} DT </div>
                <div className="trajet-row1"><i class="fas fa-chair"></i><span> Nombre de place :</span> {trajet.nombredepassage}</div>
                <div className="trajet-row1"><i class="fas fa-calendar-week"></i><span> Model voiture :</span> {trajet.modelvoiture}</div>
            </div>  
            <div className="trajet-body1">
                <div className="trajet-row1"><i class="fas fa-tint"></i><span>Couleur de voiture :</span> {trajet.couleurvoiture}</div>
                <div className="trajet-row1"><i class="fas fa-chair"></i><span>Description :</span> {trajet.description}</div>
            </div>  
            <div className="trajet-action1">
                <UserDetail trajet={trajet}/>
            </div>   
        </div>
    );
}

export default TrajetHome;
