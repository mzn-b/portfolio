import { FC } from "react";

export const InnerSection: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="space-y-2">{children}</div>;
};
