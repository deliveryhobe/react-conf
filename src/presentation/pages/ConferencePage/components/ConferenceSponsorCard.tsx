import { ConferenceSponsorEntity } from "@/presentation/interfaces/entities";
import Image from "next/image";
import React from "react";

const ConferenceSponsorCard = ({
  sponsor,
}: {
  sponsor: ConferenceSponsorEntity;
}) => {
  return (
    <div className="p-4 bg-white rounded-lg flex items-center gap-10">
      <Image
        src={sponsor?.image?.url}
        alt=""
        width={100}
        height={100}
        className="object-contain h-full rounded-md"
      />
      <div className="flex flex-col items-start gap-2 sm:gap-5">
        <p className="font-bold text-lg text-primary">{sponsor?.name}</p>
        <small className="text-base text-primary">{sponsor?.aboutShort}</small>
      </div>
    </div>
  );
};

export default ConferenceSponsorCard;
