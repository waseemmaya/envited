import { useNavigate } from "react-router-dom";

export default function CreateEventPage() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/event");
  }

  return (
    <div className="bg-[#f6f2ff]">
      <div className="container px-5 mx-auto h-screen">
        <div className="flex flex-wrap-reverse h-full lg:h-screen justify-center items-center text-center ">
          <div className="lg:w-1/2 px-4">
            <form className="w-full max-w-sm">
              <div className="md:flex md:items-center mb-6">
                <div className="w-full">
                  <input
                    placeholder="Event name"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>

              <div className="md:flex md:items-center mb-6">
                <div className="w-full">
                  <input
                    placeholder="Host name"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="w-full">
                  <input
                    placeholder="Start time/date"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="w-full">
                  <input
                    placeholder="End time/date"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="w-full">
                  <input
                    placeholder="Location"
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div className="float-left">
                <div className="md:w-full">
                  <button
                    onClick={handleClick}
                    className="create-btn border-0 px-5 rounded"
                  >
                    🎉 Next
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="lg:w-1/2 px-4 text-center w-2/3 lg:text-end">
            <h2 className="text-[36px] md:text-[54px] mt-6 mb-3 title">
              Join us for a
              <br />
              <span className="product-name">STELLAR</span>
              <br />
              experience.
            </h2>
            <p className="text-[16px] md:text-[20px] font-light text-[#4f4f4f]">
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
