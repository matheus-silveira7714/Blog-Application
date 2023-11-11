import React from "react";
import Pagination from "./Pagination";
import Card from "./Card";

const CardList = () => {
  return (
    <div className="flex-1 ">
      <h1 className=" my-4 sm:my-6 lg:my-9 text-lg sm:text-2xl md:text-3xl font-bold">
        Recent Posts
      </h1>
      <Card />
      <Card />
      <Card />
      <Card />
      <Pagination />
    </div>
  );
};

export default CardList;
