import storage from "@/utils/storage";

const Global = (state, action) => {
  switch (action.type) {
    case "SET_SELECTKEYS":
      const { pathname = "", menus } = action;
      const selectKey: string[] = [];
      const openKey: string[] = [];
      console.log(selectKey, openKey);
      if (pathname && menus) {
        menus.forEach((menu: any) => {
          if (menu.children) {
            menu.children.forEach((child) => {
              if (pathname === child.path) {
                openKey.push(menu.path);
                selectKey.push(child.path);
              }
            });
          } else if (pathname === menu.path) {
            selectKey.push(menu.path);
          }
        });
      }
      storage.setItem("selectKey", { selectKey, openKey });
      return { ...state, openKey, selectKey };
    default:
      const selectKeys = !!storage.getItem("selectKey")
        ? storage.getItem("selectKey")
        : {};
      return { ...state, ...selectKeys };
  }
};

export default Global;
