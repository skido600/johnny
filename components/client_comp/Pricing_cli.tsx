"use client";
type Data = {
  title: string;
  article: string;
  price: string;
};

type Props = {
  data: Data[];
};

function Pricing_cli({ data }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <article
          key={index}
          className="border border-[#242424] rounded-3xl mx-2 my-1 md:mx-0 py-8 px-6  bg-[#111111] drop-shadow-2xl">
          <h2 className="text-[#F9F1F7] text-xl font-bold mb-4">
            {item.title}
          </h2>
          <p className="text-[#F9F1F7] text-lg mb-6">{item.price}</p>
          <p className="text-[#F9F1F7] text-sm mb-4">{item.article}</p>
          <button className="px-6 py-2 bg-[#C6DEC6] text-black rounded-full transition">
            Enroll Now
          </button>
        </article>
      ))}
    </section>
  );
}

export default Pricing_cli;
