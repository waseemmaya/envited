import { useNavigate } from "react-router-dom";
export default function LandingPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/create");
  }

  return (
    <div className="bg-[#f6f2ff]">
      <div className="container px-5 mx-auto">
        <div className="flex flex-wrap-reverse h-full lg:h-screen justify-center items-center text-center ">
          <div className="lg:w-1/2 px-4 mx-auto">
            <img
              alt="content"
              className="mbl-img object-scale-down "
              src="/banner.svg"
            />
            <button
              onClick={handleClick}
              className="xl:hidden btn mt-6 border-0 mb-8 px-5 rounded"
            >
              🎉 Create my event
            </button>
          </div>
          <div className="lg:w-1/2 px-4 text-center w-2/3 lg:text-end">
            <h2 className="text-[36px] md:text-[64px] mt-6 mb-3 title">
              Imagine if
              <br />
              <span className="product-name">Snapchat</span>
              <br />
              had events.
            </h2>
            <p className="text-[16px] md:text-[24px] font-light text-[#4f4f4f]">
              Easily host and share events with your friends across any social
              media.
            </p>

            <div className="hidden xl:block">
              <button
                onClick={handleClick}
                className="w-[187px] lg:w-[320px] btn mt-6 border-0 py-2 px-5 rounded"
              >
                🎉 Create my event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
