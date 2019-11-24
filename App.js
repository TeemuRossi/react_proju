import React , {useEffect, useState} from "react";
import Thenews from './bringNews';


const App = () => {
  const url= 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=36dd4792425040a1b74b821ffc3cb4d2';
  const [news, setnews] = useState([]);
  
  useEffect(()=> {
    getNews();
  }, []);

  const getNews = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setnews(data.articles);
    console.log(data.articles);
  };
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="search"/>
        <button onclick= {getNews}className="search-button" type="submit">
          Search!
        </button>
        

      </form>
      {news.map(Thenews=>(
        <Thenews/>
    ))}
    </div>
  );
  
};
export default App;