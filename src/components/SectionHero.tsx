import Image from "next/image";

import { Container } from "./Container";
import ImgAppleStore from "@/assets/btn-apple-store.svg";
import ImgGooglePlay from "@/assets/btn-google-play.svg";
import Arrow from "@/assets/arrow-explorer.svg";
import WomanImage from "@/assets/woman.png";

export function SectionHero() {
  return (
    <section className="w-full h-auto bg-img_bg_hero bg-no-repeat bg-center bg-cover">
      <Container>
        <div className="flex-1 max-w-[50%]">
          <h1 className="text-white sm:text-5xl xl:text-7xl font-bold mb-4">
            Tenha seu Banco na palma da mão.
          </h1>

          <p className="text-white text-xl max-w-[408px] mb-8">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito para você.
          </p>

          <div className="flex gap-4 mb-12">
            <button className="">
              <Image src={ImgAppleStore} alt="imagem da apple store" />
            </button>

            <button className="">
              <Image src={ImgGooglePlay} alt="imagem da google play" />
            </button>
          </div>

          <button className="flex items-center gap-3">
            <Image src={Arrow} alt="icone de seta para baixo" />
            <span className="text-white text-sm font-bold">
              Continue explorando
            </span>
          </button>
        </div>

        <div className="w-[50%]">
          <Image
            className="flex-1 items-end"
            src={WomanImage}
            alt="imagem da modelo do banner segurando um celular e sorrindo"
          />
        </div>
      </Container>
    </section>
  );
}
