import { ChairRounded, PersonRounded } from "@mui/icons-material";

export const statsCards = [
  {
    title: "Today's Money",
    value: "$53k",
    icon: ChairRounded,
    bgColor: "bg-gradient-to-t from-black to-gray-500",
    tagNode: <span className="text-green-600">+55%</span>,
    tagLine: "than last week",
  },
  {
    title: "Today's Users",
    value: "2,300",
    icon: PersonRounded,
    bgColor: "bg-gradient-to-t from-pink-500 to-pink-400",
    tagNode: <span className="text-green-600">+3%</span>,
    tagLine: "than last month",
  },
  {
    title: "New Clients",
    value: "3,462",
    icon: PersonRounded,
    bgColor: "bg-gradient-to-t from-green-500 to-green-400",
    tagNode: <span className="text-red-600">-2%</span>,
    tagLine: "than yesterday",
  },
  {
    title: "Sales",
    value: "$103,430",
    icon: ChairRounded,
    bgColor: "bg-gradient-to-t from-blue-500 to-blue-400",
    tagNode: <span className="text-green-600">+5%</span>,
    tagLine: "than yesterday",
  },
];
