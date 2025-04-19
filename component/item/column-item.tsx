import React from "react";
type ColumnItemProps = {
  src: string;
  alt: string;
  date: string;
  time: string;
  comment: string;
  hashtag: string[];
};
export const ColumnItem = ({
  src,
  alt,
  date,
  time,
  comment,
  hashtag,
}: ColumnItemProps) => {
  return (
    <div>
      <div className="relative">
        <img src={src} alt={alt} className="w-[234px] h-[144px]" />
        <div className="absolute bottom-0 left-0 bg-primary-300 px-2 py-[7px] text-white text-[15px]">
          <span>{date}</span> <span className="ml-2">{time}</span>
        </div>
      </div>
      <div className="text-dark-500 max-w-[234px] line-clamp-2 overflow-hidden">
        {comment}
      </div>
      <div className="text-primary-400">
        {hashtag.map((item: string, index: number) => (
          <span key={index} className="mr-2">{`#${item}`}</span>
        ))}
      </div>
    </div>
  );
};

export default ColumnItem;
