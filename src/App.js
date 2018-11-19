import React, { useState } from 'react';

const createDeck = () => {
  let cards = [];
  let id = 0;
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 4; j++) {
      if (j === 0) {
        cards.push({ id, name: `${convertNumber(i)} of Spades` });
      } else if (j === 1) {
        cards.push({ id, name: `${convertNumber(i)} of Hearts` });
      } else if (j === 2) {
        cards.push({ id, name: `${convertNumber(i)} of Clubs` });
      } else if (j === 3) {
        cards.push({ id, name: `${convertNumber(i)} of Diamonds` });
      }
      id++;
    }
  }
  return cards;
};
const convertNumber = num => {
  if (num > 0 && num < 10) {
    return `${num + 1}`;
  } else if (num === 0) {
    return 'Ace';
  } else if (num === 10) {
    return 'Jack';
  } else if (num === 11) {
    return 'Queen';
  } else if (num === 12) {
    return 'King';
  }
};

const App = () => {
  const [cards, updateCards] = useState(createDeck());
  const [card, updateCard] = useState('');

  const drawCard = () => {
    if (cards.length === 0) return;
    let cardId = Math.floor(Math.random() * cards.length);
    updateCard(cards[cardId].name);
    updateCards(cards.filter(card => card.id !== cards[cardId].id));
  };

  return (
    <div>
      {cards.map(val => (
        <p key={val.id}>{val.name}</p>
      ))}
      <h1>{card}</h1>
      <button
        style={{ position: 'absolute', top: 0, right: 0 }}
        onClick={drawCard}
      >
        Draw
      </button>
    </div>
  );
};

export default App;
