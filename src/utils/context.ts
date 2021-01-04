import React from "react";

const homeContext: any = React.createContext({
  value: { name: "guyanan" },
  handleChangeValue: () => {},
});

const consumerContext = React.createContext({
  name: "consumerContext",
  handleChangeValue: (text?: any) => {},
});

export { homeContext, consumerContext };
