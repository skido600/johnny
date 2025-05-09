"use client";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section className="flex flex-col md:mt-[12rem] mt-[10rem]  justify-center items-center text-center px-4">
      <main className="max-w-4xl mx-auto">
        <div className="lg:w-[70%] w-[85%] m-auto">
          <div className="text-[#D1D5DB] flex items-center justify-center mb-4 gap-x-4 text-[20px] font-medium  md:text-base lg:text-lg">
            <p> Welcome to </p>
            <div>
              {" "}
              <h1 className="flex items-center text-white font-semibold text-[12px] md:text-[15px]">
                Johnny {"  "}
                <span className="text-2xl text-[#758173]">T</span>ech {"  "}
                <span className="text-2xl text-[#758173]">A</span>cademy
              </h1>
            </div>
          </div>
          <h3 className="text-3xl md:text-4xl mb-4 lg:text-5xl font-sans tracking-tight text-white font-[900] ">
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
            {/* <span className="text-blue-600">Consistency,</span> Achieve
            <span className="text-blue-600">Success.</span> */}
          </h3>
          <p className="text-[#D1D5DB] text-sm font-[400] md:text-base lg:text-lg mb-2">
            Learn cutting-edge skills and start your journey toward creative and
            technological excellence.
          </p>
          {/* <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
            Empowering the next generation in{" "}
          </h2> */}
          <p className="max-w-xl text-gray-600 text-base md:text-lg text-center"></p>
        </div>
      </main>
    </section>
  );
}

export default Hero;
