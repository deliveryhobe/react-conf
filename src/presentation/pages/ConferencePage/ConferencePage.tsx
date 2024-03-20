"use client";
import React, { useState } from "react";
import { Reorder } from "framer-motion";
import ConferenceCard from "./components/ConferenceCard";
import { useQuery } from "@apollo/client";
import { GET_CONFERENCE } from "@/libs/graphql/queries";
import Spinner from "@/presentation/components/Spinner";
import { ISingleConferenceResponse } from "@/presentation/interfaces/responses/conference.response";
import ConferenceOrganizerCard from "./components/ConferenceOrganizerCard";
import ConferenceSpeakerCard from "./components/ConferenceSpeakerCard";
import ConferenceScheduleCard from "./components/ConferenceScheduleCard";
import ConferenceSponsorCard from "./components/ConferenceSponsorCard";

type OptionType = "Organizer" | "Speakers" | "Schedule" | "Sponsors";

const ConferencePage = ({ id }: { id: string }) => {
  const [options, setOptions] = useState([
    "Organizer",
    "Speakers",
    "Schedule",
    "Sponsors",
  ]);
  const [selectedOption, setSelectedOption] = useState<OptionType>("Organizer");

  const { loading, error, data } = useQuery<ISingleConferenceResponse>(
    GET_CONFERENCE,
    {
      variables: { id: id.toString() },
    }
  );

  return (
    <section className="container pt-[150px] pb-[105px] bg-white min-h-screen">
      {loading ? (
        <Spinner />
      ) : error ? (
        <p className="text-primary text-center">Something went wrong</p>
      ) : (
        <>
          <h1 className="text-2xl lg:text-5xl font-bold text-primary">
            {data?.conference?.name}
          </h1>
          <p className="text-[#0A142F] text-base lg:text-lg  mt-4">
            {data?.conference?.slogan}
          </p>
          <div className="mt-10 lg:mt-[52px] w-full flex gap-12 items-start rounded-lg">
            <div className="w-full lg:w-[365px] space-y-3">
              <Reorder.Group values={options} onReorder={setOptions}>
                {options?.map((option) => (
                  <Reorder.Item key={option} value={option}>
                    <ConferenceCard
                      item={option}
                      isSelected={option == selectedOption}
                      onSelect={() => {
                        setSelectedOption(option as OptionType);
                      }}
                      data={data}
                      selectedOption={selectedOption}
                    />
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
            <div className="w-full hidden lg:block">
              <div className="bg-light p-[34px] sm:p-[52px] flex flex-col gap-6 max-h-[660px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-light">
                {selectedOption == "Organizer" &&
                  data?.conference?.organizers?.map((org, index) => (
                    <ConferenceOrganizerCard key={index} organizer={org} />
                  ))}

                {selectedOption == "Speakers" &&
                  data?.conference?.speakers?.map((speaker, index) => (
                    <ConferenceSpeakerCard key={index} speaker={speaker} />
                  ))}

                {selectedOption == "Schedule" &&
                  data?.conference?.schedules?.map((schedule, index) => (
                    <ConferenceScheduleCard key={index} schedule={schedule} />
                  ))}

                {selectedOption == "Sponsors" &&
                  data?.conference?.sponsors?.map((sponsor, index) => (
                    <ConferenceSponsorCard key={index} sponsor={sponsor} />
                  ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ConferencePage;
