import React from "react";

export default function Avatar({image, isNew}) {
  return (
    <div className='avatar'>

     
      <img className="photo" src={image} alt="poster"></img>
      {isNew && <span className="isNew">New</span>}
    
    </div>
  );
}
