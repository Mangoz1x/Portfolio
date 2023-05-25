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
      id: "experiences",
      href: "#experiences",
      content: "EXPERIENCES"
    },
    {
      id: "projects",
      href: "#projects",
      content: "PROJECTS"
    }
  ];

  const Experiences = [
    {
      title: "This is my experience",
      roles: ["Lead Enginere", "Production Manager"],
      description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      aspects: ["React", "Tailwind"]
    },
    {
      title: "This is my experience",
      roles: ["Lead Enginere", "Production Manager"],
      description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      aspects: ["React", "Tailwind"]
    },
    {
      title: "This is my experience",
      roles: ["Lead Enginere", "Production Manager"],
      description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      aspects: ["React", "Tailwind"]
    },
    {
      title: "This is my experience",
      roles: ["Lead Enginere", "Production Manager"],
      description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      aspects: ["React", "Tailwind"]
    },
    {
      title: "This is my experience",
      roles: ["Lead Enginere", "Production Manager"],
      description: "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      aspects: ["React", "Tailwind"]
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
            <span className="group-hover:text-white transition-all">EXPERIENCES</span>
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
                I'm full-stack developer with a passion for innovation, sports,
                and music, with lots of expertise in various technologies & programming langauges.
              </p>

              {/* Skills */}
              <div className="mt-4 w-full md:w-4/5 h-fit flex flex-wrap gap-2">
                {HeroPanels.map(panel => (
                  panel.map(section => (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ ease: "easeOut", duration: 0.7, delay: section.id / 10 }}

                      key={`section-mobile-${section.id}`}
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

        <div className="h-screen flex w-full items-center overflow-hidden" id="about">
          <div className="mt-20 h-full w-fit border-r border-gray-800 hidden md:block"></div>

          <div className="flex flex-col w-full md:w-full lg:w-4/5 xl:w-2/3 p-10 h-fit min-h-screen">
            <h1 className="text-4xl md:text-6xl text-white font-bold">About</h1>

            <p className="text-gray-400 text-md mt-4">
              Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a student-led design studio, and a huge corporation.
              <br /><br />
              My main focus these days is building products and leading projects for our clients at Upstatement. In my free time I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
              <br /><br />
              When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
            </p>
          </div>
        </div>

        <div className="min-h-screen h-fit flex w-full items-center relative overflow-hidden" id="experiences">
          <div className="mt-10 absolute top-0 bottom-0 w-[1px] bg-gray-800"></div>

          <div className="flex flex-col w-full md:w-full lg:w-4/5 xl:w-2/3 p-5 h-fit min-h-screen">
            <h1 className="text-4xl md:text-6xl text-white font-bold p-5">Experiences</h1>

            <div className="flex flex-col mt-6 w-full gap-8">
              {Experiences.map((experience, index) => (
                <div key={`experience-${index}`} className="transition-all border border-gray-950 hover:border-gray-800 w-full h-fit p-5 rounded-md hover:bg-gray-900">
                  <h2 className="text-lg font-bold font-inter">{experience.title}</h2>
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
              {Projects.map((project, index) => (
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
                    <h2 className="text-lg font-bold font-inter">{project.title}</h2>

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;