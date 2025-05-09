function Program() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold  text-white mb-4">Programs</h1>
      <p className="mb-8 text-gray-300">
        These are the programs we offer to help you master creativity and
        technology:
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-[#242424] rounded-3xl px-4 py-6 bg-[#111111] drop-shadow-2xl">
          <h1 className="text-[#F9F1F7] text-lg font-bold">
            Video Editing Mastery
          </h1>
          <p className="text-[#F9F1F7] mt-4 text-sm">
            Learn the art of storytelling through video. From shooting basics to
            advanced editing with Adobe Premiere Pro and Final Cut, this course
            turns beginners into professional editors.
          </p>
        </div>

        <div className="border border-[#242424] rounded-3xl px-4 py-6 bg-[#111111] drop-shadow-2xl">
          <h1 className="text-[#F9F1F7] text-lg font-bold">
            Graphic Design Pro
          </h1>
          <p className="text-[#F9F1F7] mt-4 text-sm">
            Master color, layout, and branding with industry-standard tools like
            Photoshop and Illustrator. Build real-world design projects to
            launch your creative career.
          </p>
        </div>

        <div className="border border-[#242424] rounded-3xl px-4 py-6 bg-[#111111] drop-shadow-2xl">
          <h1 className="text-[#F9F1F7] text-lg font-bold">AI for Creatives</h1>
          <p className="text-[#F9F1F7] mt-4 text-sm">
            Discover how artificial intelligence is transforming design and
            content creation. Learn to use tools like MidJourney, ChatGPT, and
            Runway ML to boost your creativity and productivity.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Program;
