import storage from "@/utils/storage";

const Global = (state, action) => {
  switch (action.type) {
    case "SET_SELECTKEYS":
      const { keyPath = [] } = action.selectKeys;
      const selectKey = keyPath[0] || "/";
      const openKey = keyPath[1] || "";
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
