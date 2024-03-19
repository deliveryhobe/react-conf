import Image from "next/image";
import React from "react";

const Sponsor = () => {
  return (
    <section className="py-14 sm:py-[100px] bg-[#F9FAFB]">
      <div className="container">
        <h2 className="font-bold text-lg sm:text-5xl text-center">
          Our Sponsor
        </h2>
        <div className="mt-8">
          <p className="font-medium text-gray-light text-center">
            🥇 Gold Sponsor
          </p>
          <div className="flex justify-center gap-4 sm:gap-14 flex-wrap mt-9">
            <Image
              src="/images/layer.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/sisyphus.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="font-medium text-gray-light text-center">
            🥈Silver Sponsors
          </p>
          <div className="flex justify-center gap-4 sm:gap-14 flex-wrap mt-9">
            <Image
              src="/images/circooles.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/catalog.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/gofore.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-8">
          <p className="font-medium text-gray-light text-center">
            🥉Bronze Sponsors
          </p>
          <div className="flex justify-center gap-4 sm:gap-14 flex-wrap mt-9">
            <Image
              src="/images/sisyphus2.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/qutient.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/layer2.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
            <Image
              src="/images/circooles2.png"
              width={130}
              height={40}
              alt=""
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
