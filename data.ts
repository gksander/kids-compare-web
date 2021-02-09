import { Card, CardList } from "./types";
import { Apple } from "./components/Apple";

const ONE_RED_APPLE: Card = {
  item: Apple,
  itemProps: {},
  count: 1,
  adj: "Red",
  noun: "Apple",
};
const ONE_GREEN_APPLE: Card = {
  item: Apple,
  itemProps: { fill: "green" },
  count: 1,
  adj: "Green",
  noun: "Apple",
};
const TWO_RED_APPLES: Card = {
  item: Apple,
  itemProps: {},
  count: 2,
  adj: "Two",
  noun: "Apples",
};

export const colorList: CardList = {
  title: "Numbers",
  cards: [
    [ONE_RED_APPLE, ONE_GREEN_APPLE],
    [ONE_RED_APPLE, TWO_RED_APPLES],
  ],
};
