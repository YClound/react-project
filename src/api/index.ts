import { Get } from './request';

export const getBaseInfo = (path:string, params?: object, config?:object) => {
  return Get(path, params, config)
}