import React, { useEffect, useState } from "react";
import './addTrajet.css'
import { useDispatch, useSelector } from 'react-redux'
import { ajouterTrajet } from "../../JS/trajetslice/trajetSlice";
import { Alert } from "react-bootstrap";


const AddTrajet = () => {

 const userRedux = useSelector((state) => state.user.user);
 const [Data,setData] = useState({
  depart: "",
  arrive: "",
  date_dep: "",
  nombredepassage: "",
  prix: "",
  modelvoiture: "",
  couleurvoiture: "",
  description: "",
  createdBy:''
});
useEffect(() => {
  setData({...Data,createdBy:userRedux?._id})
  const slidePage = document.querySelector(".slide-page");
  const nextBtnFirst = document.querySelector(".firstNext");
  const prevBtnSec = document.querySelector(".prev-1");
  const nextBtnSec = document.querySelector(".next-1");
  const prevBtnThird = document.querySelector(".prev-2");
  const nextBtnThird = document.querySelector(".next-2");
  const prevBtnFourth = document.querySelector(".prev-3");
  const submitBtn = document.querySelector(".submit");
  // const progressText = document.querySelectorAll(".step p");
  // const progressCheck = document.querySelectorAll(".step .check");
  // const bullet = document.querySelectorAll(".step .bullet");
  let current = 1;
  
  nextBtnFirst.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    // bullet[current - 1].classList.add("active");
    // progressCheck[current - 1].classList.add("active");
    // progressText[current - 1].classList.add("active");
    current += 1;
  });
  nextBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    // bullet[current - 1].classList.add("active");
    // progressCheck[current - 1].classList.add("active");
    // progressText[current - 1].classList.add("active");
    current += 1;
  });

  nextBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-75%";
    // bullet[current - 1].classList.add("active");
    // progressCheck[current - 1].classList.add("active");
    // progressText[current - 1].classList.add("active");
    current += 1;
  });

  // submitBtn.addEventListener("click", function(){
  //   bullet[current - 1].classList.add("active");
  //   progressCheck[current - 1].classList.add("active");
  //   progressText[current - 1].classList.add("active");
  //   current += 1;
  //   setTimeout(function(){
  //     alert("Your Form Successfully Signed up");
  //   },800);
  // });
  
  prevBtnSec.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "0%";
    // bullet[current - 2].classList.remove("active");
    // progressCheck[current - 2].classList.remove("active");
    // progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  prevBtnThird.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-25%";
    // bullet[current - 2].classList.remove("active");
    // progressCheck[current - 2].classList.remove("active");
    // progressText[current - 2].classList.remove("active");
    current -= 1;
  });
  prevBtnFourth.addEventListener("click", function(event){
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    // bullet[current - 2].classList.remove("active");
    // progressCheck[current - 2].classList.remove("active");
    // progressText[current - 2].classList.remove("active");
    current -= 1;
  });
 }, [userRedux]);

const dispatch = useDispatch()
const handleadd =(e)=>{
  e.preventDefault()
  dispatch(ajouterTrajet(Data));
  window.location.reload();
}
// const check = ()=>{
//   if(Data.depart === '' ||Data.arrive === '' || Data.date_dep === '' || Data.nombredepassage === ''
//       || Data.prix === '' || Data.modelvoiture ==='' || Data.couleurvoiture === ''){
//       alert('vérifiez à nouveau s\'\il vous plaît !!');
//   }else{handleadd();}
// }
  return(
    <div className="bddd">
      <div className="container col-md-12">
          <div className="form-outer">
            <form>
              <div className="page slide-page">
                <div className="field">
                  <div className="label">
                    Quelle est votre point de départ : <span style={{color:"red",fontWeight:"bold"}}>*</span>
                  </div>
                  <input type="text" placeholder="Départ" onChange={(e)=>setData({...Data,depart:e.target.value})}/>
                </div>
                <div className="field">
                  <div className="label">
                    Quelle est votre point d'arrivé : <span style={{color:"red",fontWeight:"bold"}}>*</span>
                  </div>
                  <input type="text" placeholder="Destination"  onChange={(e)=>setData({...Data,arrive:e.target.value})}/>
                </div>
                <div className="field">
                  <button className="firstNext next">Suivant</button>
                </div>
              </div>
              <div className="page">
                <div className="field">
                  <div className="label">
                    Quelle est votre date de depart : <span style={{color:"red",fontWeight:"bold"}}>*</span>
                  </div>
                  <input type="date" placeholder="Date de depart" onChange={(e)=>setData({...Data,date_dep:e.target.value})} />
                </div>
                <div className="field">
                  <div className="label">
                    Quelle est le nombre de places  : <span style={{color:"red",fontWeight:"bold"}}>*</span>
                  </div>
                  <input type="Number" placeholder="Nombre de place" onChange={(e)=>setData({...Data,nombredepassage:e.target.value})} />
                </div>
                <div className="field btns">
                  <button className="prev-1 prev">Précédent</button>
                  <button className="next-1 next">Suivant</button>
                </div>
              </div>
              <div className="page">
                <div className="field">
                  <div className="label">
                  Quelle est votre prix par place en (DT) : <span style={{color:"red",fontWeight:"bold"}}>*</span>
                  </div>
                  <input type="number" placeholder="Prix par place" onChange={(e)=>setData({...Data,prix:e.target.value})}/>
                </div>
                <div className="field">
                  <div className="label">
                    Quelle est votre model de voiture : <span style={{color:"red",fontWeight:"bold"}}>*</span>
                  </div>
                  <input type="text" placeholder="Model de voiture" onChange={(e)=>setData({...Data,modelvoiture:e.target.value})}/>
                </div>
                <div className="field btns">
                  <button className="prev-2 prev">Précédent</button>
                  <button className="next-2 next">Suivant</button>
                </div>
              </div>
              <div className="page">
                <div className="field">
                  <div className="label">
                    Quelle est votre couleur de voiture : <span style={{color:"red",fontWeight:"bold"}}>*</span>
                  </div>
                  <input type="text" placeholder="Couleur de voiture" onChange={(e)=>setData({...Data,couleurvoiture:e.target.value})} />
                </div>
                <div className="field">
                  <div className="label">
                    Description : 
                  </div>
                  <textarea placeholder="Vos regle" onChange={(e)=>setData({...Data,description:e.target.value})}></textarea>
                </div>
                <div className="field btns">
                  <button className="prev-3 prev">Précédent</button>
                  <button  onClick={handleadd}>Enregistrer</button>
                </div>
              </div>
            </form>
          </div>
      </div>
    </div>
  )

}

export default AddTrajet;
