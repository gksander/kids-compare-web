import * as React from "react";
import { lists } from "../data";
import Link from "next/link";
import { GetStaticProps } from "next";

type HomePageProps = {
  lists: { title: string; description: string; key: string }[];
};

const HomePage: React.FC<HomePageProps> = ({ lists }) => {
  return (
    <div>
      {lists.map((list) => (
        <Link href={`/list/${list.key}`} key={list.key}>
          <div className="shadow-lg p-3 rounded mb-3">
            <div>{list.title}</div>
            <div>{list.description}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;

/**
 * Get all lists
 */
export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  return {
    props: {
      lists: Object.entries(lists).map(([key, { title, description }]) => ({
        key,
        title,
        description: description || "",
      })),
    },
  };
};
