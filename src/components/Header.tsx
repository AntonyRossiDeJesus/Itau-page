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
      <Container>
        <div className="flex flex1 justify-between items-center gap-6">
          <div className="flex items-center gap-14">
            <Image className="cursor-pointer" src={Logo} alt="Logo" />

            <ul className="flex items-center xl:gap-12 lg:gap-2">
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
          </div>
        </div>
        <Search />
        <button className="flex items-center gap-4 bg-primary-blue h-20 pl-10 z-10">
          <Image src={IconUser} alt="icone de usuario" />
          <span className="text-white font-bold">Acessar conta</span>
        </button>
      </Container>
    </header>
  );
}
