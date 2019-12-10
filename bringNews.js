import React from 'react';
import style from './Thenews.module.css';

const Thenews = ({title,image,author,description,link}) => {
 return(
        <div className={style.news}>
          <h1 className={style.title}>{title}</h1>
          <h4 className={style.author}>Author: {author}</h4>
          <img className={style.image} src={image} alt="OOPPS there seems to be nothing here"/>
          <p className={style.description}>{description}</p>
          <div className={style.link}>
            <a className href={link} target="_blank" rel="noopener noreferrer">Read more...</a>
          </div>
        </div>);
     
      
  
        
  
      
  }
  

export default Thenews;
