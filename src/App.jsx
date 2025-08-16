import { useState } from "react";

function App() {
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center font-manrope p-4 bg-light-grayish-blue">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg max-w-3xl w-full">
        {/* Image */}
        <div className="md:w-2/5 w-full h-48 md:h-auto overflow-hidden flex items-center justify-center">
          <img
            src="/images/drawers.jpg"
            alt="Drawers"
            className="object-cover w-full h-full md:rounded-l-xl md:rounded-tr-none rounded-t-xl"
          />
        </div>
        {/* Content */}
        <div className="md:w-3/5 w-full flex flex-col justify-between p-6 relative">
          <div>
            <h1 className="text-lg md:text-xl font-bold text-dark-grayish-blue mb-3 leading-tight">
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h1>
            <p className="text-sm text-desaturated-dark-blue mb-6">
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="/images/avatar-michelle.jpg"
                alt="Michelle Appleton"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <div className="text-sm font-bold text-dark-grayish-blue">
                  Michelle Appleton
                </div>
                <div className="text-xs text-desaturated-dark-blue">
                  28 Jun 2020
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                aria-label="Share"
                className={`p-2 rounded-full transition-colors cursor-pointer ${
                  showShare
                    ? "bg-[#48556a] hover:bg-[#48556a]"
                    : "bg-[#ecf2f8] hover:bg-[#dfe7f3]"
                }`}
                onClick={() => setShowShare((v) => !v)}
              >
                <img
                  src="/images/icon-share.svg"
                  alt="Share"
                  className={showShare ? "filter brightness-0 invert" : ""}
                />
              </button>
              {/* Share menu */}
              {showShare && (
                <div className="absolute z-100 top-[-50px] -translate-x-1/2 bg-[#48556a] rounded-xl px-6 py-3 flex gap-4 shadow-lg w-[200px]">
                  <p className="text-grayish-blue text-sm ">SHARE</p>
                  <img src="/images/icon-facebook.svg" alt="Facebook" />
                  <img src="/images/icon-twitter.svg" alt="Twitter" />
                  <img src="/images/icon-pinterest.svg" alt="Pinterest" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
