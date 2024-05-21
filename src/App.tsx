import React, { useState } from 'react';
import CardDeck from './lib/CardDeck';
import Card from './lib/Card';
import PokerHand from './lib/PockerHand.ts';
import './App.css';

const App: React.FC = () => {

    const [deck, setDeck] = useState<CardDeck>(new CardDeck());
    const [cards, setCards] = useState<Card[]>([]);
    const [outcome, setOutcome] = useState<string>('');

    const dealCards = () => {
        const newCards = deck.getCards(5);
        setCards(newCards);
        const hand = new PokerHand(newCards);
        setOutcome(hand.getOutcome());
        setDeck(deck);
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

    return (
        <div>
            <p>Количество карт: {deck.cards.length}</p>
            <p>Текущая комбинация: {outcome}</p>
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

export default App;
