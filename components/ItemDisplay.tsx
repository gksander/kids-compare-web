import * as React from "react";
import { Card } from "../types";
import { Apple } from "./Apple";
import { Banana } from "./Banana";

type ItemDisplayProps = {
  type: Card["item"];
  props: Card["itemProps"];
};

export const ItemDisplay: React.FC<ItemDisplayProps> = ({ type, props }) => {
  const Item = {
    apple: Apple,
    banana: Banana,
  }[type];

  return <Item {...props} />;
};
