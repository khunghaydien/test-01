"use client";

import PageItem from "@/component/item/page-item";
import { HexagonalMenu } from "@/component/menu";

export default function page() {
  const handleClick = () => {};
  return (
    <>
      <HexagonalMenu onClick={handleClick} />
      <PageItem src={"/image/d01.jpg"} alt={"d01"} label={"05.21.Morning"}/>
    </>
  );
}
