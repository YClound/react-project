import { lazy } from "react";
import { HourglassFilled } from "@ant-design/icons";

const example = {
  path: "/example",
  name: "示例",
  icon: <HourglassFilled />,
  children: [
    {
      path: "/example/game",
      name: "Game",
      component: lazy(() => import("@/pages/example/game")),
    },
    {
      path: "/example/todoList",
      name: "TodoList",
      component: lazy(() => import("@/pages/example/todoList")),
    },
    {
      path: "/example/sheetjs",
      name: "XLSX",
      component: lazy(() => import("@/pages/example/sheetjs")),
    },
  ],
};

export default example;
