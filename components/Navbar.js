// Import Next / React dependencies
import { useEffect } from "react";

// Import external dependencies
import { themeChange } from "theme-change";

const Navbar = ({ Web3Handler, account }) => {
  const themeValues = ["Black", "Corporate", "Cyberpunk", "Lofi", "Business"];

  useEffect(() => {
    themeChange(false);
  });
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/" className="btn btn-ghost btn-outline normal-case text-xl ">
          WavMint🌿
        </a>
      </div>
      <div className="flex-none gap-2">
        <div title="Change Theme" className="dropdown dropdown-end ">
          <div
            tabIndex="0"
            className="btn gap-1 normal-case btn-ghost btn-outline"
          >
            <svg
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
              ></path>
            </svg>{" "}
            <span className="hidden md:inline">Theme</span>{" "}
            <svg
              width="12px"
              height="12px"
              className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2048 2048"
            >
              <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
            </svg>
          </div>{" "}
          <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16">
            <div className="grid grid-cols-1 gap-3 p-3" tabIndex="0">
              <div
                className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                data-set-theme="corporate"
                data-act-class="outline"
              >
                <div
                  data-theme="corporate"
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">
                        corporate
                      </div>{" "}
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>{" "}
                        <div className="bg-secondary w-2 rounded"></div>{" "}
                        <div className="bg-accent w-2 rounded"></div>{" "}
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                data-set-theme="cyberpunk"
                data-act-class="outline"
              >
                <div
                  data-theme="cyberpunk"
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">
                        cyberpunk
                      </div>{" "}
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>{" "}
                        <div className="bg-secondary w-2 rounded"></div>{" "}
                        <div className="bg-accent w-2 rounded"></div>{" "}
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                data-set-theme="lofi"
                data-act-class="outline"
              >
                <div
                  data-theme="lofi"
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">lofi</div>{" "}
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>{" "}
                        <div className="bg-secondary w-2 rounded"></div>{" "}
                        <div className="bg-accent w-2 rounded"></div>{" "}
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
                data-set-theme="business"
                data-act-class="outline"
              >
                <div
                  data-theme="business"
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">
                        business
                      </div>{" "}
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>{" "}
                        <div className="bg-secondary w-2 rounded"></div>{" "}
                        <div className="bg-accent w-2 rounded"></div>{" "}
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dropdown dropdown-end">
          {account ? (
            <div className="navbar-end">
              <div className="dropdown dropdown-end">
                <label tabIndex="0" className="btn btn-ghost btn-outline ">
                  {account.slice(0, 5) + "..." + account.slice(38, 42)}
                </label>

                <ul
                  tabIndex="0"
                  className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
                >
                  <li className="border-b">
                    <a href="#disconnect">Disconnect Wallet</a>
                  </li>
                  <li>
                    <a>View Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="navbar-end">
              <button
                onClick={Web3Handler}
                className="btn btn-ghost  btn-outline transition group-hover:-translate-x-2 group-hover:-translate-y-2  group-hover:shadow-[8px_8px_0_0_#000]"
              >
                Connect Wallet
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="modal" id="disconnect">
        <div className="modal-box">
          <h3 className="font-bold text-lg">To Disconnect:</h3>
          <p className="py-4">
            Open Metamask, click on the{" "}
            <span className="badge badge-success gap-2">connected</span> button
            and disconnect your wallet.
          </p>
          <div className="modal-action">
            <a href="#" className="btn">
              Close
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
