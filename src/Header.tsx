import React from "react";

const Header = () => {
  return (
    <div>
      <div className="background absolute z-0  h-full opacity-75"></div>
      <div className="p-32"></div>
      <div className="relative z-10 mx-auto w-96 text-center lg:mx-0 lg:text-left">
        <h1 className="text-8xl font-extrabold text-orange-500">Fireball</h1>
        <p className="my-2 w-96 text-white lg:w-[500px]">
          One Fireball. Two Fireball. Three Fireball. Discover the captivating
          mystery of a radiant fireball, illuminating the night sky with its
          ethereal glow. Immerse yourself in its charm and embrace the unknown.
        </p>
        <button className="my-6 cursor-pointer bg-orange-500 px-4 py-2 text-white">
          View more
        </button>
      </div>
    </div>
  );
};

export default Header;
