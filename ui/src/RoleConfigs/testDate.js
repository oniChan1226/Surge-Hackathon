
export const user = {
    username: "Grinch Molly",
    role: "Admin",
    avatar: "https://api.dicebear.com/7.x/bottts/png",

};

import { Users, Heart, ListCheck, DollarSign } from "lucide-react";

export const items = [
  {
    id: 1,
    label: "People Helped",
    value: "40,200",
    increaseInTrend: true,
    percentage: "8.5%",
    text: "Up from yesterday",
    icon: Users,
    iconColor: "text-purple-500",
  },
  {
    id: 2,
    label: "Active Volunteers",
    value: "1,200",
    increaseInTrend: false,
    percentage: "2.1%",
    text: "Down from last week",
    icon: Heart,
    iconColor: "text-yellow-500",

  },
  {
    id: 3,
    label: "Resources Delivered",
    value: "15,890",
    increaseInTrend: true,
    percentage: "12.3%",
    text: "Up from last month",
    icon: ListCheck,
    iconColor: "text-green-500",

  },
  // {
  //   id: 4,
  //   label: "Funds Raised",
  //   value: "$1,050,000",
  //   increaseInTrend: true,
  //   percentage: "5.7%",
  //   text: "Growth this quarter",
  //   icon: DollarSign,
  //   iconColor: "text-pink-500",

  // },
];

  