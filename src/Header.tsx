import React from "react";

const Header = () => {
  return (
    <div>
      <div className="background absolute z-0 h-full w-full opacity-75"></div>
      <div className="p-32"></div>
      <div className="relative z-10">
        <h1 className="text-8xl font-extrabold text-orange-500">Fireball</h1>
        <p className="my-2 w-96 text-orange-500">
          Fireball Fireball Fireball Fireball Fireball Fireball Fireball
          Fireball Fireball Fireball Fireball Fireball Fireball Fireball
          Fireball
        </p>
        <button className="my-6 cursor-pointer bg-orange-500 px-4 py-2 text-white">
          Click Here
        </button>
      </div>
    </div>
  );
};

export default Header;
