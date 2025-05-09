"use client";

type Data = {
  title: string;
  article: string;
};

type Props = {
  data: Data[];
};

function Program_cl({ data }: Props) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {data.map((item, index) => (
        <div
          key={index}
          className="border border-[#242424] rounded-3xl px-6 mx-2 my-1 md:mx-0 py-8 bg-[#111111] drop-shadow-2xl">
          <h1 className="text-[#F9F1F7] text-lg font-bold">{item.title}</h1>
          <p className="text-[#F9F1F7] mt-4 text-sm">{item.article}</p>
        </div>
      ))}
    </section>
  );
}

export default Program_cl;
