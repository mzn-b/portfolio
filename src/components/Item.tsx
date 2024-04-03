import { FC } from "react";

interface ItemProps {
  title: string;
  children: React.ReactNode;
}

export const Item: FC<ItemProps> = ({ title, children }) => {
  return (
    <div className="flex items-center">
      <h2 className="mr-1">{title}: </h2>
      <div>{children}</div>
    </div>
  );
};
