"use client";

import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, Mail, ChevronDown } from "lucide-react";
import {
  NextjsPlain,
  NestjsOriginal,
  JavaPlain,
  ReactOriginal,
  NodejsOriginal,
} from "devicons-react";
import background from "/videos/background.mp4";
import BackgroundVideo from "next-video/background-video";

const techlogiesList = [
  "Nest.js",
  "Nest.js",
  "React",
  "React Native",
  "Node.js",
  "TailwindCSS",
  "TypeScript",
  "HTML",
  "CSS",
  "Python",
  "Java",
  "PHP",
  "SQL",
  "MongoDB",
  "PostreSQL",
  "MySQL",
];

export default function Home() {
  return (
    <div className="flex flex-col pt-0 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <BackgroundVideo
        src={background}
        style={{
          width: "99vw",
          height: "100vh",
          objectFit: "cover",
        }}
      >
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="flex flex-col gap-4 items-end w-full h-[60vh] justify-center">
            <h1 className="text-2xl font-bold sm:text-4xl">
              Olá, eu sou o João Pedro,
            </h1>
            <p className="text-sm sm:text-lg">
              <TypeAnimation
                sequence={[
                  "Um jovem programador",
                  1500,
                  "Um jovem apaixonado por tecnologia!",
                  3000,
                  "",
                  500,
                ]}
                wrapper="h1"
                repeat={Infinity}
              />
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-full justify-start">
            <ChevronDown size={60} color="white" className="animate-move-up-and-down" />
          </div>
        </main>
      </BackgroundVideo>

      <section className="flex flex-col mt-20 gap-4 w-full max-w-2xl p-5">
        <h2 className="text-2xl font-bold">Sobre mim</h2>
        <p className="text-md text-justify hyphens-auto">
          Sou estudante de Informática no Instituto Federal de São Paulo, Campus
          Itapetinga. Sempre fui apaixonado por tecnologia, e comecei a
          programar muito cedo para criar mods para o Minecraft. Atualmente,
          estou no 4º período do curso técnico. Tenho conhecimento em várias
          tecnologias, como React, Node.js, Next.js, TailwindCSS, entre outras.
          Atualmente, estou focado em aprimorar minhas habilidades em Next.js,
          Nest.js e React.
        </p>

        <h2 className="text-2xl font-bold pt-20">Tecnologias</h2>
        <div className="flex justify-center flex-col">
          <div className="flex items-center justify-center gap-4 my-4">
            <NextjsPlain size={60} color="white" />
            <ReactOriginal size={60} color="white" />
            <NestjsOriginal color="white" size={60} />
            <JavaPlain color="white" size={60} />
            <NodejsOriginal color="white" size={60} />
          </div>
          <p className="text-center text-xs">(As que mais gosto)</p>
        </div>

        <div className="flex flex-col gap-3">
          <p>Mas tambem sei:</p>
          <div className="flex flex-wrap gap-2">
            {techlogiesList.map((technology) => {
              return (
                <span
                  className="bg-zinc-800 px-2 py-1 rounded-md"
                  key={technology}
                >
                  {technology}
                </span>
              );
            })}
          </div>
        </div>

        <h2 className="text-2xl font-bold pt-20">Meus projetos</h2>
        <div className="flex flex-col gap-4 mb-20">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Projeto 1</h3>
            <p className="text-md text-justify hyphens-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, doloremque.
            </p>
          </div>
        </div>
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center p-3 justify-center fixed bottom-0 backdrop-blur bg-[#0a0a0ab9] w-full h-20">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="linkedin.com/in/joão-pedro-martins-de-oliveira-969712272"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Martins-pedro23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:martinsdeoliveira.pedro2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
          Email
        </a>
      </footer>
    </div>
  );
}
