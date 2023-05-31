import React, { useState } from "react";
import { eventsData } from "./data/data-source";
import FilterData from "./FilterData";
import styles from "./TabFilter.module.scss";

const TabSelector = () => {
  const [items, setItems] = useState(eventsData);
  const [filter, setFilter] = useState("dragons");

  const groupChoices = [
    {
      title: "Little Dragons",
      value: "dragons"
    },
    {
      title: "Mini Ninjas",
      value: "ninjas"
    },
    {
      title: "Juniors MA",
      value: "juniors"
    },
    {
      title: "Teens MA",
      value: "teens"
    },
    {
      title: "S.E.N MA",
      value: "sen"
    },
    {
      title: "Home Ed MA",
      value: "homeed"
    },
    {
      title: "Schools MA",
      value: "schools"
    }
  ];
  console.log(items);
  const filterItem = (selectedModule) => {
    const updatedPortfolio = eventsData.filter((child) => {
      return child.module.includes(selectedModule);
    });
    setItems(updatedPortfolio);
    setFilter(selectedModule);
  };
  return (
    <>
      <div className={styles.filterButtonsContent}>
        {groupChoices.map((opt, index) => {
          return (
            <button
              key={index}
              className={`${styles.filterButtons} ${
                filter === opt.value && styles.currentFiltered
              }`}
              onClick={() => {
                filterItem(opt.value);
              }}
            >
              {opt.title}
            </button>
          );
        })}
      </div>

      <FilterData data={items} />
    </>
  );
};

export default TabSelector;
