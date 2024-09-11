"use client";

import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, Mail } from "lucide-react";
import {
  NextjsPlain,
  NestjsOriginal,
  JavaPlain,
  ReactOriginal,
  NodejsOriginal,
} from "devicons-react";

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
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-col gap-4 items-end w-full h-[70vh] justify-center">
          <h1 className="text-4xl font-bold">Olá, eu sou o João Pedro,</h1>
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
        </div>
      </main>

      <section className="flex flex-col gap-4 w-full max-w-2xl">
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
                <span className="bg-zinc-800 px-2 py-1 rounded-md" key={technology}>
                  {technology}
                </span>
              );
            })}
          </div>
        </div>

        <h2 className="text-2xl font-bold pt-20">Meus projetos</h2>
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center p-3 justify-center fixed bottom-0 backdrop-blur bg-[#0a0a0ab9] w-full h-20">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          Linkedin
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          Github
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
