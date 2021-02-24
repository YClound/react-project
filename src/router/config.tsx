import { lazy } from "react";
import BasicLayout from "@/layouts/BasicLayout";
import BlankLayout from "@/layouts/BlankLayout";
import { HomeFilled, SmileFilled } from "@ant-design/icons";
import base from "./base";
import hook from "./hook";
import advanced from "./advanced";
import axios from "./axios";
import example from "./example";
import source from "./source";

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
      base,
      hook,
      advanced,
      example,
      axios,
      source,
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
