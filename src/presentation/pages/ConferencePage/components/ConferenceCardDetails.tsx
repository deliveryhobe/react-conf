import Image from "next/image";

const ConferenceCardDetails = () => {
  return (
    <div className="bg-light p-[34px] sm:p-[52px] flex flex-col gap-6">
      <div className="p-4 bg-white rounded-lg flex items-center gap-10">
        <Image
          src="/images/conference.png"
          alt=""
          width={100}
          height={100}
          className="object-contain h-full"
        />
        <div className="flex flex-col items-start gap-2 sm:gap-5">
          <p className="font-bold text-lg text-primary">Siddhartha</p>
          <small className="text-base text-primary">
            Lorem ipsum dolor sit amet, con sec tetur ad.
          </small>
        </div>
      </div>

      <div className="p-4 bg-white rounded-lg flex items-center gap-10">
        <Image
          src="/images/conference.png"
          alt=""
          width={100}
          height={100}
          className="object-contain h-full"
        />
        <div className="flex flex-col items-start gap-2 sm:gap-5">
          <p className="font-bold text-lg text-primary">Siddhartha</p>
          <small className="text-base text-primary">
            Lorem ipsum dolor sit amet, con sec tetur ad.
          </small>
        </div>
      </div>
    </div>
  );
};

export default ConferenceCardDetails;
