"use client";
import React, { useState } from "react";
import { Reorder } from "framer-motion";
import ConferenceCardDetails from "./components/ConferenceCardDetails";
import ConferenceCard from "./components/ConferenceCard";
import { useQuery } from "@apollo/client";
import { GET_CONFERENCE } from "@/libs/graphql/queries";
import Spinner from "@/presentation/components/Spinner";
import { ISingleConferenceResponse } from "@/presentation/interfaces/responses/conference.response";
import ConferenceOrganizerCard from "./components/ConferenceOrganizerCard";

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
          <h1 className="text-5xl font-bold text-primary">
            {data?.conference?.name}
          </h1>
          <p className="text-[#0A142F] text-lg  mt-4">
            {data?.conference?.slogan}
          </p>
          <div className="mt-[52px] w-full flex gap-12 items-start rounded-lg">
            <div className="w-full sm:w-[365px] space-y-3">
              <Reorder.Group values={options} onReorder={setOptions}>
                {options?.map((option) => (
                  <Reorder.Item key={option} value={option}>
                    <ConferenceCard
                      item={option}
                      isSelected={option == selectedOption}
                      onSelect={() => {
                        setSelectedOption(option as OptionType);
                      }}
                    />
                  </Reorder.Item>
                ))}
              </Reorder.Group>
            </div>
            <div className="w-full hidden sm:block">
              <div className="bg-light p-[34px] sm:p-[52px] flex flex-col gap-6">
                {selectedOption == "Organizer" &&
                  data?.conference?.organizers?.map((org, index) => (
                    <ConferenceOrganizerCard key={index} organizer={org} />
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
