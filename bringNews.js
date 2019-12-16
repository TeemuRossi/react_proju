import React from 'react';
import style from './Thenews.module.css';
// trying the use of css modules, this way we can use the css styles on this component, without it having possible negative effects on the other stylings
// we get here the data from the api call and build the div elements that contain the news.
const Thenews = ({title,image,author,description,link}) => {
 return(
        <div className={style.news}>
          <h1 className={style.title}>{title}</h1>
          <h4 className={style.author}>Author: {author}</h4>
          <img className={style.image} src={image} alt="No photo found."/>
          <p className={style.description}>{description}</p>
          <div className={style.link}>
            <a  href={link} target="_blank" rel="noopener noreferrer">Read more...</a>
          </div>
        </div>);
     
      
  
        
  
      
  }
  

export default Thenews;
