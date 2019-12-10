import React , {useEffect, useState} from "react";
import Thenews from './bringNews';
import "./App.css";

export const App = () => {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("Bitcoin");
  const [endpoint, setEndpoint] = useState("everything")
  
  useEffect(()=> {
    const getNews = async () => {

      const response = await fetch(`https://newsapi.org/v2/${endpoint}?q=${query}&apiKey=36dd4792425040a1b74b821ffc3cb4d2`);
      //https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=36dd4792425040a1b74b821ffc3cb4d2
      const data = await response.json();
      
      setNews(data.articles);
      console.log(data.articles);
      
      
      
    };
    
    getNews();
  }, [query,endpoint]);
  
  
  
  

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  
  const updateEndpoint = e => {
    setEndpoint(e.target.value);
    console.log(endpoint);
    
  };

  return (
    <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="search" value={search} onChange={updateSearch} placeholder="Search "/>
          <button className="search-button" type="submit">
            search
          </button>
        </form>
      
      <div className="radio">
        <input type="radio" name="endpoint" value="everything"onChange={updateEndpoint}/>  All news (default)
        <input type="radio" name="endpoint" value="top-headlines"onChange={updateEndpoint}/> Top Headlines
      
      </div>
      <div className="news">
        {news.map(news=>(
          <Thenews 
          key={news.description}
          title={news.title}
          image={news.urlToImage}
          author={news.author}
          description={news.description}
          link={news.url}
          

          />))}
     </div>

      
      
    
    </div>
  );
  
};
