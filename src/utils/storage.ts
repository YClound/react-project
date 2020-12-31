import { selectKeyModel } from "@/typings";

interface ItemMap {
  selectKey: selectKeyModel;
  curPath: string;
}

const storage = {
  getSessionItem<T extends keyof ItemMap>(key: T): ItemMap[T] | null {
    const value = sessionStorage.getItem(key);
    return value != null ? JSON.parse(value) : value;
  },
  setSessionItem<T extends keyof ItemMap>(key: T, value: ItemMap[T]) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  removeSessionItem(key: keyof ItemMap) {
    sessionStorage.removeItem(key);
  },
  getItem<T extends keyof ItemMap>(key: T): ItemMap[T] | null {
    const value = localStorage.getItem(key);
    return value != null ? JSON.parse(value) : value;
  },
  setItem<T extends keyof ItemMap>(key: T, value: ItemMap[T]) {
    localStorage.setItem(key, JSON.stringify(value));
  },
  removeItem(key: keyof ItemMap) {
    localStorage.removeItem(key);
  },
};

export default storage;
