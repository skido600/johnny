"use client";
import {
  FaTwitter,
  FaInstagram,
  // FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

import { Element } from "react-scroll";
function Contact_Social() {
  const data = [
    {
      link: "https://x.com/JohnnyTech23?t=zojtZHzjh1h15jidXCtCMA&s=09",
      icon: FaTwitter,
    },
    {
      link: "https://www.instagram.com/johnnytechacademy?igsh=MTcyOWF5NmQ5Ym95bA%3D%3D",
      icon: FaInstagram,
    },
    // { link: "linkedin", icon: FaLinkedinIn },
    {
      link: "https://web.facebook.com/people/Johnny-Tech/61575041944316/",
      icon: FaFacebookF,
    },
  ];
  return (
    <Element name="contact">
      <section className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-white text-center mb-4">
            Get in Touch
          </h1>
          <p className=" text-gray-300 mb-8">
            Fill out the form below or reach out through social media.
          </p>
        </div>
        <div className="space-y-4">
          <div className=" text-gray-300 mb-8">
            <h2 className="">Connect with me</h2>
            <p className="">
              Follow me on social media to stay updated with my latest work and
              announcements.
            </p>
          </div>
          <div className="flex space-x-4">
            {data.map((items, index) => {
              const Icon = items.icon; // capitalize because it's a component
              return (
                <a
                  key={index}
                  href={`https://${items.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white hover:bg-slate-200 transition-colors"
                  aria-label={items.link}>
                  <Icon className="h-5 w-5 text-[#314C2D]" />
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default Contact_Social;
