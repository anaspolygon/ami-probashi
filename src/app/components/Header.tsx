"use client";
import { useState } from "react";
export default function Header() {
  const [language, setLanguage] = useState("EN");

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "বাং" : "EN"));
  };
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <img src="path_to_logo" alt="Logo" className="h-8" />
          <span className="font-semibold text-teal-600">Ami Probashi</span>
        </div>

        <ul className="flex space-x-8">
          <li>
            <a href="#" className="text-teal-600 font-semibold">
              Home
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Services
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Service 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Service 2
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Recruitment
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Option 2
                </a>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Government
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Option 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Portals
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Download Cards
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="text-gray-700 hover:text-teal-600">
              Media
            </a>
            <ul className="absolute left-0 hidden group-hover:block bg-white shadow-lg mt-2 rounded">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Option 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-teal-100"
                >
                  Option 2
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="flex items-center space-x-2 border border-teal-600 px-4 py-2 rounded-full hover:bg-teal-50"
          >
            <img src="path_to_qr_code" alt="QR Code" className="h-8 w-8" />
            <span className="text-teal-600 font-semibold">
              Get Ami Probashi App
            </span>
          </a>

          <div className="border-r border-gray-300 h-8"></div>

          <div className="flex items-center space-x-4">
            <div
              onClick={toggleLanguage}
              className="relative inline-block w-28 h-10 align-middle select-none transition duration-200 ease-in-out border border-teal-600 rounded-full cursor-pointer"
              role="switch"
              aria-checked={language === "EN"}
              tabIndex={0}
            >
              <div
                className={`absolute inset-y-0 ${
                  language === "EN" ? "left-0" : "right-0"
                } w-14 h-10 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold transition-transform transform`}
              >
                {language}
              </div>
              {language === "EN" ? (
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 text-teal-600 font-bold">
                  বাং
                </div>
              ) : (
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 text-teal-600 font-bold">
                  EN
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
