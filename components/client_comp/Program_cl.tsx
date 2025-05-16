"use client";
import { Element } from "react-scroll";
type Data = {
  title: string;
  article: string;
};

type Props = {
  data: Data[];
};

function Program_cl({ data }: Props) {
  return (
    <Element name="programs-section">
      <section>
        <h1 className="text-3xl font-bold text-white mb-4">Programs</h1>
        <p className="mb-8 text-gray-300">
          These are the programs we offer to help you master creativity and
          technology:
        </p>
        <article className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item, index) => (
            <div
              key={index}
              className="border border-[#242424] rounded-lg px-6 mx-2 my-1 md:mx-0 py-8 bg-[#111111] drop-shadow-2xl">
              <h1 className="text-[#F9F1F7] text-lg font-bold">{item.title}</h1>
              <p className="text-[#F9F1F7] mt-4 text-sm">{item.article}</p>
            </div>
          ))}
        </article>
      </section>
    </Element>
  );
}

export default Program_cl;
