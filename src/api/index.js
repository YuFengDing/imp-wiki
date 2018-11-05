import Axios from '../assets/utils/request'
const addArticle = data => { // 增加文章
  return Axios.post('/api/addArticle', {
    data: data
  })
}
const deleteItem = data => {
  return Axios.post('/api/deleteItem', {
    data: data
  })
}
const updateArticle = data => {
  return Axios.post('/api/updateArticle', {
    data: data
  })
}
const queryAll = () => {
  return Axios.get('/queryAll')
}
const queryArticle = () => {
  return Axios.get('/queryArticle')
}
const login = data => {
  return Axios.post('/login', {
    data: data
  })
}
const register = data => {
  return Axios.post('/register', {
    data: data
  })
}
const getTags = () => {
  return Axios.get('/getTags')
}
const addTag = data => {
  return Axios.post('/api/addTag', {
    data: data
  })
}
export {
  addArticle,
  deleteItem,
  updateArticle,
  queryArticle,
  queryAll,
  login,
  register,
  getTags,
  addTag
}
