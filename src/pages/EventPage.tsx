import { useNavigate } from "react-router-dom";
export default function EventPage() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/event");
  }

  return (
    <div className="bg-[#FBFAFF]">
      <div className="md:container md:px-5 md:mx-auto">
        <div className="flex flex-wrap-reverse h-full lg:h-screen items-center">
          <div className="lg:w-1/2 px-4 lg:px-20 md:px-8 py-4 w-[550px] mx-auto">
            <p className="text-[#240D57] text-[28px] font-bold">
              Birthday Bash
            </p>
            <p className="text-[14px] text-[#828282] font-normal">
              Hosted by <span className="font-bold">Elysia</span>
            </p>
            <div className="py-6">
              <div className="container px-2 py-6 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="w-1/6">
                    <img src="/calendar.svg" alt="calendar" />
                  </div>
                  <div className="pt-2 w-4/6">
                    <p className="text-[#240D57] font-bold">18 August 6:00PM</p>
                    <p className="text-[#4F4F4F]">
                      to <span className="font-bold">19 August 1:00PM</span> UTC
                      +10
                    </p>
                  </div>
                  <div className="pt-5 pr-3 w-1/6">
                    <img
                      src="/greater.svg"
                      className="float-right"
                      alt="greater"
                    />
                  </div>
                </div>
              </div>
              <div className="container px-2 py-6 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="w-1/6">
                    <img src="/calendar.svg" alt="calendar" />
                  </div>
                  <div className="pt-2 w-4/6">
                    <p className="text-[#240D57] font-bold">Street name</p>
                    <p className="text-[#4F4F4F]">Suburb, State, Postcode</p>
                  </div>
                  <div className="pt-5 pr-3 w-1/6">
                    <img
                      src="/greater.svg"
                      className="float-right"
                      alt="greater"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-[550px] mx-auto text-center">
            <img
              alt="content"
              className="object-scale-down mx-auto sm:mt-10 "
              src="/cake.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
