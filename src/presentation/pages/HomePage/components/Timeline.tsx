/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { FC } from "react";
import { Utils, cn } from "@/libs/utils";
import Link from "next/link";
import { ConferenceEntity } from "@/presentation/interfaces/entities";
import { IConferencesResponse } from "@/presentation/interfaces/responses/conference.response";
import { GET_CONFERENCES } from "@/libs/graphql/queries";
import { useQuery } from "@apollo/client";
import Spinner from "@/presentation/components/Spinner";

const Timeline = () => {
  const { loading, error, data } =
    useQuery<IConferencesResponse>(GET_CONFERENCES);
  return (
    <div className="container mt-14" id="timeline">
      <h2 className="sm:text-5xl text-2xl text-center font-bold mb-10">
        Conferences
      </h2>
      <div className="">
        {loading ? (
          <Spinner />
        ) : error?.message ? (
          <p className="text-primary text-center">Something went wrong</p>
        ) : data?.conferences?.length ? (
          data?.conferences?.map((conference, index) => (
            <TimelineContent
              key={index}
              isRight={(index + 1) % 2 == 0}
              conference={conference}
              isLast={index + 1 == data?.conferences?.length}
            />
          ))
        ) : (
          <p className="text-primary text-center">No conference found</p>
        )}
      </div>
    </div>
  );
};

export default Timeline;

const TimelineContent = ({
  conference,
  isRight = false,
  isLast = false,
  isComplete = false,
}: {
  isRight?: boolean;
  isLast?: boolean;
  isComplete?: boolean;
  conference: ConferenceEntity;
}) => {
  return (
    <>
      {!isRight ? (
        <div
          className={cn(
            "w-full relative flex flex-col-reverse sm:flex-row justify-between pb-[20px] sm:pb-[60px] mb-2 after:w-0.5 after:h-[calc(100%-56px)]",
            isLast
              ? ""
              : "after:absolute after:left-0 sm:after:left-1/2 after:top-14 after:ml-6 after:-z-10",
            isComplete ? "after:bg-secondary" : "after:bg-gray-light"
          )}
        >
          <Link
            className="w-full flex justify-end sm:justify-end sm:pr-14"
            href={`/${conference?.id}`}
          >
            <div className="p-4 rounded-lg bg-light border-t-4 border-gray-light flex gap-4 w-[320px] lg:w-[480px] shadow-[5px_0px_10px_0px_#00000024]">
              <div className="flex gap-4">
                <div className="h-4 w-4 rounded-full bg-secondary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="">
                <h2 className="text-lg font-medium">{conference?.name}</h2>
                <p className="text-sm text-gray-light mt-1">
                  {conference?.slogan}
                </p>
              </div>
            </div>
          </Link>
          <div className="absolute left-0 top-0 sm:left-1/2">
            <div
              className={cn(
                "h-12 w-12 rounded-full bg-light border flex items-center justify-center",
                isComplete ? "border-secondary" : "border-gray-light"
              )}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className={cn(isComplete ? "fill-secondary" : "fill-[#CDCDCD]")}
              >
                <g clipPath="url(#clip0_3_145)">
                  <path d="M19.9024 10.2969L9.93801 23.7969C9.89151 23.8599 9.83088 23.911 9.761 23.9463C9.69112 23.9816 9.61394 24 9.53566 24C9.46975 24.0002 9.40448 23.9871 9.34376 23.9614C9.24043 23.9186 9.15448 23.8424 9.09967 23.7449C9.04486 23.6474 9.02438 23.5343 9.04151 23.4238L10.417 14.5H4.50001C4.40748 14.5 4.31678 14.4743 4.23797 14.4258C4.15917 14.3773 4.09537 14.3079 4.05367 14.2253C4.01197 14.1428 3.994 14.0502 4.00176 13.958C4.00953 13.8658 4.04273 13.7776 4.09766 13.7031L14.062 0.203132C14.1284 0.113161 14.223 0.0480384 14.3308 0.0181699C14.4385 -0.0116986 14.5532 -0.00458897 14.6564 0.0383627C14.7596 0.0813145 14.8455 0.157629 14.9003 0.255113C14.955 0.352597 14.9755 0.465623 14.9585 0.576132L13.583 9.49998H19.5C19.5925 9.49998 19.6833 9.52564 19.7621 9.57413C19.8409 9.62262 19.9047 9.69203 19.9464 9.77463C19.9881 9.85723 20.0061 9.94978 19.9983 10.042C19.9905 10.1342 19.9573 10.2224 19.9024 10.2969Z" />
                </g>
              </svg>
            </div>
          </div>
          <div className="w-full h-full mb-4 sm:mb-0">
            <p className="text-sm text-gray pl-14 sm:pl-20 sm:mt-3">
              {Utils.formattedDate(conference?.startDate, "MMMM DD, YYYY")}
            </p>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "w-full relative flex flex-col sm:flex-row justify-between pb-[20px] sm:pb-[60px] mb-2",
            isLast
              ? ""
              : "after:w-0.5 after:h-[calc(100%-56px)] after:absolute after:left-0 sm:after:left-1/2 after:top-14 after:ml-6 after:-z-10",
            isComplete ? "after:bg-secondary" : "after:bg-gray-light"
          )}
        >
          <div className="w-full h-full mb-4 sm:mb-0 flex justify-start sm:justify-end">
            <p className="text-sm text-gray pl-14 sm:pl-0 sm:pr-10 sm:mt-3">
              {Utils.formattedDate(conference?.startDate, "DD MMMM, YYYY")}
            </p>
          </div>
          <div className="absolute left-0 top-0 sm:left-1/2">
            <div
              className={cn(
                "h-12 w-12 rounded-full bg-light border flex items-center justify-center",
                isComplete ? "border-primary" : "border-gray-light"
              )}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className={cn(isComplete ? "fill-secondary" : "fill-[#CDCDCD]")}
              >
                <g clipPath="url(#clip0_3_145)">
                  <path d="M19.9024 10.2969L9.93801 23.7969C9.89151 23.8599 9.83088 23.911 9.761 23.9463C9.69112 23.9816 9.61394 24 9.53566 24C9.46975 24.0002 9.40448 23.9871 9.34376 23.9614C9.24043 23.9186 9.15448 23.8424 9.09967 23.7449C9.04486 23.6474 9.02438 23.5343 9.04151 23.4238L10.417 14.5H4.50001C4.40748 14.5 4.31678 14.4743 4.23797 14.4258C4.15917 14.3773 4.09537 14.3079 4.05367 14.2253C4.01197 14.1428 3.994 14.0502 4.00176 13.958C4.00953 13.8658 4.04273 13.7776 4.09766 13.7031L14.062 0.203132C14.1284 0.113161 14.223 0.0480384 14.3308 0.0181699C14.4385 -0.0116986 14.5532 -0.00458897 14.6564 0.0383627C14.7596 0.0813145 14.8455 0.157629 14.9003 0.255113C14.955 0.352597 14.9755 0.465623 14.9585 0.576132L13.583 9.49998H19.5C19.5925 9.49998 19.6833 9.52564 19.7621 9.57413C19.8409 9.62262 19.9047 9.69203 19.9464 9.77463C19.9881 9.85723 20.0061 9.94978 19.9983 10.042C19.9905 10.1342 19.9573 10.2224 19.9024 10.2969Z" />
                </g>
              </svg>
            </div>
          </div>
          <Link
            href={`/${conference?.id}`}
            className="w-full flex justify-start sm:justify-start pl-14 lg:pl-28"
          >
            <div className="p-4 rounded-lg bg-light border-t-4 border-gray-light flex gap-4 w-[320px] lg:w-[480px] shadow-[5px_0px_10px_0px_#00000024]">
              <div className="flex gap-4">
                <div className="h-4 w-4 rounded-full bg-secondary flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="">
                <h2 className="text-lg font-medium">{conference?.name}</h2>
                <p className="text-sm text-gray-light mt-1">
                  {conference?.slogan}
                </p>
              </div>
            </div>
          </Link>
        </div>
      )}
    </>
  );
};
