import Card from './Card';

class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public getOutcome(): string {
        const isFlush = this.cards.every(card => card.suit === this.cards[0].suit);
        const rankCounts: { [rank: string]: number } = {};

        this.cards.forEach(card => {
            rankCounts[card.rank] = (rankCounts[card.rank] || 0) + 1;
        });

        const counts = Object.values(rankCounts);
        if (isFlush) return 'Флэш';
        if (counts.includes(3)) return 'Тройка';
        if (counts.filter(count => count === 2).length === 2) return 'Две пары';
        if (counts.includes(2)) return 'Одна пара';
        return 'Старшая карта';
    }
}

export default PokerHand;
