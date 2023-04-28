import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
const navbar = () => {
  const [nav, setNav] = useState(false);

  const hadleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/assets/navLogo.png"
          width={90}
          height={50}
          alt="image"
          priority={true}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="#">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={hadleNav}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* This section opens up side Navigation */}
      <div
        className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full item-center justify-between">
              <Image
                src="/assets/navLogo.png"
                width={87}
                height={35}
                alt="image"
                priority={true}
              />
              <div
                onClick={hadleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer h-[50px] w-[50px] flex items-center justify-center"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="#">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="#">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="#">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="#">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="#">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="fixed bottom-10 ">
              <p className="uppercase tracking-widest text-[#5651e5] font-medium">
                Let's Connect
              </p>

              <div className="flex item-center gap-6 justify-between my-4 w-full sm:w-[80%]">
                <Link href="#">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 text-lg ease-in duration-300">
                    <FaLinkedinIn color="blue" />
                  </div>
                </Link>
                <Link href="#">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 text-lg ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="#">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 text-lg ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="#">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 hover:scale-105 text-lg ease-in duration-300">
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
