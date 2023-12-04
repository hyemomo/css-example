import React from "react";
import Avatar from './avatar';
export default function Profile({image, name, info, isNew}) {
  return (
    <div className="profile">
     <Avatar image={image} isNew={isNew} />
      
  
      <h1>{name}</h1>
      <p>{info}</p>

    </div>
  );
}
