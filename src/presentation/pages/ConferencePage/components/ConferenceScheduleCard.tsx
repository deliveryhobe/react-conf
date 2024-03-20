import { Utils } from "@/libs/utils";
import { ConferenceScheduleEntity } from "@/presentation/interfaces/entities";
import React from "react";

const ConferenceScheduleCard = ({
  schedule,
}: {
  schedule: ConferenceScheduleEntity;
}) => {
  return (
    <div className="py-4 px-5 sm:px-14 bg-white rounded-lg gap-10">
      <div className="w-full flex justify-between items-center">
        <h3 className="font-bold text-base sm:text-xl text-primary">
          {Utils.formattedDate(schedule?.day, "MMMM DD, YYYY")}
        </h3>
        <p className="text-primary sm:text-base text-xs">
          {Utils.getDayName(schedule?.day)}
        </p>
      </div>

      <div className="">
        {schedule?.intervals?.length > 0 &&
          schedule?.intervals?.map((interval, index) => (
            <div key={index} className="mt-5 text-primary sm:text-base text-sm">
              {interval?.sessions?.length > 0 && (
                <>
                  <p>
                    Duration: {interval?.sessions[0]?.begin}-{" "}
                    {interval?.sessions[0]?.end}
                  </p>
                  <ul className="list-disc ml-4">
                    <li>{interval?.sessions[0]?.title}</li>
                  </ul>
                </>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ConferenceScheduleCard;
