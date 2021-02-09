import * as React from "react";
import { Apple } from "../components/Apple";
import { Grouping } from "../components/Grouping";
import { Banana } from "../components/Banana";
import { colorList } from "../data";

const App: React.FC = () => {
  const list = colorList;

  return (
    <div>
      <div className="text-lg">{list.title}</div>
      <div>
        {list.cards.map((pair, i) => (
          <div key={i} className="flex flex-row">
            {pair.map((card, j) => (
              <div key={j} className="w-32 mr-6">
                <div className="flex flex-row">
                  {Array.from({ length: card.count }).map((_, c) => (
                    <card.item {...card.itemProps} key={c} />
                  ))}
                </div>
                <div>{card.adj}</div>
                <div>{card.noun}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const data = Array.from({ length: 10 }).map((_, i) => i);

export default App;
