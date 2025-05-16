"use client";

import { Element } from "react-scroll";
import Swiper_slid from "./Swiper_slid";
type Data = {
  title: string;
  article: string;
};

type Props = {
  data: Data[];
};

function About_cli({ data }: Props) {
  return (
    <Element name="about-section">
      <main>
        <header className="space-y-6">
          <h1 className="text-4xl font-bold text-white text-center">
            About Johnny Tech
          </h1>
          <p className="text-center text-gray-300 mb-8">
            A future-ready academy empowering the next generation with
            real-world skills in video editing, design, and AI—blending
            creativity and technology for tomorrow&apos;s innovators.
          </p>
        </header>

        <section className="grid grid-cols-1 col-span-2 md:grid-cols-2 mx-2 my-1 md:mx-0 py-8 gap-6">
          {data.map((items, index) => (
            <article
              key={index}
              className="bg-[#111111] p-6 rounded-2xl border border-[#242424] hover:border-[#333333] transition-colors">
              <h2 className="text-xl font-semibold text-white mb-4">
                {items.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">{items.article}</p>
            </article>
          ))}
        </section>

        {/* Swiper Image Carousel Section */}
        <section className="mx-2 my-1 md:mx-0 py-8">
          <Swiper_slid />
        </section>
      </main>
    </Element>
  );
}

export default About_cli;
