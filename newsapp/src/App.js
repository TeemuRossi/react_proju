import React , {useEffect, useState} from "react";
import Thenews from './bringNews';


export const App = () => {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("Bitcoin");
  const [endpoint, setEndpoint] = useState("everything")
  
  useEffect(()=> {
    getNews();
  }, [query,endpoint]);
  
  
  
  const getNews = async () => {

    const response = await fetch(`https://newsapi.org/v2/${endpoint}?q=${query}&apiKey=36dd4792425040a1b74b821ffc3cb4d2`);
    //https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=36dd4792425040a1b74b821ffc3cb4d2
    const data = await response.json();
    
    setNews(data.articles);
    console.log(data.articles);
    
    
    
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    
  };
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    
  };
  
  const updateEndpoint = e => {
    setEndpoint(e.target.value);
    console.log(endpoint);
  };

  return (
    <div className="App">
      <div className="search">
        <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="search" value={search} onChange={updateSearch} placeholder="bitcoin"/>
            <input type="radio" name="endpoint" value="everything"onChange={updateEndpoint}/>  All news
            <input type="radio" name="endpoint" value="top-headlines"onChange={updateEndpoint}/> Top Headlines
           
          <button className="search-button" type="submit">
            Search!
          </button>
        </form>
      
      
        
      </div>
        {news.map(news=>(
          <Thenews 
          key={news.description}
          title={news.title}
          image={news.urlToImage}
          author={news.author}
          description={news.description}
                    />))}

      
      
    
    </div>
  );
  
};
