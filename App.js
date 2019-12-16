import React , {useEffect, useState} from "react";
import Thenews from './bringNews';
import "./App.css";

export const App = () => {
  //create the const which in the data from different fields is handled
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("Bitcoin");
  const [endpoint, setEndpoint] = useState("everything")

  // inside useEffect we have the actual const to fetch the news from the api, which in, the query and endpoint are placed.
  useEffect(()=> {
    const getNews = async () => {
      //fetch
      const response = await fetch(`https://newsapi.org/v2/${endpoint}?q=${query}&apiKey=36dd4792425040a1b74b821ffc3cb4d2`);
      const data = await response.json();
      //setting "news" to be the data we got
      setNews(data.articles);
      //showing you how the data looks like
      console.log(data.articles);
      
      
      
    };
    // call the function on useEffect
    getNews();
  }, [query, endpoint]);
  // query and endpoint update the results

  //update the search value from the field
  const updateSearch = e => {
    setSearch(e.target.value);

  };
 // we have to use another const, query, to set the search value into the api call. If we only had updateSearch sending it straight to the api call
 // we would be doing a api call everytime you type in a letter 
  const getSearch = e => {
    e.preventDefault();
    //preventing errors by not giving the possibility to send a no value search
    if(search === ""){
      alert("Please type something into search")
    }
    // if search has a value, go on normally
    else{
      setQuery(search);
      setSearch("");
    }
    
  };
  // getting the endpoint for our api call
  const updateEndpoint = e => {
    setEndpoint(e.target.value);
    
    
  };
  // mostly normal jsx which in we have a few forms
  // at div "news" we are calling another component from "bringNews"
  // in this div we are sending the json data we got from the api call to the component, which renders the items.
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
