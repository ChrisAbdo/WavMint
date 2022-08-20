import CardGrid from "./CardGrid";
import MarqueeSlider from "./Marquee";
import Footer from "./Footer";

const Landing = ({ Web3Handler, account }) => {
  return (
    <div>
      <section>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Welcome to WavMint🌿
            </h2>

            <p className="mt-4 ">
              a decentralized application to create and mint music directly to
              the Ethereum blockchain.
            </p>
          </div>

          <CardGrid />

          <div className="mt-12 text-center">
            {account ? (
              <a
                className="btn btn-outline btn-ghost inline-flex items-center px-8 py-3 mt-8  focus:outline-none focus:ring"
                href="/create"
              >
                <span className="text-sm font-medium"> Get Started </span>

                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            ) : (
              <button
                className="btn btn-outline btn-ghost btn-disabled inline-flex items-center px-8 py-3 mt-8  focus:outline-none focus:ring"
                onClick={Web3Handler}
              >
                <span className="text-sm font-medium">
                  {" "}
                  Connect Wallet to begin{" "}
                </span>

                <svg
                  className="w-5 h-5 ml-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>
      <MarqueeSlider />
      <Footer />
    </div>
  );
};

export default Landing;
