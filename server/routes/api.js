import koaRouter from 'koa-router'
import {
  addArticle,
  queryArticle,
  deleteItem,
  queryAll,
  updateArticle,
  login,
  register,
  getTags,
  addTag
} from '../controllers/index'
let router = koaRouter()
router.post('/api/addArticle', addArticle)
router.post('/api/addTag', addTag)
router.post('/api/updateArticle', updateArticle)
router.get('/api/deleteItem', deleteItem)
router.get('/queryArticle', queryArticle)
router.get('/queryAll', queryAll)
router.get('/getTags', getTags)
router.post('/login', login)
router.post('/register', register)
export default router
