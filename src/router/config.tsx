import { lazy } from "react";
import BasicLayout from "@/layouts/BasicLayout";
import BlankLayout from "@/layouts/BlankLayout";
import {
  HomeFilled,
  SmileFilled,
  DatabaseFilled,
  TagFilled,
  ApiFilled,
  HourglassFilled,
  PushpinFilled,
} from "@ant-design/icons";

const config = [
  {
    path: "/user",
    component: BlankLayout, // 空白页布局
    children: [
      {
        path: "/user/login/:from?", // 路由路径
        name: "登录页", // 菜单名称 (不设置,则不展示在菜单栏中）
        icon: "setting", // 菜单图标
        component: lazy(() => import("@/pages/login")), // 懒加载 路由组件
      },
      {
        path: "*",
        component: lazy(() => import("@/pages/notFound")),
      },
    ],
  },
  {
    path: "/",
    component: BasicLayout, // 基本布局
    admin: ["admin"],
    children: [
      {
        path: "/",
        name: "主页",
        icon: <HomeFilled />,
        exact: true,
        component: lazy(() => import("@/pages/app")),
      },
      {
        path: "/hello",
        name: "欢迎页",
        icon: <SmileFilled />,
        component: lazy(() => import("@/pages/hello")),
      },
      {
        path: "/base",
        name: "基础用法",
        icon: <DatabaseFilled />,
        children: [
          {
            path: "/base/context",
            name: "Context",
            component: lazy(() => import("@/pages/base/context")),
          },
          {
            path: "/base/contextConsumer",
            name: "contextConsumer",
            component: lazy(() => import("@/pages/base/context/consumer")),
          },
          {
            path: "/base/propsComp",
            name: "propsComp",
            component: lazy(() => import("@/pages/base/contextVsRedux/index")),
          },
          {
            path: "/base/propsRedux",
            name: "propsRedux",
            component: lazy(
              () => import("@/pages/base/contextVsRedux/reduxTest")
            ),
            hideMenu: true,
          },
        ],
      },
      {
        name: "Hook",
        icon: <TagFilled />,
        path: "/hook",
        children: [
          {
            path: "/hook/base",
            name: "Hook基础",
            component: lazy(() => import("@/pages/hook")),
          },
          {
            path: "/hook/effect",
            name: "useEffect",
            component: lazy(() => import("@/pages/hook/UseEffectExamp")),
          },
        ],
      },
      {
        name: "进阶",
        icon: <ApiFilled />,
        path: "/advanced",
        children: [
          {
            path: "/advanced/hoc",
            name: "高阶组件(HOC)",
            component: lazy(() => import("@/pages/advanced/hoc")),
          },
        ],
      },
      {
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
        ],
      },
      {
        path: "/axios",
        name: "axios用法",
        icon: <PushpinFilled />,
        children: [
          {
            path: "/axios/base",
            name: "基本用法",
            component: lazy(() => import("@/pages/axios")),
          },
        ],
      },
      {
        path: "*",
        component: lazy(() => import("@/pages/notFound")),
      },
    ],
  },
  {
    path: "*",
    component: lazy(() => import("@/pages/notFound")),
  },
];

export default config;
