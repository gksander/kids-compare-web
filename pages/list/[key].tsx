import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { lists } from "../../data";
import { CardList } from "../../types";
import { ItemDisplay } from "../../components/ItemDisplay";
import { PairCard } from "../../components/PairCard";

type ListPageProps = {
  list: CardList;
};

const ListPage: React.FC<ListPageProps> = ({ list }) => {
  return (
    <div>
      <div>{list.title}</div>
      <div>
        {list.cards.map((pair, i) => (
          <React.Fragment key={i}>
            <PairCard cards={pair} />
            <div className="h-8" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ListPage;

export const getStaticPaths: GetStaticPaths<{ key: string }> = async () => {
  return {
    paths: Object.keys(lists).map((key) => `/list/${key}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  ListPageProps,
  { key: string }
> = async ({ params: { key } }) => {
  const list = lists[key];

  return {
    props: { list },
  };
};
