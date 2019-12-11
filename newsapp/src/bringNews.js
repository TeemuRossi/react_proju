import React from 'react';


const Thenews = ({title,image,author,description}) => {
    return(
      <div>
        <h1>{title}</h1>
        <img src={image} alt="OOPPS"/>
        <h2>{author}</h2>
        <p>{description}</p>

      </div>
        
  
      );
}
export default Thenews;
