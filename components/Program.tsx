import Program_cl from "./client_comp/Program_cl";
import Prices from "./Prices";

type Data = {
  title: string;
  article: string;
};

export default function ScrollProgram() {
  const data: Data[] = [
    {
      title: " Video Editing Mastery",
      article:
        "Learn the art of storytelling through video. From shooting basics to advanced editing with Adobe Premiere Pro and Final Cut, this course turns beginners into professional editors",
    },
    {
      title: "Graphic Design Pro",
      article:
        " Master color, layout, and branding with industry-standard tools like Photoshop and Illustrator. Build real-world design projects to launch your creative career",
    },
    {
      title: "AI for Creatives",
      article:
        " Discover how artificial intelligence is transforming design and content creation. Learn to use tools like MidJourney, ChatGPT, and Runway ML to boost your creativity and productivity.",
    },
  ];

  return (
    <>
      <main className="max-w-4xl mx-auto px-4 py-8">
        <Program_cl data={data} />
      </main>
      <Prices />
    </>
  );
}
