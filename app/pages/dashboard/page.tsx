import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Briefcase,
  CreditCard,
  DollarSign,
  FileText,
  MoreHorizontal,
  Settings,
  TrendingUp,
  Users,
  Heart,
  ShoppingCart,
  Package,
  CreditCardIcon as CardIcon,
  Unlock,
} from "lucide-react";
import StatCard from "@/components/cards/statCard";
import { ChairRounded, PersonRounded } from "@mui/icons-material";
import { WebsiteViewChart } from "@/components/charts/websiteViewChart";
import { chartsCardData } from "@/data/chartsData";

export default function Dashboard() {
  const statsCards = [
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
      tagNode: <span className="text-green-600">+55%</span>,
      tagLine: "than yesterday",
    },
  ];

  const projects = [
    {
      name: "Material XD Version",
      members: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      budget: "$14,000",
      completion: 60,
      icon: "🎨",
    },
    {
      name: "Add Progress Track",
      members: ["/placeholder.svg", "/placeholder.svg"],
      budget: "$3,000",
      completion: 10,
      icon: "📊",
    },
    {
      name: "Fix Platform Errors",
      members: ["/placeholder.svg", "/placeholder.svg"],
      budget: "Not set",
      completion: 100,
      icon: "🔧",
    },
    {
      name: "Launch our Mobile App",
      members: [
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
        "/placeholder.svg",
      ],
      budget: "$20,500",
      completion: 100,
      icon: "📱",
    },
    {
      name: "Add the New Pricing Page",
      members: ["/placeholder.svg"],
      budget: "$500",
      completion: 25,
      icon: "💎",
    },
    {
      name: "Redesign New Online Shop",
      members: ["/placeholder.svg", "/placeholder.svg"],
      budget: "$2,000",
      completion: 40,
      icon: "🛍️",
    },
  ];

  const barChartData = [
    { day: "M", value: 45 },
    { day: "T", value: 18 },
    { day: "W", value: 8 },
    { day: "T", value: 20 },
    { day: "F", value: 48 },
    { day: "S", value: 5 },
    { day: "S", value: 35 },
  ];
  const orders = [
    {
      icon: DollarSign,
      title: "$2400, Design changes",
      time: "22 DEC 7:20 PM",
      color: "text-green-500",
    },
    {
      icon: Package,
      title: "New order #1832412",
      time: "21 DEC 11 PM",
      color: "text-blue-500",
    },
    {
      icon: CreditCard,
      title: "Server payments for April",
      time: "21 DEC 9:34 PM",
      color: "text-blue-500",
    },
    {
      icon: CardIcon,
      title: "New card added for order #4395133",
      time: "20 DEC 2:20 AM",
      color: "text-yellow-500",
    },
    {
      icon: Unlock,
      title: "Unlock packages for development",
      time: "18 DEC 4:54 AM",
      color: "text-purple-500",
    },
    {
      icon: Package,
      title: "New order #9583120",
      time: "17 DEC",
      color: "text-gray-500",
    },
  ];
  const data = [
    { name: "M", views: 45 },
    { name: "T", views: 12 },
    { name: "W", views: 34 },
    { name: "T", views: 58 },
    { name: "F", views: 23 },
    { name: "S", views: 7 },
    { name: "S", views: 50 },
  ];
  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {statsCards.map((card, index) => (
              <StatCard
                key={index}
                {...card}
                icon={<card.icon className="w-6 h-6" />}
              />
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {chartsCardData.map((card, index) => (
              <StatCard key={index} {...card} isGraph={true} />
            ))}
          </div>

        
       

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Projects Table */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Projects</CardTitle>
                    <CardDescription>✅ 30 done this month</CardDescription>
                  </div>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-500 uppercase tracking-wider">
                    <div>COMPANIES</div>
                    <div>MEMBERS</div>
                    <div>BUDGET</div>
                    <div>COMPLETION</div>
                  </div>
                  {projects.map((project, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                          {project.icon}
                        </div>
                        <span className="font-medium text-gray-900">
                          {project.name}
                        </span>
                      </div>
                      <div className="flex -space-x-2">
                        {project.members.map((member, i) => (
                          <Avatar
                            key={i}
                            className="w-8 h-8 border-2 border-white"
                          >
                            <AvatarImage src={member || "/placeholder.svg"} />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                        ))}
                      </div>
                      <div className="font-medium text-gray-900">
                        {project.budget}
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium text-gray-900">
                          {project.completion}%
                        </span>
                        <Progress
                          value={project.completion}
                          className="flex-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Orders Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Orders overview</CardTitle>
                <CardDescription>
                  <TrendingUp className="w-4 h-4 inline mr-1" />
                  <span className="font-medium">24%</span> this month
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {orders.map((order, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center ${order.color}`}
                      >
                        <order.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm">
                          {order.title}
                        </p>
                        <p className="text-xs text-gray-500">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>

        {/* Footer */}
        
      </div>
    </div>
  );
}
