"use client";
import { Typewriter } from "react-simple-typewriter";
import { Element } from "react-scroll";

function Hero_cli() {
  return (
    <Element name="home">
      <main className="max-w-4xl mx-auto">
        <div className="lg:w-[70%] w-[85%] m-auto">
          <div className="text-[#D1D5DB] flex items-center justify-center mb-4 gap-x-4 text-[20px] font-medium  md:text-base lg:text-lg">
            <p> Welcome to </p>{" "}
            <h1 className="flex items-center text-white font-semibold text-[12px] md:text-[15px]">
              Johnny {"  "}
              <span className="text-2xl text-[#758173]">T</span>ech {"  "}
              <span className="text-2xl text-[#758173]">A</span>cademy
            </h1>
          </div>
          <h2 className="text-3xl md:text-4xl mb-4 lg:text-5xl font-sans tracking-tight text-white font-[900] ">
            Empowering the next generation in{" "}
            <span className="text-[#758173]">
              <Typewriter
                words={[
                  "Video Editing",
                  "Graphic Design",
                  "Artificial Intelligence",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <p className="text-[#D1D5DB] text-sm font-[400] md:text-base lg:text-lg mb-2">
            Learn cutting-edge skills and start your journey toward creative and
            technological excellence.
          </p>

          <p className="max-w-xl text-gray-600 text-base md:text-lg text-center"></p>
        </div>
      </main>{" "}
    </Element>
  );
}

export default Hero_cli;
