import About_cli from "./client_comp/About_cli";

type Data = {
  title: string;
  article: string;
};

function About() {
  const data: Data[] = [
    {
      title: "Who Are We?",
      article:
        " Passionate team of creators, educators, and technologists committed to inspiring through hands-on digital education. Modern, practicallearning at its core.",
    },
    {
      title: "What We Do",
      article:
        "Immersive programs in video editing, graphic design, and AI tools. Step-by-step courses with mentorship for all skill levels.",
    },
    {
      title: "How We Help",
      article:
        "Job-ready programs with portfolio building, real-world projects, andcareer support through community and industry connections.",
    },
  ];
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-12">
      <About_cli data={data} />
    </main>
  );
}

export default About;
