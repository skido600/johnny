"use client";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-scroll";
type NavItem = {
  name: string;
  link: string;
};

const navigator: NavItem[] = [
  { name: "Home", link: "home" },
  { name: "Programs", link: "programs-section" },
  { name: "About Us", link: "/" },
  { name: " Blog", link: "/" },
  { name: "Contact", link: "/" },
];

export function DesktopNav() {
  const [toggle, setToggle] = useState<boolean>(false);

  const Toggleme = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setToggle(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      <section className="relative">
        {/* Main navigation bar */}
        <nav className="flex items-center justify-between mx-3 lg:mx-64 md:mx-28 fixed border border-[#242424] my-4 top-0 right-0 left-0 px-8 py-3 rounded-full  bg-black/40  backdrop-blur-md  z-50">
          <h1 className="flex items-center text-white font-semibold text-[12px] md:text-[15px]">
            Johnny {"  "}
            <span className="text-2xl text-[#758173]">T</span>ech {"  "}
            <span className="text-2xl text-[#758173]">A</span>cademy
          </h1>

          <ul className="md:flex items-center space-x-4 text-white hidden">
            {navigator.map((items, index) => (
              <li key={index}>
                <Link
                  to={items.link}
                  smooth={false}
                  duration={500}
                  offset={-100}
                  className="cursor-pointer hover:text-gray-300">
                  {items.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="md:hidden" onClick={Toggleme}>
            {toggle ? (
              <IoMdClose size={30} className="text-white" />
            ) : (
              <LuMenu size={30} className="text-white" />
            )}
          </div>
          {toggle && <MobileNav setToggle={setToggle} />}
        </nav>
      </section>
    </main>
  );
}
type MobileNavProps = {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNav({ setToggle }: MobileNavProps) {
  return (
    <div className="fixed top-20 left-0 right-0 z-50 animate-slideDown">
      <div className="mx-4 border border-[#242424] bg-black/40 backdrop-blur-md z-50 rounded-4xl p-6">
        <section className="gap-6">
          <aside>
            <ul className="space-y-6 text-white">
              {navigator.map((items, index) => (
                <li key={index}>
                  <Link
                    to={items.link}
                    className="cursor-pointer hover:text-gray-300 text-[12px]"
                    smooth={false}
                    duration={500}
                    offset={-100}
                    onClick={() => setToggle(false)}>
                    {items.name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </section>
      </div>
    </div>
  );
}
