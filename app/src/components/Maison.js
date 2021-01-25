import React from "react";

const Maison = ({ id, buyHouse, price, surface, nbRooms, title, adresse, description, url }) => (
  <div style={{textAlign:"left" ,marginBottom:'3px',width:"100%"}}>
    <img style={{border:"1px solid black" ,marginRight:"3%" ,float:"left" ,width:"130px", height:'150px'}} src={url} alt={title} />
    <div style={{display:'inline-block'}}>
    <h5 style={{color:'black'}}>{title}</h5>
    <p style={{fontSize:'13px'}}>
      Surface : {surface}m²
    </p>
    <p style={{fontSize:'13px'}}>
      Nombre de pièces : {nbRooms}
    </p>
    <p style={{fontSize:'13px'}}>
      Adresse : {adresse}
    </p>
     <p style={{fontSize:'13px'}}>
      Prix : {price} Eth
    </p>
    </div>
    
    <button style={{float:"right", width:"20%", height:"50px" }}  key={id} onClick={(e) =>buyHouse(id, price)} to="/about">Acheter</button>
    
    <div style={{marginBottom:'10px'}}>
      <p style={{fontSize:'13px'}}>{description}</p>
    </div>
  </div>
);

export default Maison;
