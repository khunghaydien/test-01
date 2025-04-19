import React from "react";
type PageItemProps = {
  src: string;
  alt: string;
  label: string;
};
export const PageItem = ({ src, alt, label }: PageItemProps) => {
  return (
    <div className="relative">
      <img src={src} alt={alt} className="w-[234px] h-[234px]" />
      <div className="absolute bottom-0 left-0 bg-primary-300 px-2 py-[7px] text-white text-[15px]">
        {label}
      </div>
    </div>
  );
};

export default PageItem;
