import axios from "axios";

axios.defaults.timeout = 10000;

axios.interceptors.request.use(
  (config: any) => {
    // 添加 loding 相关配置
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response: any) => {
    // loading 相关配置
    return response;
  },
  (error: any) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 403:
          error.message = "拒绝访问";
          break;
        case 502:
          error.message = "服务器出错";
          break;
        default:
          error.message = "连接错误";
      }
    } else {
      error.message = "服务器超时";
    }
    return Promise.resolve(error.response);
  }
);

/*
 *get 方法，
 *@params {string} url 对应 url 地址
 *@params {object} params 请求时携带的参数
 */

export function get(url: string, params?: any) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/* 
 post 方法
 @params {string} url 对应 url 地址
 @params {object} params 请求时携带的参数
*/

export function post(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}

/* 
  del 方法
  @params {string} url 对应 url 地址
  @params {object} params 请求时携带的参数
*/

export function del(url: string, params: any) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, params)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err.data);
      });
  });
}
