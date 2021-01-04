import { lazy } from "react";
import { TagFilled } from "@ant-design/icons";

const hook = {
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
};

export default hook;
