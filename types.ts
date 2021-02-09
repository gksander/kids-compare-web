import * as React from "react";

/**
 * Items that we can display
 */
export type ItemProps = {
  fill?: string;
};
export type Item = React.FC<ItemProps>;

/**
 * Card
 */
export type Card = {
  item: "apple" | "banana";
  itemProps: ItemProps;
  count: number;
  adj?: string;
  noun?: string;
  emph?: "adj" | "noun";
};

/**
 * Card List
 */
export type CardList = {
  title: string;
  description?: string;
  cards: [Card, Card][];
};
