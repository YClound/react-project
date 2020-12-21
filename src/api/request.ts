import Axios from 'axios';

export interface IConfig  {
  headers?: {
    "Content-Type"?: string,
    [key: string]: any
  }
}

const instance = Axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

const getDeafultConfig = (config?:IConfig) => {
  const { headers = {} } = config || {};
  return {
    ...config,
    headers: {
      "Content-Type": headers['Content-Type'] || 'application/x-www-form-urlencoded',
    }
  }
}

export const Get = (path:string, params?: object, config?: IConfig) => {
  return instance.get(path, {
    params,
    ...getDeafultConfig(config),
  }).then((response) => {
    const { data: respData } = response || {};
    const { code = -1, data } = respData || {};
    if (code === 0) {
      return data;
    } else {
      return Promise.reject(respData);
    }
  })
}

export const Post = (path:string, params?:object, config?:IConfig) => {
  return instance.post(path, params, config).then(response => {
    console.log(response, 'post');
    const { data: respData } = response || {};
    const { code = -1, data } = respData || {};
    if (code === 0) {
      return data;
    } else {
      return Promise.reject(respData);
    }
  })
}