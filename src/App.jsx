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
    try {
      const response = await axios.get("https://animechan.xyz/api/random");
      return response.data;
    } catch (error) {
      console.error("Error fetching quote:", error);
      return null;
    }
  };

  const fetchQuote = async () => {
    const newQuote = await getQuote();
    if (newQuote) {
      setQuote(newQuote);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="app">
      <Quote quote={quote} />
      <button onClick={fetchQuote}>Generate</button>
    </div>
  );
}

export default App;
