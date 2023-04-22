import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles/index.module.css";
import HeroPanels from "../data/HeroPanels.json";

const Main = () => {
  return (
    <Parallax pages={3} className="bg-white">
      <ParallaxLayer speed={1} sticky={{ start: 0, end: 1 }} className="flex items-center">
        <div className="w-full h-full grid grid-cols-2">
          <div className="md:col-span-1 col-span-2 w-full h-full p-10 flex justify-center flex-col">
            <h1 className="text-4xl sm:text-5xl font-bold text-black">
              Hi i'm Ryan, <br />
              I am a full stack developer
            </h1>
            <p className="text-gray-700 mt-4">
              Meet a full-stack developer with a passion for innovation, sports,
              and music, with expertise in JavaScript, MongoDB, HTML, CSS, and a range of
              other programming languages and technologies.
            </p>

            {/* Skills */}
            <div className="mt-4 w-full h-fit flex flex-wrap gap-2 md:hidden">
              {HeroPanels.map(panel => (
                panel.map(section => (
                  <div key={`section-mobile-${section.id}`} className="w-fit h-fit p-4 py-2 rounded-lg bg-black" style={{ border: `1px solid ${section.border}` }}>
                    <p className="text-sm text-white">{section.title}</p>
                  </div>
                ))
              ))}
            </div>
          </div>

          <div className="w-full h-full p-10 bg-black hidden md:flex flex-col justify-evenly">
            {HeroPanels.map((panel, i) => (
              <div key={`panel-${i}`} className="w-full h-fit flex lg:flex-row flex-col gap-3 lg:gap-4">
                {panel.map((section, z) => (
                  <div
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
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </ParallaxLayer>

      <ParallaxLayer speed={1} sticky={{ start: 1, end: 2 }} offset={1} className="z-50">
        <div className="w-full h-full bg-white flex justify-center items-center">
          <h1 className="w-fit h-fit mx-auto p-0 text-black text-5xl font-bold">ABOUT ME</h1>
        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default Main;