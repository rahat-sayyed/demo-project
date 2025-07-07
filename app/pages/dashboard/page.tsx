
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

export default function Dashboard() {
  const statsCards = [
    {
      title: "Today's Money",
      value: "$53k",
      change: "+55%",
      changeText: "than last week",
      positive: true,
      icon: Briefcase,
      bgColor: "bg-gray-800",
    },
    {
      title: "Today's Users",
      value: "2,300",
      change: "+3%",
      changeText: "than last month",
      positive: true,
      icon: Users,
      bgColor: "bg-red-500",
    },
    {
      title: "New Clients",
      value: "3,462",
      change: "-2%",
      changeText: "than yesterday",
      positive: false,
      icon: FileText,
      bgColor: "bg-green-500",
    },
    {
      title: "Sales",
      value: "$103,430",
      change: "+5%",
      changeText: "than yesterday",
      positive: true,
      icon: ShoppingCart,
      bgColor: "bg-blue-500",
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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
     
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {statsCards.map((card, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 mb-1">
                        {card.title}
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        {card.value}
                      </p>
                      <div className="flex items-center mt-2">
                        <span
                          className={`text-sm font-medium ${card.positive ? "text-green-600" : "text-red-600"}`}
                        >
                          {card.change}
                        </span>
                        <span className="text-sm text-gray-500 ml-1">
                          {card.changeText}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center`}
                    >
                      <card.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Website Views Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Website Views</CardTitle>
                <CardDescription>Last Campaign Performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-end h-full text-white">
                    {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div
                          className="bg-white bg-opacity-30 rounded-sm mb-2"
                          style={{
                            height: `${Math.random() * 80 + 20}%`,
                            width: "12px",
                          }}
                        />
                        <span className="text-xs">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">
                  📅 campaign sent 2 days ago
                </p>
              </CardContent>
            </Card>

            {/* Daily Sales Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Daily Sales</CardTitle>
                <CardDescription>
                  (+15%) increase in today sales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gradient-to-r from-green-500 to-green-600 rounded-lg p-4 mb-4">
                  <div className="h-full flex items-end justify-between text-white">
                    {[
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month, i) => (
                      <div key={month} className="flex flex-col items-center">
                        <div
                          className="w-2 h-2 bg-white rounded-full mb-1"
                          style={{
                            marginBottom: `${Math.random() * 60 + 10}px`,
                          }}
                        />
                        <span className="text-xs">{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">🕒 updated 4 min ago</p>
              </CardContent>
            </Card>

            {/* Completed Tasks Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Completed Tasks</CardTitle>
                <CardDescription>Last Campaign Performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="h-full flex items-end justify-between text-white">
                    {[
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ].map((month, i) => (
                      <div key={month} className="flex flex-col items-center">
                        <div
                          className="w-2 h-2 bg-white rounded-full mb-1"
                          style={{
                            marginBottom: `${Math.random() * 60 + 10}px`,
                          }}
                        />
                        <span className="text-xs">{month}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500">⏰ just updated</p>
              </CardContent>
            </Card>
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
        <footer className="bg-white border-t border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <span>© 2022, made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>by</span>
              <span className="font-medium text-gray-900">Creative Tim</span>
              <span>for a better web.</span>
            </div>
            <div className="flex items-center space-x-6">
              <span>Creative Tim</span>
              <span>About Us</span>
              <span>Blog</span>
              <Button variant="ghost" size="icon">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
