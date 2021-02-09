import * as React from "react";
import { Card } from "../types";
import { ItemDisplay } from "./ItemDisplay";

type PairCardProps = {
  cards: [Card, Card];
};

export const PairCard: React.FC<PairCardProps> = ({ cards }) => {
  return (
    <div className="p-3 shadow bg-white rounded grid grid-cols-1 sm:grid-cols-2 gap-6">
      {cards.map((card) => (
        <div className="flex justify-center">
          <div className="w-32">
            <ItemDisplay type={card.item} props={card.itemProps} />
            <div>{card.adj}</div>
            <div>{card.noun}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
