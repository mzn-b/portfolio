import { FC } from "react";

interface ItemProps {
  title?: string;
  children?: React.ReactNode;
}

export const Item: FC<ItemProps> = ({ title, children }) => {
  return (
    <div className="flex items-center">
      {title && (
        <h2 className="mr-1 text-white pointer-events-none font-bold">
          {title}
        </h2>
      )}
      {children && <div>{children}</div>}
    </div>
  );
};
