import { lazy } from "react";
import { ApiFilled } from "@ant-design/icons";

const advanced = {
  name: "进阶",
  icon: <ApiFilled />,
  path: "/advanced",
  children: [
    {
      path: "/advanced/hoc",
      name: "高阶组件(HOC)",
      component: lazy(() => import("@/pages/advanced/hoc")),
    },
    {
      path: "/advanced/context",
      name: "上下文(context)",
      component: lazy(() => import("@/pages/advanced/context")),
    },
    // {
    //   path: "/base/contextConsumer",
    //   name: "contextConsumer",
    //   component: lazy(() => import("@/pages/base/context/consumer")),
    // },
    // {
    //   path: "/base/propsComp",
    //   name: "propsComp",
    //   component: lazy(() => import("@/pages/base/contextVsRedux/index")),
    // },
    // {
    //   path: "/base/propsRedux",
    //   name: "propsRedux",
    //   component: lazy(() => import("@/pages/base/contextVsRedux/reduxTest")),
    //   hideMenu: true,
    // },
  ],
};

export default advanced;
