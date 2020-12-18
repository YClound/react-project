import React, { useRef, useEffect } from 'react';

/**
 * 获取更新前的数据
 * @param {*} value
 * @see https://www.zhihu.com/question/346140951
 * @version 2020.05.28 
 */
export const usePrevious = (value) => {
  const previousRef = useRef(value);
  useEffect(() => {
    previousRef.current = value;
  }, [value])

  return previousRef.current;
}