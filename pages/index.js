import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";

import Typewriter from "reactjs-typewriter-effect";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="relative bg-primary/60 h-full w-full">
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute right-[-25%] mix-blend-color-dodge translate-z-o"></div>
      <div className="w-full h-full absolute right-0 bottom-0">
        <ParticlesContainer />
      </div>
      <div className="relative z-10 flex items-center md:justify-center lg:justify-start container h-full xl:max-w-[1300px] mx-auto">
        <div className="text-center lg:text-left">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Transforming Ideas <br />
            <Typewriter
              words={[
                { text: "Into Digital Reality", styles: [] },
                {
                  text: "Hi, The name's Mukul Sharma",
                  styles: [
                    {
                      start: 15,
                      end: 27,
                      color: "white",
                      fontWeight: "bold",
                    },
                  ],
                },
                {
                  text: "<ButLovesToCodeMore />",
                  styles: [],
                },
              ]}
              typingInterval={150}
              deletingInterval={100}
              pauseTime={200}
              loop={true}
              color="#f13024"
              cursorStyle="|"
              fontName="Averia Libre"
            />
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full md:max-w-lg xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            I specialize in web development, with expertise in technologies like
            React.js and Next.js. I’m focused on improving my skills and
            delivering results that contribute to your company’s success.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
