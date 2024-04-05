import { FC } from "react";
import { Item } from "./Item";

export const Link: FC<{ url: string; displayText: string }> = ({
  url,
  displayText,
}) => {
  return (
    <Item>
      <a
        className="text-yellow-300 hover:underline hover:text-orange-400 font-bold"
        href={url}
        target="_blank"
      >
        {displayText}
      </a>
    </Item>
  );
};
