import { ConferenceOrganizerEntity } from "@/presentation/interfaces/entities";
import Image from "next/image";
import React from "react";

const ConferenceOrganizerCard = ({
  organizer,
}: {
  organizer: ConferenceOrganizerEntity;
}) => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg flex items-center gap-10 mb-4 lg:mb-0">
        <Image
          src={organizer?.image?.url}
          alt=""
          width={100}
          height={100}
          className="object-contain h-full rounded-md"
        />
        <div className="flex flex-col items-start gap-2 sm:gap-5">
          <p className="font-bold text-lg text-primary">{organizer?.name}</p>
          <small className="text-base text-primary">
            {organizer?.aboutShort}
          </small>
        </div>
      </div>
    </>
  );
};

export default ConferenceOrganizerCard;
