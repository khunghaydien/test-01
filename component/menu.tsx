import React from "react";
import IconMenuHexagonal from "./icon/icon-menu-hexagonal";
import IconCup from "./icon/icon-cup";
import { useTranslations } from "next-intl";
import IconKnife from "./icon/icon-knife";
type HexagonalMenuProps = {
  onClick: (key: string) => void;
};
export const HexagonalMenu = ({ onClick }: HexagonalMenuProps) => {
  const t = useTranslations();
  const hexagonalItems = [
    {
      key: "morning",
      label: t("Morning"),
      icon: <IconKnife />,
    },
    {
      key: "lunch",
      label: t("Lunch"),
      icon: <IconKnife />,
    },
    {
      key: "dinner",
      label: t("Dinner"),
      icon: <IconKnife />,
    },
    {
      key: "snack",
      label: t("Snack"),
      icon: <IconCup />,
    },
  ];
  return (
    <div className="flex justify-center items-center gap-16">
      {hexagonalItems.map(({ key, label, icon }) => (
        <div
          key={key}
          className="relative flex items-center justify-center cursor-pointer"
          onClick={() => onClick(key)}
        >
          <IconMenuHexagonal />
          <div className="absolute flex flex-col items-center text-[20px] text-white">
            {icon}
            {label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HexagonalMenu;
