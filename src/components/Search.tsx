import IconSearch from "@/assets/icon-search.svg";
import Image from "next/image";

export function Search() {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="cursor-pointer"
        src={IconSearch}
        alt="icone de pesquisa"
      />
      <input
        placeholder="Buscar"
        type="text"
        className="bg-transparent outline-none text-white placeholder:text-white pr-5"
      />
    </div>
  );
}
