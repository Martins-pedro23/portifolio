"use client";

import { TypeAnimation } from "react-type-animation";
import { Linkedin, Github, Mail, ChevronDown, Link2 } from "lucide-react";
import {
  NextjsPlain,
  NestjsOriginal,
  JavaPlain,
  ReactOriginal,
  NodejsOriginal,
  NuxtjsOriginal,
  MongodbOriginal,
  JavascriptOriginal,
  RedisOriginal,
  PostgresqlOriginal,
  TailwindcssOriginal,
} from "devicons-react";
import background from "/videos/background.mp4";
import BackgroundVideo from "next-video/background-video";
import logoAgriloggi from "./public/images/logoAgriloggi.png";
import logoEstudeMelhor from "./public/images/logoEstudeMelhor.svg";
import labMaker from "./public/images/LabIFMaker4.png";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

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
          width: "full",
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
                repeat={Infinity}
              />
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-full justify-start">
            <ChevronDown
              size={60}
              color="white"
              className="animate-move-up-and-down"
            />
          </div>
        </main>
      </BackgroundVideo>

      <section className="flex flex-col mt-20 gap-4 w-full max-w-3xl p-5">
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
            <HoverCard>
              <HoverCardTrigger>
                <NextjsPlain size={60} color="white" />
              </HoverCardTrigger>
              <HoverCardContent className="w-30">
                <p className="text-center">Next.js</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <ReactOriginal size={60} color="white" />
              </HoverCardTrigger>
              <HoverCardContent className="w-30">
                <p className="text-center">React</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <NestjsOriginal color="white" size={60} />
              </HoverCardTrigger>
              <HoverCardContent className="w-30">
                <p className="text-center">Nest.js</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <JavaPlain color="white" size={60} />
              </HoverCardTrigger>
              <HoverCardContent className="w-30">
                <p className="text-center">Java</p>
              </HoverCardContent>
            </HoverCard>
            <HoverCard>
              <HoverCardTrigger>
                <NodejsOriginal color="white" size={60} />
              </HoverCardTrigger>
              <HoverCardContent className="w-30">
                <p className="text-center">Node.js</p>
              </HoverCardContent>
            </HoverCard>
          </div>
          <p className="text-center text-xs">(As que mais gosto)</p>
        </div>

        <div className="flex flex-col gap-3">
          <p>Mas tambem sei:</p>
          <div className="flex flex-wrap gap-2">
            {techlogiesList.map((technology) => {
              return (
                <span
                  className="bg-zinc-800 px-2 py-1 rounded-md hover:bg-zinc-700 select-none"
                  key={technology}
                >
                  {technology}
                </span>
              );
            })}
          </div>
        </div>

        <h2 className="text-2xl font-bold pt-20">Meus projetos</h2>
        <div className="flex flex-wrap justify-center flex-row gap-4 mb-20">
          <Card className="w-80 h-72 shadow-lg shadow-black">
            <CardContent className="flex items-center justify-center pt-10">
              <Image
                src={logoAgriloggi}
                alt="Agriloggi"
                className="w-full h-full object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-5 items-center justify-end mt-4">
              <div className="flex flex-row gap-2">
                <NuxtjsOriginal size={30} color="white" />
                <MongodbOriginal size={30} color="white" />
                <JavascriptOriginal size={30} color="white" />
                <NodejsOriginal size={30} color="white" />
              </div>
              <Link
                href="https://agriloggi.com.br"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Link2 />
                <p className="text-xl text-center font-bold">Agriloggi</p>
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-80 h-72 shadow-lg shadow-black">
            <CardContent className="flex items-center justify-center pt-10">
              <Image
                src={logoEstudeMelhor}
                alt="Estude Melhor"
                className="w-24 h-24 object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-5 items-center justify-end mt-5">
              <div className="flex flex-row gap-2">
                <ReactOriginal size={30} color="white" />
                <NextjsPlain size={30} color="black" />
                <NestjsOriginal size={30} color="white" />
                <PostgresqlOriginal size={30} color="white" />
                <RedisOriginal size={30} color="white" />
                <TailwindcssOriginal size={30} color="white" />
              </div>
              <Link
                href="https://www.estudemelhor.org/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Link2 />
                <p className="text-xl text-center w-full font-bold">
                  Estude Melhor
                </p>
              </Link>
            </CardFooter>
          </Card>
          <Card className="w-80 h-72 shadow-lg shadow-black">
            <CardContent className="flex items-center justify-center pt-10">
              <Image
                src={labMaker}
                alt="Lab Maker"
                className="w-full h-full object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col gap-5 items-center justify-end mt-5">
              <div className="flex flex-row gap-2">
                <ReactOriginal size={30} color="white" />
                <NextjsPlain size={30} color="black" />
                <TailwindcssOriginal size={30} color="white" />
              </div>
              <Link
                href="https://front-lab-if-maker-user.vercel.app/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Link2 />
                <p className="text-xl text-center w-full font-bold">Lab Maker</p>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center p-3 justify-center fixed bottom-0 backdrop-blur bg-[#0a0a0ab9] w-full h-20">
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/joão-pedro-martins-de-oliveira-969712272"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          Linkedin
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/Martins-pedro23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github />
          Github
        </Link>
        <Link
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:martinsdeoliveira.pedro2@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Mail />
          Email
        </Link>
      </footer>
    </div>
  );
}
