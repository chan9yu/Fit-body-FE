const getUserLocalStorage = () => JSON.parse(localStorage.getItem('user'))

export default () => ({
  user: getUserLocalStorage() !== null ? getUserLocalStorage() : {},
  token: null,
  cartId: [],
  cartItem: []
})
