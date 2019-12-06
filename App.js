import React , {useEffect, useState} from "react";
import Thenews from './bringNews';


export const App = () => {

  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("Bitcoin");

  useEffect(()=> {
    getNews();
  }, [query]);

  const getNews = async () => {
    const response = await fetch(`
    https://newsapi.org/v2/everything?q=${query}&apiKey=36dd4792425040a1b74b821ffc3cb4d2`);
    const data = await response.json();
    setNews(data.articles);
    console.log(data.articles);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="search" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search!
        </button>
      </form>
        {news.map(news=>(
          <Thenews 
          key={news.title}
          title={news.title}
          image={news.urlToImage}
          author={news.author}
          description={news.description}
                    />))}

      
      
    
    </div>
  );
  
};
