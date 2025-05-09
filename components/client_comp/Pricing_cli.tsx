type Data = {
  title: string;
  article: string;
  price: string;
  tip: string;
  li_1: string;
  li_2: string;
  li_3: string;
};

type Props = {
  data: {
    free: Data[];
    premium_1: Data[];
    premium_2: Data[];
  };
};

function Pricing_cli({ data }: Props) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {/* FREE CARDS */}
      {data.free.map((item, index) => (
        <div
          key={index}
          className="bg-[#111111] shadow-2xl border mx-2 my-1 md:mx-0 py-7 rounded-lg px-4 border-[#242424]">
          <h2 className="text-[#F9F1F7] text-lg font-bold mb-3">{item.tip}</h2>
          <p className="text-[#c3d2db] text-[15px] mb-3 font-bold">
            {item.title}
          </p>
          <ul className="text-[#c3d2db] text-sm list-none space-y-1">
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> {item.li_1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> {item.li_2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400">✓</span> {item.li_3}
            </li>
          </ul>
          <button className="px-6 py-2 mt-8 bg-[#314C2D] text-white rounded-full transition">
            Enroll Now
          </button>
        </div>
      ))}

      {/* PREMIUM 1 CARD */}
      {data.premium_1.map((item, index) => (
        <div
          key={index}
          className="bg-[#A9C5A0] border py-3 px-4 mx-2 my-1 md:mx-0 border-[#333333] rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-black text-lg font-bold mb-3">{item.tip}</h2>
            <p className="text-neutral-700 text-[15px] font-bold mb-1">
              {item.title}
            </p>
            <p className="text-neutral-700 text-sm mb-4">{item.article}</p>
          </div>

          <ul className="text-black text-sm list-none space-y-1 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#314C2D]">★</span> {item.li_1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#314C2D]">★</span> {item.li_2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#314C2D]">★</span> {item.li_3}
            </li>
          </ul>

          <button className="mt-auto bg-[#314C2D] md:w-64 text-white font-semibold py-2 px-4 rounded-full transition">
            Enroll Now
          </button>
        </div>
      ))}

      {/* PREMIUM 2 CARD */}
      {data.premium_2.map((item, index) => (
        <div
          key={index}
          className="bg-[#A9C5A0] border py-3 px-4 drop-shadow-2xl mx-2 my-1 md:mx-0 border-[#333333] rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-black text-lg font-bold mb-3">{item.tip}</h2>
            <p className="text-neutral-700 text-[15px] font-bold mb-1">
              {item.title}
            </p>
            <p className="text-neutral-700 text-sm mb-4">{item.article}</p>
          </div>

          <ul className="text-black text-sm list-none space-y-1 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-[#314C2D]">★</span> {item.li_1}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#314C2D]">★</span> {item.li_2}
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#314C2D]">★</span> {item.li_3}
            </li>
          </ul>

          <button className="mt-auto bg-[#314C2D] md:w-64 text-white font-semibold py-2 px-4 rounded-full transition">
            Enroll Now
          </button>
        </div>
      ))}
    </section>
  );
}

export default Pricing_cli;
