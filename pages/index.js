import styles from "../styles/index.module.css";
import HeroPanels from "../data/HeroPanels.json";
import Projects from "../data/Projects.json";
import { motion } from "framer-motion"
import { TypingEffect } from "@component/helpers/typing";
import { BsGithub, BsLink45Deg } from "react-icons/bs";
import { TbBrandNpm } from "react-icons/tb";

const Main = () => {
  const heroTitle = TypingEffect(["developer", "designer", "student"]);
  const LanguageLibrary = {
    PHP: "#4F5D95",
    JavaScript: "#b8a727",
    CSS: "#563d7c",
    HTML: "#e34c26",
    TailwindCSS: "rgb(14 165 233)",
    BootStrap: "712cf9",
    MySQL: "#000",
    MongoDB: "rgb(17, 97, 73)",
    NextJS: "#FFF"
  };

  return (
    <div className="bg-gray-950 h-fit w-full">
      <div className="flex items-center h-[100vh]">
        <div className="w-full h-full grid grid-cols-2">
          <div className="md:col-span-1 col-span-2 w-full h-full p-10 flex justify-center flex-col bg-gray-950">
            <h2 className="text-blue-500 font-bold text-xl">Hi i'm Ryan,</h2>
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              I am a <span>{heroTitle}</span>
            </h1>
            <p className="text-gray-400 mt-4">
              I'm full-stack developer with a passion for innovation, sports,
              and music, with lots of expertise in various technologies & programming langauges.
            </p>

            {/* Skills */}
            <div className="mt-4 w-full h-fit flex flex-wrap gap-2 md:hidden">
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

          <div className="w-full h-full p-10 bg-gray-950 hidden md:flex flex-col justify-evenly">
            {HeroPanels.map((panel, i) => (
              <div key={`panel-${i}`} className="w-full h-fit flex lg:flex-row flex-col gap-3 lg:gap-4">
                {panel.map((section, z) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ ease: "easeOut", duration: 0.7, delay: section.id / 10 }}

                    key={`panel-section-${z}`}
                    className={`w-full lg:w-${section.width} h-fit lg:h-32 rounded-lg p-4 lg:p-8 flex justify-center flex-col transition-all duration-500 ${styles.cardHover}`}
                    style={{ backgroundColor: section.color, border: `1px solid ${section.border}` }}
                  >
                    <div className="w-full h-fit flex lg:flex-col flex-row justify-between lg:justify-start lg:items-start items-center">
                      <h2 className="text-lg lg:text-2xl font-bold text-white text-left">
                        {section.title}
                      </h2>

                      <p className="text-sm text-gray-400">{section.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="min-h-[100vh] h-full w-full bg-gray-950">
        <div className="px-4 md:px-10 p-10 flex w-full h-full flex-col">
          <h1 className="text-4xl sm:text-5xl font-bold text-white text-right w-full mb-8">top projects</h1>

          <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 h-fit gap-4">
            {Projects.map(project => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: "easeOut", duration: 0.5, delay: project.id * 0.15 }}

                key={`project-${project.id}`}
                className="bg-gray-950 border-gray-800 border overflow-hidden rounded-lg w-full h-full relative"
              >
                {project.image && (
                  <div className="absolute w-full h-full top-0 opacity-25" style={{
                    backgroundImage: `url("${project.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }} />
                )}

                <div className="w-full h-full p-5 relative top-0 flex flex-col">
                  <h2 className="text-white text-3xl" style={{ fontFamily: "Open Sans" }}>{project.title}</h2>
                  <p className="text-gray-300 mt-4 text-sm">{project.description}</p>

                  <div className="w-full h-fit flex gap-2 mt-auto pt-4">
                    {project?.languages && project.languages.map(language => (
                      <div className="rounded-md h-fit w-fit py-1 px-2 text-white" style={{
                        backgroundColor: LanguageLibrary[language],
                        fontSize: "8px",
                        color: language == "NextJS" ? "#000" : "#FFF"
                      }} key={`language-${language}-project-${project.title}`}>
                        {language}
                      </div>
                    ))}
                  </div>

                  <div className="w-full h-fit flex gap-3 mt-4">
                    {project.github && (
                      <a href={project.github} className="w-6 h-6" target="_blank">
                        <BsGithub className="w-6 h-6 text-gray-300" />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} className="w-6 h-6" target="_blank">
                        <BsLink45Deg className="w-6 h-6 text-gray-300" />
                      </a>
                    )}
                    {project.npmjs && (
                      <a href={project.npmjs} className="w-6 h-6" target="_blank">
                        <TbBrandNpm className="w-6 h-6 text-gray-300" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ easy: "easeOut", duration: 0.5, delay: Projects.length * 0.15 }}
              className="bg-gray-950 overflow-hidden flex justify-center items-center rounded-lg w-full h-full relative"
            >
              <a href="https://github.com/Mangoz1x?tab=repositories" target="_blank" className="bg-blue-500 flex gap-4 px-6 py-3 rounded-lg">
                View More
                <BsGithub className="w-6 h-6 text-white" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="z-50 h-[100vh]">
        <div className="w-full h-full bg-gray-950 flex flex-col p-10">
          <div className="flex flex-col h-full w-full px-6 sm:px-0 sm:w-3/4 md:w-2/3">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0 }}
              className="w-fit h-fit p-0 text-white text-4xl sm:text-5xl font-bold"
            >
              about me
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.2 }}

              className="text-gray-400 mt-4"
            >
              I'm a full-stack developer with a diverse skill set,
              including expertise in JavaScript, MongoDB, HTML, CSS,
              Python, and AI. I'm passionate about creating custom
              web applications and pursuing my hobbies, like DJing
              and 3D printing. With a focus on quality and attention
              to detail, I'm committed to delivering results that
              exceed expectations and help my clients achieve their
              goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeOut", duration: 0.5, delay: 0.4 }}
              className="w-fit h-fit mt-8"
            > 
              <a href="https://github.com/Mangoz1x/" target="_blank">
                <BsGithub className="w-8 h-8 text-white" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;