import { lazy } from "react";
import { TagFilled } from "@ant-design/icons";

/**
 * @link https://juejin.cn/post/6931704771963256846
 */

const source = {
  name: "源码解析",
  icon: <TagFilled />,
  path: "/source",
  children: [
    {
      path: "/source/event",
      name: "事件",
      component: lazy(() => import("@/pages/source/Event")),
    },
    {
      path: "/source/state",
      name: "state",
      component: lazy(() => import("@/pages/source/State")),
    },
  ],
};

export default source;
