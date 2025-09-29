import type { Card, CardKey, Colors, Numbers, Shapes } from '$lib/types';

export function cardToKey(card: Card): CardKey {
	return `${card.color}-${card.shape}-${card.number}`;
}

export function keyToCard(key: CardKey): Card {
	const [color, shape, number] = key.split('-');
	return {
		color: color as Colors,
		shape: shape as Shapes,
		number: Number(number) as Numbers
	};
}
