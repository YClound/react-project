export const setSelectKeys = (pathname, menus) => {
  return {
    type: "SET_SELECTKEYS",
    pathname,
    menus,
  };
};
