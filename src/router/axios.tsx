import { lazy } from "react";
import { PushpinFilled } from "@ant-design/icons";

const axios = {
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
};

export default axios;
