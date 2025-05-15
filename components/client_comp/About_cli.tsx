"use client";
import Image from "next/image";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
type Data = {
  title: string;
  article: string;
};

type Props = {
  data: Data[];
};

const images = [
  "/WE/andrea-de-santis-zwd435-ewb4-unsplash.jpg",
  "/WE/steve-johnson-_0iV9LmPDn0-unsplash.jpg",
  "/WE/igor-omilaev-eGGFZ5X2LnA-unsplash.jpg",
  "/WE/jakob-owens-EWaoo-i7qIs-unsplash.jpg",
  "/WE/julien-tromeur-FYOwBvRb2Mk-unsplash.jpg",
  "/WE/neeqolah-creative-works-n_Gd5nnamnw-unsplash.jpg",
  "/WE/peter-olexa-okKjoUQNVDg-unsplash.jpg",
  "/WE/peter-stumpf-yk9VXp4W5-Q-unsplash.jpg",
  "/WE/tom-caillarec-tnTIhgeeRzE-unsplash.jpg",
  "/WE/tran-mau-tri-tam-g-pKprPg5yw-unsplash.jpg",
  "/WE/yizheng-duanmu-tXFbYqCimhI-unsplash.jpg",
];

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
          <Swiper
            modules={[Pagination, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="mySwiper h-64 md:h-96">
            {images.map((src) => (
              <SwiperSlide key={src}>
                <div className="relative h-full w-full">
                  <Image
                    src={src}
                    alt="Student collaboration"
                    fill
                    className="object-cover "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </Element>
  );
}

export default About_cli;
