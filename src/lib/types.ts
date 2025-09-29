export enum Shapes {
	Square = 'square',
	Circle = 'circle',
	Triangle = 'triangle',
	Cross = 'cross'
}

export enum Numbers {
	One = 1,
	Two,
	Three,
	Four
}

export enum Colors {
	Red = 'red',
	Blue = 'blue',
	Green = 'green',
	Yellow = 'yellow'
}

export interface Position {
	x: number;
	y: number;
}

export interface Card {
	shape: Shapes;
	color: Colors;
	number: Numbers;
}

export type CardKey = `${Colors}-${Shapes}-${Numbers}`;

export type Board = Map<CardKey, Position>;
