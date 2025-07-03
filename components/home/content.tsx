"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Palette, Code, Zap } from "lucide-react";
import { ChartConfig, ChartContainer } from "../ui/chart";
import { Area, AreaChart } from "recharts";

const data = [
  {
    revenue: 10400,
    subscription: 40,
  },
  {
    revenue: 10405,
    subscription: 80,
  },
  {
    revenue: 9400,
    subscription: 150,
  },
  {
    revenue: 8200,
    subscription: 210,
  },
  {
    revenue: 7000,
    subscription: 89,
  },
  {
    revenue: 9600,
    subscription: 229,
  },
  {
    revenue: 11244,
    subscription: 78,
  },
  {
    revenue: 26475,
    subscription: 89,
  },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "var(--primary)",
  },
  subscription: {
    label: "Subscriptions",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

export default function ContentSection() {
  return (
    <section className=" py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto grid gap-2 sm:grid-cols-5">
          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-tl-xl">
            <CardHeader>
              <div className="md:p-6">
                <p className="font-medium">Beautiful Component Library</p>
                <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                  Professionally designed React components built on top of
                  shadcn/ui. Copy, paste, and customize to match your brand.
                </p>
              </div>
            </CardHeader>

            <div className="relative h-fit pl-6 md:pl-12">
              <div className="absolute -inset-6 dark:[background:radial-gradient(75%_95%_at_50%_0%,transparent,rgb(23_23_23))] [background:radial-gradient(75%_95%_at_50%_0%,transparent,rgb(255_255_255))]"></div>

              <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                      <Code className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Button Component</h3>
                      <p className="text-sm text-muted-foreground">
                        Multiple variants and sizes
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center">
                      <Palette className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Card Component</h3>
                      <p className="text-sm text-muted-foreground">
                        Flexible layout options
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                      <Zap className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Form Components</h3>
                      <p className="text-sm text-muted-foreground">
                        Complete form solutions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="group overflow-hidden shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-tr-xl">
            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
              Open Source & Free to Use
            </p>

            <CardContent className="mt-auto h-fit">
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 dark:[background:radial-gradient(50%_100%_at_70%_50%,transparent,rgb(23_23_23))] [background:radial-gradient(50%_100%_at_70%_50%,transparent,rgb(255_255_255))] z-10"></div>
                <div className="aspect-76/59 overflow-hidden rounded-r-lg border bg-background">
                  <ChartContainer config={chartConfig} className="size-full">
                    <AreaChart
                      data={data}
                      margin={{
                        left: 0,
                        right: 0,
                      }}
                    >
                      <Area
                        dataKey="subscription"
                        fill="var(--color-subscription)"
                        fillOpacity={0.05}
                        stroke="var(--color-subscription)"
                        strokeWidth={2}
                        type="monotone"
                      />
                    </AreaChart>
                  </ChartContainer>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="group p-6 shadow-zinc-950/5 sm:col-span-2 sm:rounded-none sm:rounded-bl-xl md:p-12">
            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
              Copy & Paste Components
            </p>

            <div className="flex justify-center gap-6">
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                <span className="absolute right-2 top-1 block text-xs">⌘</span>
                <Code className="mt-auto size-4" />
              </div>
              <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                <span className="text-lg">C</span>
              </div>
            </div>
          </Card>

          <Card className="group relative shadow-zinc-950/5 sm:col-span-3 sm:rounded-none sm:rounded-br-xl">
            <CardHeader className="p-6 md:p-12">
              <p className="font-medium">Built on shadcn/ui Foundation</p>
              <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                Extends the popular shadcn/ui library with additional components
                and enhanced functionality.
              </p>
            </CardHeader>
            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
              <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                <div className="rounded-lg aspect-square border border-dashed"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <div className="w-8 h-8 bg-black dark:bg-white rounded-md flex items-center justify-center">
                    <span className="text-white dark:text-black font-bold text-xs">
                      R
                    </span>
                  </div>
                </div>
                <div className="rounded-lg aspect-square border border-dashed"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">TS</span>
                  </div>
                </div>
                <div className="rounded-lg aspect-square border border-dashed"></div>
                <div className="rounded-lg bg-muted/50 flex aspect-square items-center justify-center border p-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white font-bold text-xs">TW</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
