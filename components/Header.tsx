"use client";

import Image from "next/image";
import { MagnifyingGlassIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Avatar from "react-avatar";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col md:flex-row items-center p-5 bg-gray-500/10 rounded-b-2xl">
        <div
          className="absolute
            top-0 left-0 w-full h-96 bg-gradient-to-br from-pink-300 to-[#0079bf]
            rounded-md filter blur-xl opacity-50 -z-50
          "
        />
        <Image
          alt="Ahmet"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Trello-logo-blue.svg/2560px-Trello-logo-blue.svg.png"
          width={300}
          height={100}
          className="w-44 md:w-56 pb-10 md:pb-0 object-contain"
        />
        <div className="flex w-full justify-end items-center space-x-5 flex-1 md:flex-initial">
          {/* Search Box */}
          <form
            className="flex items-center space-x-5 bg-white shadow-md rounded-md p-2 flex-1
            md:flex-initial
        "
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-600" />
            <input type="text" placeholder="Search" className="outline-none flex-1 p-2" />
            <button type="submit" hidden>
              Search
            </button>
          </form>
          <Avatar name="Ahmet Palavan" size="50" round color="blue" />
        </div>
      </div>
      <div className="flex items-center justify-center px-10 py-2 md:py-5">
        <p className="flex items-center font-light p-5 pr-5 bg-white shadow-xl text-[#0055D1] rounded-xl w-fit max-w-3xl italic">
          <UserCircleIcon className="h-10 w-10 inline-block text-[#0079bf]" />
          GPT is summarising your tasks for the day..
        </p>
      </div>
    </header>
  );
};

export default Header;
