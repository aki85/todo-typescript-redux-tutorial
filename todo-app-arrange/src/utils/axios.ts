import axiosBase from 'axios'

export default axiosBase.create({
  baseURL: 'https://todo-api-akic.herokuapp.com',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json'
})