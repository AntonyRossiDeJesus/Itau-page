import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div className="flex items-center justify-between w-full 2xl:max-w-[1280px] xl:max-w-[1100px] lg:max-w-[925px] px-[15px] mx-auto h-auto">
      {children}
    </div>
  );
}
