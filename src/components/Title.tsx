import { FC } from "react";

export const Title: FC<{ title: string }> = ({ title }) => {
  return (
    <h1 className="rounded text-2xl text-white pointer-events-none font-bold pl-1 p-2 bg-emerald-900">
      {title}
    </h1>
  );
};
