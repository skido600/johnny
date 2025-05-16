// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
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
  "/WE/WhatsApp Image 2025-05-06 at 6.45.22 PM.jpeg",
  "/WE/WhatsApp Image 2025-05-06 at 6.58.27 PM.jpeg",
];
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
function Swiper_slid() {
  return (
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
  );
}

export default Swiper_slid;
