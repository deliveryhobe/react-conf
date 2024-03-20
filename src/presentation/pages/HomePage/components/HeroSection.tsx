import Image from "next/image";
import React from "react";

const HeroSection = () => {
  const scrolltoHash = function () {
    const element = document.getElementById("timeline");
    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  return (
    <div className="px-4 lg:px-0 relative mt-16 lg:mt-[220px] mx-auto w-full">
      <div className="text-primary w-3/4 lg:w-2/3 relative">
        <Image
          src="./images/Sketch-annotation.svg"
          className="absolute -top-[45px] right-[120px] lg:right-[355px] lg:-top-14 lg:w-24 w-16"
          width={100}
          height={100}
          alt=""
        />
        <Image
          src="./images/line.svg"
          className="absolute -right-[200px] lg:-right-[520px] lg:-top-10 -z-10 lg:w-[800px] lg:h-[800px] lg:block hidden"
          width={800}
          height={800}
          alt=""
        />
        <Image
          src="./images/line-2.svg"
          className="absolute top-2.5 -right-6 -z-10 block lg:hidden"
          width={800}
          height={800}
          alt=""
        />
        <h1 className="text-5xl lg:text-hero font-bold text-right">
          React <br /> Conference
        </h1>
      </div>
      <p className="block lg:hidden mt-8 mb-12">
        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
        fermentum..id fermentum.In quis diam turpis quam id fermentum.
      </p>
      <div className="flex lg:hidden justify-center">
        <button className="flex items-center gap-2 bg-secondary px-6 py-4 rounded-full text-lg font-medium">
          <span>Buy Tickets</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.5002 3.125C17.5002 2.95924 17.4343 2.80027 17.3171 2.68306C17.1999 2.56585 17.0409 2.5 16.8752 2.5H9.37518C9.20942 2.5 9.05045 2.56585 8.93324 2.68306C8.81603 2.80027 8.75018 2.95924 8.75018 3.125C8.75018 3.29076 8.81603 3.44973 8.93324 3.56694C9.05045 3.68415 9.20942 3.75 9.37518 3.75H15.3664L2.68268 16.4325C2.62457 16.4906 2.57847 16.5596 2.54703 16.6355C2.51558 16.7114 2.49939 16.7928 2.49939 16.875C2.49939 16.9572 2.51558 17.0386 2.54703 17.1145C2.57847 17.1904 2.62457 17.2594 2.68268 17.3175C2.74079 17.3756 2.80978 17.4217 2.8857 17.4532C2.96162 17.4846 3.043 17.5008 3.12518 17.5008C3.20736 17.5008 3.28873 17.4846 3.36466 17.4532C3.44058 17.4217 3.50957 17.3756 3.56768 17.3175L16.2502 4.63375V10.625C16.2502 10.7908 16.316 10.9497 16.4332 11.0669C16.5504 11.1842 16.7094 11.25 16.8752 11.25C17.0409 11.25 17.1999 11.1842 17.3171 11.0669C17.4343 10.9497 17.5002 10.7908 17.5002 10.625V3.125Z"
              fill="#0A142F"
            />
          </svg>
        </button>
      </div>
      <div className="block lg:hidden relative mt-8 mb-[65px]">
        <Image src="/images/hero-image-2.png" width={440} height={460} alt="" />
        <Image
          src="/images/Star.svg"
          className="absolute -right-4 -bottom-7"
          width={70}
          height={70}
          alt=""
        />
      </div>
      <div className="absolute left-0 bottom-0-0 w-[175px] h-[175px] lg:h-[412px] lg:w-[412px] rounded-3xl bg-[#2286BE] opacity-10 blur-3xl filter"></div>
      <div className="mt-8 relative w-full mx-auto xl:max-w-[1552px] flex">
        <div className="flex gap-16">
          <div className="relative lg:h-[500px] lg:mt-0 mt-4">
            <Image
              src="/images/hero-image-1.png"
              width={330}
              height={420}
              alt=""
              className="lg:ml-16 2xl:ml-0 lg:w-4/6 2xl:w-full"
            />
            <Image
              src="/images/Ornament.svg"
              className="absolute -right-[140%] bottom-0 lg:-right-3 2xl:-right-16 lg:bottom-44 2xl:bottom-5 -z-10"
              width={150}
              height={150}
              alt=""
            />
          </div>
          <div className="w-[515px] relative">
            <p className="text-lg lg:block hidden">
              Lorem uis diam turpis quam id fermentum.In quis diam turpis quam
              id fermentum..id fermentum.In quis diam turpis quam id fermentum.
            </p>
            <button className="hidden lg:flex items-center gap-2 bg-secondary px-[82px] py-3 rounded-full mt-16 text-lg font-medium">
              <span>Buy Tickets</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.5002 3.125C17.5002 2.95924 17.4343 2.80027 17.3171 2.68306C17.1999 2.56585 17.0409 2.5 16.8752 2.5H9.37518C9.20942 2.5 9.05045 2.56585 8.93324 2.68306C8.81603 2.80027 8.75018 2.95924 8.75018 3.125C8.75018 3.29076 8.81603 3.44973 8.93324 3.56694C9.05045 3.68415 9.20942 3.75 9.37518 3.75H15.3664L2.68268 16.4325C2.62457 16.4906 2.57847 16.5596 2.54703 16.6355C2.51558 16.7114 2.49939 16.7928 2.49939 16.875C2.49939 16.9572 2.51558 17.0386 2.54703 17.1145C2.57847 17.1904 2.62457 17.2594 2.68268 17.3175C2.74079 17.3756 2.80978 17.4217 2.8857 17.4532C2.96162 17.4846 3.043 17.5008 3.12518 17.5008C3.20736 17.5008 3.28873 17.4846 3.36466 17.4532C3.44058 17.4217 3.50957 17.3756 3.56768 17.3175L16.2502 4.63375V10.625C16.2502 10.7908 16.316 10.9497 16.4332 11.0669C16.5504 11.1842 16.7094 11.25 16.8752 11.25C17.0409 11.25 17.1999 11.1842 17.3171 11.0669C17.4343 10.9497 17.5002 10.7908 17.5002 10.625V3.125Z"
                  fill="#0A142F"
                />
              </svg>
            </button>
            <div className="absolute right-16 mt-8">
              <button className="" onClick={scrolltoHash}>
                <Image
                  src="/images/scroll-icon.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <Image
              src="/images/hero-image-2.png"
              className="relative left-20 2xl:left-36 bottom-32 2xl:w-full lg:w-4/6"
              width={440}
              height={460}
              alt=""
            />
            <Image
              src="/images/Star.svg"
              className="absolute 2xl:left-24 bottom-80 left-8 2xl:bottom-36"
              width={100}
              height={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
