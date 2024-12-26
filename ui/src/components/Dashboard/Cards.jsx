import React from "react";
import { items } from "../../RoleConfigs";
import { TrendingUp, TrendingDown, Users, Heart, ListCheck, DollarSign } from "lucide-react";

const Cards = () => {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white pl-3 py-4 rounded-lg overflow-auto space-y-4 relative shadow-lg"
        >
          <h3 className="whitespace-nowrap">{item.label}</h3>
          <h1 className="text-black text-xl md:text-2xl xl:text3">
            {item.value}
          </h1>
          <div
            className={`${
              item.increaseInTrend ? "text-green-500" : "text-red-500"
            } flex space-x-1 justify-start items-center`}
          >
            {item.increaseInTrend ? <TrendingUp /> : <TrendingDown />}
            <span>{item.percentage}</span>
            <span className="text-sm text-dashboardMain-unhighlighted">
              {item.text}
            </span>
          </div>
            <div className={`absolute top-3 right-4 ${item.iconColor}`}>
            {item.icon ? <item.icon size={28} /> : null}
            </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
