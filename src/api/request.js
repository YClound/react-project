import Axios from 'axios';

const instance = Axios.create({
  timeout: 10000,
  baseURL: 'http://localhost:3000',
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  }
})

const getDeafultConfig = (config) => {
  const { headers = {} } = config || {};
  return {
    ...config,
    headers: {
      "Content-Type": headers['Content-Type'] || 'application/x-www-form-urlencoded',
    }
  }
}

export const Get = (path, params, config) => {
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

export const Post = (path, params, config) => {
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