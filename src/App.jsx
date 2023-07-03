import React, { useState, useEffect } from "react";
import Quote from "./components/Quote";
import axios from "axios";
function App() {
  const [quote, setQuote] = useState({
    anime: null,
    character: null,
    quote: null,
  });
  const getQuote = async () => {
    return await fetch("https://animechan.xyz/api/random").then((response) =>
      response.json()
    );
  };
useEffect(() => {
  const fetchQuote = async () => {
    setQuote(await getQuote());
  };

  fetchQuote();
}, []);

  return (

      <div className="app">
        <Quote quote={quote}/>
        <button onClick={()=>setQuote(getQuote())}>Generate</button>
      </div>
    
  );
}

export default App;
