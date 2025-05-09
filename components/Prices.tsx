import Pricing_cli from "./client_comp/Pricing_cli";

interface Course {
  title: string;
  price: string;
  article: string;
  tip: string;
  li_1: string;
  li_2: string;
  li_3: string;
}

interface Plans {
  free: Course[];
  premium_1: Course[];
  premium_2: Course[];
}
const data: Plans = {
  free: [
    {
      tip: "Free",
      title: "Graphic Design Pro",
      price: "$399",
      article:
        "Master graphic design concepts, tools like Photoshop and Illustrator, and gain hands-on experience creating real-world projects.",
      li_1: " Access to basic templates",
      li_2: "Limited cloud storage",
      li_3: "24/7 priority support",
    },
  ],
  premium_1: [
    {
      tip: "  premium",
      title: "Video Editing Mastery",
      price: "$499",
      article:
        "Complete video editing course from beginner to pro, covering all the key tools like Adobe Premiere Pro and Final Cut.",
      li_1: " Access to basic templates",
      li_2: "Limited cloud storage",
      li_3: "24/7 priority support",
    },
  ],
  premium_2: [
    {
      tip: "  premium",
      title: "AI for Creatives",
      price: "$599",

      article:
        "Learn how to leverage AI tools like MidJourney, Runway ML, and ChatGPT for creative projects to automate and innovate.",
      li_1: "Unlimited templates",
      li_2: "1TB cloud storage",
      li_3: "24/7 priority support",
    },
  ],
};
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
