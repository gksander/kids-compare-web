import * as React from "react";
import { Apple } from "./Apple";

type GroupingProps = {
  count: number;
};

export const Grouping: React.FC<GroupingProps> = ({ count }) => {
  return (
    <div className="flex flex-row">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i}>
          <Apple />
        </div>
      ))}
    </div>
  );
};
