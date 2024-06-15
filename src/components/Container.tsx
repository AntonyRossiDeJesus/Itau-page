import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Container({ children }: Props) {
  return (
    <div className="flex items-center justify-between w-full max-w-[1280px] md:pt-5 custom-smm:flex-col sm:flex-col md:flex-row px-[15px] mx-auto h-auto">
      {children}
    </div>
  );
}
