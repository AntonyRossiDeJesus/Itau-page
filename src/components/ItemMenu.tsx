import Image from "next/image";
import Arrow from "@/assets/arrow-down.svg";

type Props = {
  name: string;
};

export function ItemMenu({ name }: Props) {
  return (
    <button className="flex items-center gap-3 md:gap-[5px] custom-smm:invisible">
      <span className="text-white font-bold">{name}</span>
      <Image src={Arrow} alt="icone de seta para baixo" />
    </button>
  );
}
