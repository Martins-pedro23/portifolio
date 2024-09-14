"use client";

import { TypeAnimation } from "react-type-animation";
import {
  Linkedin,
  Github,
  Mail,
  ChevronDown,
  Link2,
  Phone,
  Instagram,
} from "lucide-react";
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
  PostgresqlPlain,
} from "devicons-react";
import background from "/videos/background.mp4";
import BackgroundVideo from "next-video/background-video";
import logoAgriloggi from "./public/images/agriloggiLogo.png";
import logoEstudeMelhor from "./public/images/logoEstudeMelhor.svg";
import labMaker from "./public/images/LabIFMaker4.png";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const techlogiesList = [
  "Nest.js",
  "Next.js",
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
  "Redis",
];

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

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
              className="animate-move-up-and-down cursor-pointer w-20 h-16 border-2 border-white rounded-full"
              onClick={() => {
                const aboutMeSection = document.getElementById("about-me");
                if (aboutMeSection) {
                  aboutMeSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            />
          </div>
        </main>
      </BackgroundVideo>

      <div className="h-28 w-full absolute bottom-[-60px] left-0 z-10 bg-gradient-to-b from-transparent to-[#0a0a0a] via-[#0a0a0a]  "></div>

      <section
        id="about-me"
        className="flex flex-col mt-20 gap-4 w-full max-w-3xl p-5"
      >
        <h2 className="text-2xl font-bold">Sobre mim</h2>
        <p className="text-md text-justify hyphens-auto drop-shadow-xl">
          Sou estudante de Informática no Instituto Federal de São Paulo, Campus
          Itapetinga. Sempre fui apaixonado por tecnologia, e comecei a
          programar cedo para criar mods para o Minecraft. Neste processo,
          passei por tecnologias como Python, na qual fiz um chatbot e tive que
          aprender a mexer com linux. A vontade de querer se aprofundar e entrar
          mais profundamente a tecnologia foi o motivo que me fez entrar no IFSP
          no curso de Tecnico em Informática, o qual hoje, estou no 4º período.
          Durante meu curso tive a oportunidade de conhecer varias tecnologias
          como HTML, CSS, JavaScript, PHP, C, MySQL, MongoDB e pude aprofundar
          meus conhecimentos em Python e Java. Atualmente, estou focado em
          aprimorar minhas habilidades em Next.js, Nest.js e React.
        </p>

        <h2 className="text-2xl font-bold pt-20">Tecnologias</h2>
        <div className="flex justify-center flex-col">
          <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center sm:justify-center justify-items-center gap-4 my-4 mx-5 sm:mx-0">
            <NextjsPlain size={60} color="white" />

            <PostgresqlPlain size={60} color="white" />

            <ReactOriginal size={60} color="white" />

            <NestjsOriginal color="white" size={60} />

            <JavaPlain color="white" size={60} />

            <NodejsOriginal color="white" size={60} />
          </div>
          <p className="text-sm text-center">
            As tecnologias que eu mais utilizo no momento
          </p>
        </div>

        <div className="flex flex-col gap-3">
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

        <h2 className="text-2xl font-bold pt-20">Outras habilidades</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <div className="flex items-center gap-2">
            <Checkbox
              id="git"
              checked={true}
              style={{ backgroundColor: "green", pointerEvents: "none" }}
            />
            <label
              htmlFor="git"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Git
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="docker"
              checked={true}
              style={{ backgroundColor: "green", pointerEvents: "none" }}
            />
            <label
              htmlFor="docker"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Docker
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="scrum"
              checked={true}
              style={{ backgroundColor: "green", pointerEvents: "none" }}
            />
            <label
              htmlFor="scrum"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Scrum
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="clean-architecture"
              checked={true}
              style={{ backgroundColor: "green", pointerEvents: "none" }}
            />
            <label
              htmlFor="clean-architecture"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Arquitetura de MVC
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              id="solid"
              checked={true}
              style={{ backgroundColor: "green", pointerEvents: "none" }}
            />
            <label
              htmlFor="solid"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Arquitetura SOLID
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={true}
              style={{ backgroundColor: "green", pointerEvents: "none" }}
              id="clean-architecture"
            />
            <label
              htmlFor="clean-architecture"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Clean Architecture
            </label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={true}
              style={{ backgroundColor: "green", pointerEvents: "none" }}
              id="clean-code"
            />
            <label
              htmlFor="clean-code"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Clean Code
            </label>
          </div>
        </div>

        <h2 className="text-2xl font-bold pt-20">Idiomas</h2>
        <div className="grid grid-cols-3  sm:grid-cols-6 gap-4 w-full items-center">
          <span className="bg-zinc-800 px-2 py-1  rounded-md hover:bg-zinc-700 select-none text-center">
            Inglês
          </span>
          <Progress
            value={95}
            className="w-full h-2 sm:col-span-4"
            style={{ backgroundColor: "white" }}
          />
          <span className=" text-sm select-none">avançado</span>
          <span className="bg-zinc-800 px-2 py-1 rounded-md hover:bg-zinc-700 select-none text-center">
            Espanhol
          </span>
          <Progress
            value={30}
            className="w-full h-2 sm:col-span-4"
            style={{ backgroundColor: "white" }}
          />
          <span className=" text-sm select-none">básico</span>
        </div>

        <h2 className="text-2xl font-bold pt-20">Meus projetos</h2>
        <div className="flex flex-wrap justify-center flex-row gap-4 mb-20">
          <div
            className="w-80 h-72 bg-[#e2e2e2bb] cursor-pointer rounded-xl border-[0.5px] border-white shadow-2xl"
            onClick={() => {
              window.open("https://agriloggi.com.br", "_blank");
            }}
          >
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
          </div>
          <div
            className="w-80 h-72 bg-[#e2e2e2bb] cursor-pointer rounded-xl border-[0.5px] border-white shadow-2xl"
            onClick={() => {
              window.open("https://www.estudemelhor.org/", "_blank");
            }}
          >
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
          </div>
          <div
            className="w-80 h-72 bg-[#e2e2e2bb] cursor-pointer rounded-xl border-[0.5px] border-white shadow-2xl"
            onClick={() => {
              window.open(
                "https://front-lab-if-maker-user.vercel.app/",
                "_blank"
              );
            }}
          >
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
                <Link2 color="black" />
                <p className="text-xl text-center w-full font-bold text-black">
                  Lab Maker
                </p>
              </Link>
            </CardFooter>
          </div>
        </div>
      </section>

      <footer className="z-20 flex gap-6 flex-wrap items-center p-2 justify-center fixed bottom-0 backdrop-blur bg-[#0a0a0ab9] w-full h-20">
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

        {isDesktop ? (
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <Mail />
                Contato
              </div>
            </DialogTrigger>
            <DialogContent className="bg-zinc-950">
              <DialogHeader>
                <DialogTitle>
                  <div className="flex justify-center content-center w-full">
                    <div className="flex flex-col gap-4 w-3/5">
                      <h1 className="text-2xl font-bold text-center mb-5">
                        Meus contatos
                      </h1>
                    </div>
                  </div>
                </DialogTitle>
                <DialogDescription>
                  <div className="flex justify-center content-center w-full mb-10 mx-3">
                    <div className="flex flex-col gap-4 w-full sm:w-3/5">
                      <div className="flex flex-row gap-2 items-center w-full">
                        <Phone />
                        <span className="text-sm text-[#ededed]">
                          (15) 99705-4050
                        </span>
                      </div>
                      <div className="flex flex-row gap-2 items-center w-full">
                        <Mail />
                        <span className="text-sm text-[#ededed]">
                          martinsdeoliveira.pedro2@gmail.com
                        </span>
                      </div>
                      <div className="flex flex-row gap-2 items-center w-full">
                        <Instagram />
                        <span className="text-sm text-[#ededed]">
                          @jp_martins.23
                        </span>
                      </div>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ) : (
          <Drawer>
            <DrawerTrigger>
              <div className="flex items-center gap-2 hover:underline hover:underline-offset-4">
                <Mail />
                Contato
              </div>
            </DrawerTrigger>
            <DrawerContent className="bg-zinc-950">
              <DrawerHeader>
                <DrawerTitle>
                  <div className="flex justify-center content-center w-full">
                    <div className="flex flex-col gap-4 w-3/5">
                      <h1 className="text-2xl font-bold text-center mb-5">
                        Meus contatos
                      </h1>
                    </div>
                  </div>
                </DrawerTitle>
                <DrawerDescription>
                  <div className="flex justify-center content-center w-full mb-10 mx-3">
                    <div className="flex flex-col gap-4 w-full sm:w-3/5">
                      <div className="flex flex-row gap-2 items-center w-full">
                        <Phone />
                        <span className="text-sm text-[#ededed]">
                          (15) 99705-4050
                        </span>
                      </div>
                      <div className="flex flex-row gap-2 items-center w-full">
                        <Mail />
                        <span className="text-sm text-[#ededed]">
                          martinsdeoliveira.pedro2@gmail.com
                        </span>
                      </div>
                      <div className="flex flex-row gap-2 items-center w-full">
                        <Instagram />
                        <span className="text-sm text-[#ededed]">
                          @jp_martins.23
                        </span>
                      </div>
                    </div>
                  </div>
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter></DrawerFooter>
            </DrawerContent>
          </Drawer>
        )}
      </footer>
    </div>
  );
}
