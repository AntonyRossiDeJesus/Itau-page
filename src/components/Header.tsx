import Image from "next/image";

import { ItemMenu } from "@/components/ItemMenu";
import { Search } from "@/components/Search";
import { Container } from "./Container";

import Logo from "@/assets/logo.svg";
import IconUser from "@/assets/icon-user.svg";

export function Header() {
  return (
    <header className="relative xl:w-full flex items-center h-20 bg-primary-orange">
      <div className="absolute top-0 right-0 bg-primary-blue w-[19%] h-full z-0"></div>
      <div className="flex items-center justify-between w-full max-w-[1280px] px-[15px] mx-auto h-auto">
        <div className="flex flex1 justify-between items-center gap-6 custom-smm:max-w-[60%]">
          <div className="flex items-center lg:text-base lg:gap-14 md:gap-3 md:text-[13px] custom-smm:flex-col  custom-smm:items-start custom-smm:gap-1">
            <Image className="cursor-pointer" src={Logo} alt="Logo" />

            <ul className="flex md:visible custom-smm:hidden items-center gap-8 md:gap-4 ">
              <li>
                <ItemMenu name="Para você" />
              </li>

              <li>
                <ItemMenu name="Empresas" />
              </li>

              <li>
                <ItemMenu name="Serviços" />
              </li>

              <li>
                <ItemMenu name="Ajuda" />
              </li>
            </ul>

            <Search />
          </div>
        </div>

        <button className="flex items-center md:text-[13px] custom-smm:text-[13px] gap-4 bg-primary-blue h-20 pl-10 z-10">
          <Image src={IconUser} alt="icone de usuario" />
          <span className="text-white font-bold">Acessar conta</span>
        </button>
      </div>
    </header>
  );
}
