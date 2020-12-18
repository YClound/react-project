import { Get } from './request';

export const getBaseInfo = (path, params, config) => {
  return Get(path, params, config)
}