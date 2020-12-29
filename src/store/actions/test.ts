export const addCount = (count?:number) => {
  return {
    type: 'ADD_COUNT',
    count
  }
}

export const jianCount = (count?:number) => {
  return {
    type: 'JIAN_COUNT',
    count
  }
}