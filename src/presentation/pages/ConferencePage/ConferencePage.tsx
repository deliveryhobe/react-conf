"use client";
import React, { useState } from "react";
import { Reorder } from "framer-motion";
import ConferenceCardDetails from "./components/ConferenceCardDetails";
import ConferenceCard from "./components/ConferenceCard";

const ConferencePage = () => {
  const [items, setItem] = useState([1, 2, 3, 4, 5]);
  const [selectedItem, setSelectedItem] = useState(1);
  return (
    <section className="container pt-[150px] pb-[105px] bg-white min-h-screen">
      <h1 className="text-5xl font-bold text-primary">
        Conference name goes here
      </h1>
      <p className="text-[#0A142F] text-lg  mt-4">
        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id
        fermentum.
      </p>
      <div className="mt-[52px] w-full flex gap-12 items-start rounded-lg">
        <div className="w-full sm:w-[365px] space-y-3">
          <Reorder.Group values={items} onReorder={setItem}>
            {items?.map((item) => (
              <Reorder.Item key={item} value={item}>
                <ConferenceCard
                  item={item}
                  isSelected={item == selectedItem}
                  onSelect={() => {
                    setSelectedItem(item);
                  }}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        </div>
        <div className="w-full hidden sm:block">
          <ConferenceCardDetails />
        </div>
      </div>
    </section>
  );
};

export default ConferencePage;
