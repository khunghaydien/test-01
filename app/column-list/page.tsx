import ColumnItem from "@/component/item/column-item";
import React from "react";

const Page = () => {
  return (
    <ColumnItem
      src={"/image/column-1.jpg"}
      alt={"column-1"}
      date={"2021.05.17"}
      time={"23:25"}
      comment="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ"
      hashtag={["魚料理", "和食", "DHA"]}
    />
  );
};

export default Page;
