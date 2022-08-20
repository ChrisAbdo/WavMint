import React from "react";

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
      <a className="block h-56 group" href="/blog">
        <div className="relative flex items-end h-full transition  border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              🎶
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">Create music!</p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">Create music!</p>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              Develop a track directly in the browser!
            </p>
          </div>
        </div>
      </a>
      <a className="block h-56 group" href="/blog">
        <div className="relative flex items-end h-full transition  border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              🎼
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">
              Custom Samples!
            </p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">Custom Samples!</p>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              Import your own samples to the DAW and go to work!
            </p>
          </div>
        </div>
      </a>

      <a className="block h-56 group" href="/blog">
        <div className="relative flex items-end h-full transition  border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              🎤
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">
              Recording Capability!
            </p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">Recording Capability!</p>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              Record your own vocals if you want to!
            </p>
          </div>
        </div>
      </a>

      <a className="block h-56 group" href="/blog">
        <div className="relative flex items-end h-full transition  border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              🌿
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">
              Mint directly to OpenSea!
            </p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">Mint directly to OpenSea!</p>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              Using a Solidity smart contract, you are able to mint directly to
              OpenSea gas free!
            </p>
          </div>
        </div>
      </a>

      <a className="block h-56 group" href="/blog">
        <div className="relative flex items-end h-full transition  border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              ⛽
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">
              Gas-Free Minting!
            </p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">Gas-Free Minting!</p>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              Enjoy the Gas-Free Minting capabilities for OpenSea!
            </p>
          </div>
        </div>
      </a>

      <a className="block h-56 group" href="/blog">
        <div className="relative flex items-end h-full transition  border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2  group-hover:shadow-[8px_8px_0_0_#000] p-8">
          <div className="lg:group-hover:opacity-0 lg:group-hover:absolute">
            <span
              className="text-3xl sm:text-4xl"
              role="img"
              aria-hidden="true"
            >
              🖥️
            </span>
            <p className="mt-4 text-xl font-bold sm:text-2xl">Tech Stack</p>
          </div>

          <div className="absolute opacity-0 lg:group-hover:opacity-100 lg:group-hover:relative">
            <p className="text-2xl font-bold">Tech Stack</p>

            <p className="mt-4 text-lg font-medium leading-relaxed">
              Next.js, Truffle, TailwindCSS, and more!
            </p>

            <btn className="btn btn-outline btn-ghost">learn more!</btn>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardGrid;
