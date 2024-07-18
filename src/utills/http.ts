import { useUserStore } from "@/stores/modules/user";
import { __BASE_URL__, __API_TIMEOUT__ } from "@/constant";
import { Data } from "../types/baseType";

//添加拦截器
const httpInterceptor = {
  //拦截前触发
  invoke(option: UniApp.RequestOptions) {
    if (!option.url.startsWith("http")) {
      option.url = __BASE_URL__ + option.url;
    }
    option.timeout = __API_TIMEOUT__;
    const memberStore = useUserStore();
    // 取 token ，然后附在请求头上
  },
};
uni.addInterceptor("request", httpInterceptor);
uni.addInterceptor("upLoadFile", httpInterceptor);

//封装网络请求
export const http = <T>(Option: UniApp.RequestOptions) => {
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...Option,
      //请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 200) {
          resolve(res.data as Data<T>);
        } else {
          uni.showToast({
            icon: "none",
            title: (res.data as Data<T>).msg || "请求错误",
          });
          reject(res);
        }
      },
      //响应失败
      fail(err) {
        reject(err);
        uni.showToast({
          icon: "none",
          title: "网络错误，换个网络试试~",
        });
      },
    });
  });
};
