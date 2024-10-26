// 登录防抖 防抖函数
export const debounce = (fn: Function, time: number): Function => {  
  let timer: number | null = null;  
  return (...args: any[]) => {  
    if (timer !== null) {  
      clearTimeout(timer);  
    }  
    timer = setTimeout(() => {  
      fn(...args);  
      timer = null;  
    }, time);  
  };  
};  