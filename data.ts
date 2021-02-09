import { Card, CardList } from "./types";
import { Apple } from "./components/Apple";

export const colorList: CardList = {
  title: "Colors",
  cards: Array.from({ length: 9 }).map((_, i) => {
    const firstCard: Card = {
      item: "apple",
      itemProps: {},
      count: i,
      adj: `${i}`,
      noun: "Apple",
    };
    const secondCard: Card = {
      ...firstCard,
      count: i + 1,
      adj: `${i + 1}`,
    };

    return [firstCard, secondCard];
  }),
};

export const numberList: CardList = {
  ...colorList,
  title: "Numbers",
  cards: colorList.cards.map(([card1, card2]) => [
    { ...card1, itemProps: { fill: "green" } },
    { ...card2, item: "banana" },
  ]),
};

export const lists: { [key: string]: CardList } = {
  colors: colorList,
  numbers: numberList,
};
