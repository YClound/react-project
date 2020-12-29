export const getSelectKeys = () => {
  return {
    type: 'GET_SELECTKEYS',
  }
}

export const setSelectKeys = (selectKeys) => {
  return {
    type: 'SET_SELECTKEYS',
    selectKeys,
  }
}