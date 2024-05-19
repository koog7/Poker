// src/lib/CardDeck.ts

import Card from './Card';

class CardDeck {
    public cards: Card[];

    constructor() {
        this.cards = [];
        const suits = ['hearts', 'diams', 'clubs', 'spades'];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    public getCard(): Card {
        const randomIndex = Math.floor(Math.random() * this.cards.length);
        const [card] = this.cards.splice(randomIndex, 1);
        return card;
    }

    public getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];
        for (let i = 0; i < howMany; i++) {
            if (this.cards.length === 0) break;
            drawnCards.push(this.getCard());
        }
        return drawnCards;
    }
}

export default CardDeck;
