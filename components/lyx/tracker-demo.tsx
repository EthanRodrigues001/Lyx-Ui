import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Tracker } from "../lyxui/tracker";

// Hardcoded uptime data for the last 90 days
const generateUptimeData = () => {
  const data = [];
  const today = new Date();

  // Hardcoded pattern: mostly operational with some issues
  const statusPattern = [
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "warning",
    "warning",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "up",
    "down",
    "down",
    "up",
    "up",
    "up",
    "unknown",
    "up",
  ];

  for (let i = 89; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);

    const status = statusPattern[89 - i] || "up";
    let tooltip = "Operational";

    switch (status) {
      case "down":
        tooltip = "Service unavailable";
        break;
      case "warning":
        tooltip = "Performance issues";
        break;
      case "unknown":
        tooltip = "No data";
        break;
      default:
        tooltip = "Operational";
    }

    data.push({
      color:
        status === "up"
          ? "bg-blue-500"
          : status === "warning"
          ? "bg-yellow-500"
          : status === "down"
          ? "bg-red-500"
          : "bg-muted",
      status,
      tooltip: `${tooltip} - ${date.toLocaleDateString()}`,
      date: date.toLocaleDateString(),
    });
  }

  return data;
};

const TrackerDemo = () => {
  const uptimeData = generateUptimeData();
  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      <Card className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg sm:text-xl font-semibold">example.com</h2>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xl sm:text-2xl font-bold text-green-600">
              99.9%
            </span>
            <p className="text-sm text-muted-foreground">uptime</p>
          </div>
        </div>

        <CardContent className="p-0">
          {/* Desktop view */}
          <div className="hidden xl:block">
            <Tracker data={uptimeData} className="w-full" />
          </div>

          {/* Tablet view */}
          <div className="hidden lg:block xl:hidden">
            <Tracker data={uptimeData.slice(15)} className="w-full" />
          </div>
          <div className="hidden md:block lg:hidden">
            <Tracker data={uptimeData.slice(30)} className="w-full" />
          </div>

          {/* Small tablet view - 45 days */}
          <div className="hidden sm:block md:hidden">
            <Tracker data={uptimeData.slice(45)} className="w-full" />
          </div>

          {/* Mobile view */}
          <div className="block sm:hidden">
            <Tracker data={uptimeData.slice(60)} className="w-full" />
          </div>

          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>90 days ago</span>
            <span>Today</span>
          </div>
        </CardContent>
      </Card>

      {/* Status Legend */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
          <span>Operational</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-sm"></div>
          <span>Performance Issues</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-sm"></div>
          <span>Service Unavailable</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-muted rounded-sm"></div>
          <span>No Data</span>
        </div>
      </div>
    </div>
  );
};

export { TrackerDemo };
