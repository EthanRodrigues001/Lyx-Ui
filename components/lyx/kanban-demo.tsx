"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import * as Kanban from "@/components/lyxui/kanban";
import * as React from "react";
import { CircleCheck, Clock, Archive, GripVertical } from "lucide-react";

interface Task {
  id: string;
  title: string;
  priority: "low" | "medium" | "high";
  description?: string;
  assignee?: string;
  dueDate?: string;
}

interface ColumnData {
  icon?: React.ReactNode;
  data: Task[];
}

const COLUMN_TITLES: Record<string, string> = {
  backlog: "Backlog",
  inProgress: "In Progress",
  done: "Done",
};

export function KanbanDemo() {
  const [columnOrder, setColumnOrder] = React.useState<string[]>([
    "backlog",
    "inProgress",
    "done",
  ]);

  const [columns, setColumns] = React.useState<Record<string, ColumnData>>({
    backlog: {
      icon: <Archive className="h-4 w-4 text-gray-500" />,
      data: [
        {
          id: "11",
          title: "Setup CI/CD pipeline",
          priority: "high",
          assignee: "Mia Chen",
          dueDate: "2024-07-10",
        },
        {
          id: "12",
          title: "Research analytics tools",
          priority: "medium",
          assignee: "Liam Patel",
          dueDate: "2024-07-15",
        },
        {
          id: "13",
          title: "Plan Q3 roadmap",
          priority: "low",
          assignee: "Olivia Green",
          dueDate: "2024-07-20",
        },
      ],
    },
    inProgress: {
      icon: <Clock className="h-4 w-4 text-blue-500" />,
      data: [
        {
          id: "14",
          title: "Refactor user profile page",
          priority: "high",
          assignee: "Noah Kim",
          dueDate: "2024-07-08",
        },
        {
          id: "15",
          title: "Integrate payment gateway",
          priority: "medium",
          assignee: "Sophia Lee",
          dueDate: "2024-07-12",
        },
      ],
    },

    done: {
      icon: <CircleCheck className="h-4 w-4 text-green-500" />,
      data: [
        {
          id: "16",
          title: "Deploy staging environment",
          priority: "high",
          assignee: "Lucas Brown",
          dueDate: "2024-07-01",
        },
        {
          id: "17",
          title: "Fix login bug",
          priority: "low",
          assignee: "Emma Davis",
          dueDate: "2024-06-28",
        },
      ],
    },
  });
  const kanbanData = React.useMemo(() => {
    const result: Record<string, Task[]> = {};
    columnOrder.forEach((key) => {
      result[key] = columns[key]?.data ?? [];
    });
    return result;
  }, [columns, columnOrder]);

  // Update both column order and tasks when drag-and-drop occurs
  const handleValueChange = (newData: Record<string, Task[]>) => {
    // Update column order
    const newOrder = Object.keys(newData);
    setColumnOrder(newOrder);

    // Update tasks in each column
    setColumns((prev) => {
      const updated: Record<string, ColumnData> = {};
      newOrder.forEach((key) => {
        updated[key] = {
          ...prev[key],
          data: newData[key] ?? [],
        };
      });
      return updated;
    });
  };

  return (
    <Kanban.Root
      value={kanbanData}
      onValueChange={handleValueChange}
      getItemValue={(item) => item.id}
    >
      <Kanban.Board className="grid auto-rows-fr sm:grid-cols-3 mt-8">
        {Object.entries(columns).map(([columnValue, { icon, data }]) => (
          <TaskColumn
            key={columnValue}
            value={columnValue}
            tasks={data}
            icon={icon}
          />
        ))}
      </Kanban.Board>
      <Kanban.Overlay>
        {({ value, variant }) => {
          if (variant === "column") {
            const columnData = columns[value];
            if (!columnData) return null;

            return (
              <TaskColumn
                value={value}
                tasks={columnData.data}
                icon={columnData.icon}
              />
            );
          }

          const task = Object.values(columns)
            .flatMap((col) => col.data)
            .find((task) => task.id === value);

          if (!task) return null;

          return <TaskCard task={task} />;
        }}
      </Kanban.Overlay>
    </Kanban.Root>
  );
}

interface TaskCardProps
  extends Omit<React.ComponentProps<typeof Kanban.Item>, "value"> {
  task: Task;
}

function TaskCard({ task, ...props }: TaskCardProps) {
  return (
    <Kanban.Item key={task.id} value={task.id} asChild {...props}>
      <div className="rounded-md border bg-card p-2 shadow-xs">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-2">
            <span className="line-clamp-1 font-medium text-sm">
              {task.title}
            </span>
            <Badge
              variant={
                task.priority === "high"
                  ? "destructive"
                  : task.priority === "medium"
                  ? "default"
                  : "secondary"
              }
              className="pointer-events-none h-5 rounded-sm px-1.5 text-[11px] capitalize"
            >
              {task.priority}
            </Badge>
          </div>
          <div className="flex items-center justify-between text-muted-foreground text-xs">
            {task.assignee && (
              <div className="flex items-center gap-1">
                <div className="size-2 rounded-full bg-primary/20" />
                <span className="line-clamp-1">{task.assignee}</span>
              </div>
            )}
            {task.dueDate && (
              <time className="text-[10px] tabular-nums p-1 bg-background/60 rounded-sm border border-primary/10">
                {task.dueDate}
              </time>
            )}
          </div>
        </div>
      </div>
    </Kanban.Item>
  );
}

interface TaskColumnProps
  extends Omit<React.ComponentProps<typeof Kanban.Column>, "children"> {
  tasks: Task[];
  icon?: React.ReactNode;
}

function TaskColumn({ value, tasks, icon, ...props }: TaskColumnProps) {
  return (
    <Kanban.Column
      value={value}
      {...props}
      className="bg-card rounded-md p-3 shadow-xs"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="font-semibold text-sm">{COLUMN_TITLES[value]}</span>
          <Badge variant="secondary" className="pointer-events-none rounded-sm">
            {tasks.length}
          </Badge>
        </div>
        <Kanban.ColumnHandle asChild>
          <Button variant="ghost" size="icon">
            <GripVertical className="h-4 w-4" />
          </Button>
        </Kanban.ColumnHandle>
      </div>
      <div className="flex flex-col gap-2 p-0.5">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} asHandle />
        ))}
      </div>
    </Kanban.Column>
  );
}
