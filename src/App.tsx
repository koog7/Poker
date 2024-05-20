import React, { useState } from 'react';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import './App.css';

const App: React.FC = () => {

    const [deck, setDeck] = useState<CardDeck>(new CardDeck());
    const [cards, setCards] = useState<Card[]>([]);

    const dealCards = () => {
        const newCards = deck.getCards(5);
        console.log(newCards)
        console.log(deck.cards.length);
        setCards(newCards);
        setDeck(deck);
    };

    return (
        <div>
            <p>Количество карт: {deck.cards.length}</p>
            <button onClick={dealCards}>Раздать карты</button>
            {cards.length === 0 ? null : (
                <div className="playingCards faceImages">
                    {cards.map((card, index) => (
                        <span key={index} className={`card rank-${card.rank.toLowerCase()} ${card.suit}`}>
                            <span className="rank">{card.rank}</span>
                            <span className="suit">{getSuitSymbol(card.suit)}</span>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

const getSuitSymbol = (suit: string) => {
    const symbols: { [key: string]: string } = {
        hearts: '♥',
        diams: '♦',
        clubs: '♣',
        spades: '♠',
    };
    return symbols[suit];
};

export default App;
