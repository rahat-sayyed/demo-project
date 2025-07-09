import { ChairRounded, PersonRounded } from "@mui/icons-material";

export const statsCards = [
  {
    title: "Today's Money",
    value: "$53k",
    icon: ChairRounded,
    bgColor: "black",
    tagNode: <span className="text-green-600">+55%</span>,
    tagLine: "than last week",
  },
  {
    title: "Today's Users",
    value: "2,300",
    icon: PersonRounded,
    bgColor: "pink",
    tagNode: <span className="text-green-600">+3%</span>,
    tagLine: "than last month",
  },
  {
    title: "New Clients",
    value: "3,462",
    icon: PersonRounded,
    bgColor: "green",
    tagNode: <span className="text-red-600">-2%</span>,
    tagLine: "than yesterday",
  },
  {
    title: "Sales",
    value: "$103,430",
    icon: ChairRounded,
    bgColor: "blue",
    tagNode: <span className="text-green-600">+5%</span>,
    tagLine: "than yesterday",
  },
];
