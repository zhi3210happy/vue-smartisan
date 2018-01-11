import {
  getCartList
} from '../api/goods'
export default {
  getSearchData({
    commit
  }) {
    getCartList().then(res => {
      commit('SEARCH_DATA', {
        data: res
      })
      console.log(res)
    })
  }
}
