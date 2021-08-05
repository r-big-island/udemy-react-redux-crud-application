export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  // typeのキーをもつObjectをActionと呼ぶ
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})