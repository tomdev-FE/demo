import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

export default function WrapperComponent({ children }: WrapperProps) {
  return <div className="flex justify-between gap-1.5">{children}</div>;
}
