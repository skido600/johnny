import Pricing_cli from "./client_comp/Pricing_cli";

type Data = {
  title: string;
  article: string;
  price: string;
};
const data: Data[] = [
  {
    title: " Video Editing Mastery",
    price: "$499",
    article:
      " Complete video editing course from beginner to pro, covering all the key tools like Adobe Premiere Pro and Final Cut.",
  },
  {
    title: "Graphic Design Pro",
    price: "$399",
    article:
      " Master graphic design concepts, tools like Photoshop andIllustrator, and gain hands-on experience creating real-worldprojects.",
  },
  {
    title: "AI for Creatives",
    price: "$599",
    article:
      " Learn how to leverage AI tools like MidJourney, Runway ML, and ChatGPT for creative projects to automate and innovate.",
  },
];
function Prices() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-center text-white">
        Our Pricing
      </h1>
      <p className="text-center text-gray-300 mb-8">
        Choose the best plan that suits your goals. All programs come with
        lifetime access to learning materials and community support.
      </p>
      <Pricing_cli data={data} />
    </main>
  );
}

export default Prices;
