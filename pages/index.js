import styles from "../styles/index.module.css";
import HeroPanels from "../data/HeroPanels.json";
import Projects from "../data/Projects.json";
import { motion } from "framer-motion"
import { TypingEffect } from "@component/helpers/typing";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { TbBrandNpm } from "react-icons/tb";
import { useEffect, useState } from "react";

const Main = () => {
  const [windowHash, setWindowHash] = useState(null);
  const heroTitle = TypingEffect(["developer", "designer", "student"]);

  const Navigation = [
    {
      id: "title",
      href: "#title",
      content: "TITLE"
    },
    {
      id: "about",
      href: "#about",
      content: "ABOUT"
    },
    {
      id: "expertise",
      href: "#expertise",
      content: "EXPERTISE"
    },
    {
      id: "projects",
      href: "#projects",
      content: "PROJECTS"
    }
  ];

  const Expertise = [
    {
      title: "AutoCAD & AutoDesk",
      roles: ["Academic - TIJ201", "2023"],
      description: "Grade 9 Exploring Technologies course, during this course I have developed experience with CAD software like AutoCAD, TinkerCAD, and LightBurn. I learnt CNC programming and created multiple things such as laser-etched clock faces, CNC wood designes, and bottle rockets.",
      aspects: ["Technologies", "CNC", "CAD Software"]
    },
    {
      title: "Arduino & Computer Hardware",
      roles: ["Hobby", "2022-CURRENT"],
      description: "I have experience building with Arduino controllers, Raspberry Pi's and desktop hardware. I have built multiple desktops, and learnt in depth what every part of the computer does and how it functions.",
      aspects: ["Technologies", "Computer Hardware", "Code", "Arduino", "Raspberry Pi"]
    },
    {
      title: "3D Printing",
      roles: ["Hobby", "2023"],
      description: "I have expertise with 3D printing and 3d printing software such as TinkerCAD, and Cura.",
      aspects: ["3D Design", "3D Printing", "TinkerCAD", "Cura"]
    },
    {
      title: "Music Production",
      roles: ["Hobby", "2020-CURRENT"],
      description: "I have learnt how to use software like FL Studio, GarageBand, SeratoDJ, along with hardware like the MCX8000, NewMark DJ Controllers and many more.",
      aspects: ["Music", "FL Studio", "GarageBand", "SeratoDJ", "DJ Controller"]
    }
  ]

  useEffect(() => {
    // Fetch current hash from the URL
    const hash = window.location.hash;

    const scrollHandler = () => {
      for (let i = Navigation.length - 1; i >= 0; i--) {
        const navItem = Navigation[i];
        const element = document.getElementById(navItem.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            if (window.location.hash !== navItem.href) {
              setWindowHash(navItem.href);
              window.history.pushState(null, null, navItem.href);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", scrollHandler);

    // Check if a hash exists in the URL
    if (hash) setWindowHash(hash);

    // Cleanup scroll event on unmount
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };

  }, [typeof window !== 'undefined' ? window?.location?.hash : null]);

  return (
    <div className="bg-gray-950 h-fit w-full flex">
      <div className="md:flex hidden px-5 pt-10 lg:p-10 lg:pr-20 justify-start sticky left-0 top-0 h-screen">
        <div className="w-fit flex flex-col gap-2">
          {Navigation.map((item, index) => (
            <a href={item.href} key={`navigation-${index}`} className={`flex w-full items-center group ${windowHash === item.href ? "text-white" : "text-gray-400"}`}>
              <div className={`border-b h-fit ${windowHash === item.href ? "border-gray-200 w-12" : "border-gray-400 w-8"} mr-3 group-hover:w-12 group-hover:border-gray-200 transition-all`}></div>
              <span className="group-hover:text-white transition-all">{item.content}</span>
            </a>
          ))}

          <div className="opacity-0 mt-auto flex w-full items-center">
            <div className={`border-b h-fit w-12 mr-3 group-hover:w-12 group-hover:border-gray-200 transition-all`}></div>
            <span className="group-hover:text-white transition-all">EXPERTISE</span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center h-screen w-full overflow-hidden" id="title">
          <div className="w-full h-full flex items-center">
            <div className="h-full w-fit border-r border-gray-800 mt-20 hidden md:block"></div>

            <div className="w-full md:w-full lg:w-4/5 xl:w-2/3 h-full p-10 flex justify-center flex-col bg-gray-950">
              <h2 className="text-blue-500 font-bold text-xl">Hi i'm Ryan,</h2>
              <h1 className="text-4xl sm:text-6xl font-bold text-white">
                I am a <span>{heroTitle}</span>
              </h1>
              <p className="text-gray-400 mt-4">
                I'm a full-stack developer with a passion for innovation, sports,
                and music. I have lots of expertise with various technologies & programming langauges.
              </p>

              {/* Skills */}
              <div className="mt-4 w-full md:w-4/5 h-fit flex flex-wrap gap-2">
                {HeroPanels.map(panel => (
                  panel.map((section, index) => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 0.7, delay: section.id / 10 }}

                      key={`section-mobile-${index}`}
                      className="w-fit h-fit p-4 py-2 rounded-lg bg-black"
                      style={{ border: `1px solid ${section.border}` }}
                    >
                      <p className="text-sm text-white">{section.title}</p>
                    </motion.div>
                  ))
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="min-h-screen h-fit flex w-full items-center relative overflow-hidden" id="about">
        <div className="mt-10 absolute top-0 bottom-0 w-[1px] bg-gray-800"></div>

          <div className="flex flex-col w-full md:w-full lg:w-4/5 xl:w-2/3 p-10 h-fit min-h-screen">
            <h1 className="text-4xl md:text-6xl text-white font-bold">About</h1>

            <p className="text-gray-400 text-md mt-4">
              I'm <span className="text-white">Ryan</span>
              , a 15-year-old tech enthusiast who found a passion for tech at 10. 
              My initial interests in electricity and motors led me to coding. 
              Before that, I explored music production with GarageBand and FL Studio, 
              which I shared on my first YouTube channel,&nbsp;
              <a href="https://www.youtube.com/@mangomusic8313" target="_blank" className="text-blue-500">Mango Music</a>.
              <br/><br/>
              My interest in tech led me to <span className="text-white">JavaScript</span>&nbsp;
              and my first website, intended for mixing beats. This project introduced me to&nbsp;
              <span className="text-white">servers, databases, networking, and platforms like Hostinger and cPanel hosts</span>.
              I expanded my knowledge to&nbsp;
              <span className="text-white">
                PHP for server-side scripting, 
              </span>&nbsp;
              leading to my first file uploading site,&nbsp;
              <a href="https://achive.mangoz1x.com/Site/Upl" className="text-blue-500" target="_blank">PHP Upload</a>&nbsp;
              This experience sparked my love for coding.
              <br/><br/>
              I later rebuilt the site using&nbsp;
              <span className="text-white">JavaScript and Node.js</span>, resulting in&nbsp;
              <a href="https://mangoz1x.com" className="text-blue-500" target="_blank">Mangoz1x</a>. During this time, 
              I developed my own&nbsp;<span className="text-white">ODM and ORM for MySQL and MongoDB</span>. All my projects are shared on my&nbsp;
              <a href="https://github.com/Mangoz1x/" className="text-blue-500" target="_blank">GitHub</a>.
              <br/><br/>
              My first professional project was a website for&nbsp;
              <a href="https://archive.mangoz1x.com/Site/Dezar/" className="text-blue-500" target="_blank">DezarInc</a>. Later, I built a full-stack eCommerce platform, 
              &nbsp;<a href="https://justpix.mangoz1x.com" target="_blank" className="text-blue-500">JustPix</a>, with features like discounts, gift cards, and multiple account types. I've also worked on side projects like 
              &nbsp;<a href="https://github.com/Mangoz1x/GitAutoDeploy" target="_blank" className="text-blue-500">GitAutoDeploy</a>&nbsp;and trained object detection models for AI projects.
              <br/><br/>
              Outside tech, I'm on a weight loss journey through weight lifting. I've also returned to music with my successful YouTube channel, 19M.
              <br/><br/>
              While building PHP Upload and&nbsp;<a href="https://justpix.mangoz1x.com" target="_blank" className="text-blue-500">JustPix</a>, I learned to use Microsoft Azure, Apache, Gravit Design, and Figma. I hope I have sparked your interest!
            </p>
          </div>
        </div>

        <div className="min-h-screen h-fit flex w-full items-center relative overflow-hidden" id="expertise">
          <div className="mt-10 absolute top-0 bottom-0 w-[1px] bg-gray-800"></div>

          <div className="flex flex-col w-full md:w-full lg:w-4/5 xl:w-2/3 p-5 h-fit min-h-screen">
            <h1 className="text-4xl md:text-6xl text-white font-bold p-5">Expertise</h1>

            <div className="flex flex-col mt-6 w-full gap-8">
              {Expertise.map((experience, index) => (
                <div key={`experience-${index}`} className="transition-all border border-gray-950 hover:border-gray-800 w-full h-fit p-5 rounded-md hover:bg-gray-900">
                  <h2 className="text-lg font-bold font-inter text-gray-200">{experience.title}</h2>
                  <span className="text-lg text-gray-600 text-sm">• {experience.roles.join(" • ")}</span>

                  <p className="text-gray-400 mt-2 text-md">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap w-full h-fit mt-4 gap-2">
                    {experience.aspects.map((aspect, index) => (
                      <div key={`experience-${index}-aspect-${index}`} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {aspect}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="min-h-screen h-fit flex w-full items-center relative overflow-hidden" id="projects">
          <div className="mt-10 absolute top-0 bottom-0 w-[1px] bg-gray-800"></div>

          <div className="flex flex-col w-full md:w-full lg:w-4/5 xl:w-2/3 p-5 h-fit min-h-screen">
            <h1 className="text-4xl md:text-6xl text-white font-bold p-5">Projects</h1>

            <div className="flex flex-col mt-6 w-full gap-8">
              {Projects.filter(({ image }) => image).map((project, index) => (
                <div key={`project-${index}`} className="flex transition-all border border-gray-950 hover:border-gray-800 w-full h-fit p-5 rounded-md hover:bg-gray-900">
                  <div className="w-fit h-fit mr-4">
                    <div className="bg-gray-800 border border-gray-800 w-28 h-16 rounded-md md:block hidden"
                      style={{
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                      }} />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold font-inter text-gray-200">
                      {project.title}
                      <span className="text-lg text-gray-600 text-sm"> • {project?.date}</span>
                    </h2>

                    <p className="text-gray-400 mt-2 text-md">
                      {project.description}
                    </p>

                    <div className={`mt-4 items-center ${!(project?.github || project?.link || project?.npmjs) ? "hidden" : "flex"} gap-3`}>
                      {project.github && (
                        <a href={project.github} target="_blank">
                          <BsGithub className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                        </a>
                      )}

                      {project.npmjs && (
                        <a href={project.npmjs} target="_blank">
                          <TbBrandNpm className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                        </a>
                      )}

                      {project.link && (
                        <a href={project.link} target="_blank">
                          <BsLink45Deg className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap w-full h-fit mt-4 gap-2">
                      {project.languages.map((aspect, index) => (
                        <div key={`project-${index}-aspect-${index}`} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {aspect}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <span className="px-5 text-blue-500 font-bold text-xl mt-8">
              Mini Projects & Dependencies
            </span>

            <div className="flex flex-col w-full h-fit py-5">
              {Projects.filter(({ image }) => !image).map((project, index) => (
                <div key={`mini-project-${index}`} className="flex transition-all border border-gray-950 hover:border-gray-800 w-full h-fit p-5 rounded-md hover:bg-gray-900">
                  <div>
                    <h2 className="text-lg font-bold font-inter text-gray-200">
                      {project.title}
                      <span className="text-lg text-gray-600 text-sm"> • {project?.date}</span>
                    </h2>

                    <p className="text-gray-400 mt-2 text-xs">
                      {project.description}
                    </p>

                    <div className={`mt-4 items-center ${!(project?.github || project?.link || project?.npmjs) ? "hidden" : "flex"} gap-3`}>
                      {project.github && (
                        <a href={project.github} target="_blank">
                          <BsGithub className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                        </a>
                      )}

                      {project.npmjs && (
                        <a href={project.npmjs} target="_blank">
                          <TbBrandNpm className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                        </a>
                      )}

                      {project.link && (
                        <a href={project.link} target="_blank">
                          <BsLink45Deg className="w-4 h-4 text-gray-400 hover:text-gray-200" />
                        </a>
                      )}
                    </div>

                    <div className="flex flex-wrap w-full h-fit mt-4 gap-2">
                      {project.languages.map((aspect, index) => (
                        <div key={`mini-project-${index}-aspect-${index}`} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                          {aspect}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://github.com/Mangoz1x/" target="_blank" className="btn bg-blue-500 border-none hover:bg-blue-600 flex items-center justify-center text-center gap-4 py-3 px-8 w-fit h-fit rounded-md transition-all">
              <BsGithub className="w-4 h-4" />
              GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;