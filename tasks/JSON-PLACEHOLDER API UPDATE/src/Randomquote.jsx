import React, { useState } from 'react';

const RandomQuoteGenerator = () => {
  const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "Simplicity is the ultimate sophistication. - Leonardo da Vinci",
  ];

  const [randomQuote, setRandomQuote] = useState(quotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <p>{randomQuote}</p>
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  );
};

export default RandomQuoteGenerator;
