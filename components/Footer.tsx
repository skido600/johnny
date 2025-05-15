"use client";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { Link } from "react-scroll";
type NavItem = {
  name: string;
  link: string;
};

const navigator: NavItem[] = [
  { name: "Home", link: "home" },
  { name: "Programs", link: "programs-section" },
  { name: "About Us", link: "about-section" },
  { name: "Contact", link: "contact" },
];
const data = [
  { link: "twitter", icon: FaTwitter },
  { link: "instagram", icon: FaInstagram },
  { link: "linkedin", icon: FaLinkedinIn },
  { link: "facebook", icon: FaFacebookF }, // lowercase here
];
export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] py-8 rounded-t-4xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h1 className="flex items-center text-black font-semibold text-[12px] md:text-[15px]">
              Johnny {"  "}
              <span className="text-2xl text-[#758173]">T</span>ech {"  "}
              <span className="text-2xl text-[#758173]">A</span>cademy
            </h1>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            {data.map((items, index) => {
              const Icon = items.icon;
              return (
                <a
                  key={index}
                  href={`https://${items.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-slate-200 transition-colors"
                  aria-label={items.link}>
                  <Icon className="h-5 w-5 text-[#314C2D]" />
                </a>
              );
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {navigator.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                smooth={false}
                duration={500}
                offset={-100}
                className="cursor-pointer text-[16px]">
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} johnny tech All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
