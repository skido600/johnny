import Hero_cli from "./client_comp/Hero_cli";

function Hero() {
  return (
    <section className="flex flex-col md:mt-[12rem] mt-[10rem]  justify-center items-center text-center px-4">
      <Hero_cli />
    </section>
  );
}

export default Hero;
