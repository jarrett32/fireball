import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute z-10 w-full rounded border-gray-200 py-2.5 px-2 sm:px-4 lg:px-16">
      <div className="mx-auto flex w-full flex-wrap items-center justify-between">
        <div className="flex cursor-pointer items-center">
          <img
            src="/firelogo.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white"></span>
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium ">
            <li>
              <div
                className="block cursor-pointer rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-2 md:text-orange-700"
                aria-current="page"
              >
                Home
              </div>
            </li>
            <li>
              <div className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-2 md:hover:bg-transparent md:hover:text-orange-700 ">
                About
              </div>
            </li>
            <li>
              <div className=" block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-2 md:hover:bg-transparent md:hover:text-orange-700 ">
                Store
              </div>
            </li>
            <li>
              <div className="block cursor-pointer rounded py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:border-0 md:p-2 md:hover:bg-transparent md:hover:text-orange-700 ">
                Contact
              </div>
            </li>
            <li>
              <a className="block cursor-pointer rounded bg-orange-500 py-2 px-4 text-gray-700 md:border-0 md:hover:bg-transparent md:hover:text-white ">
                Subscribe
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
