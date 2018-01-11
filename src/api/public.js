import axios from 'axios'
class FetchData {
  constructor() {
    this.$http = axios.create({
      timeout: 5000
    })
    this.headerDefaults = {
      'Content-Type': 'application/x-www=form-urlencoded'
    }
  }
  fetchGet(url, params = {}) {
    return new Promise(async(resolve, reject) => {
      try {
        const res = await this.$http.get(url, params)
        resolve(res.data)
      } catch (error) {
        reject(error)
      }
    })
  }
  fetchPost(url, params = {}) {
    return new Promise(async(resolve, reject) => {
      try {
        const res = await this.$http.post(url, params, { ...this.headerDefaults
        })
        resolve(res.data)
      } catch (error) {
        reject(error)
      }
    })
  }
}
export default new FetchData()
