import bcrypt from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import {
  _addArticle,
  _deleteItem,
  _queryArticle,
  _queryAll,
  _updateArticle,
  _login,
  _register,
  _addTag,
  _getTags
} from '../models/index'
import chinaTime from 'china-time'
const secret = 'jwt-secret'
export const addArticle = async (ctx, next) => {
  let data = ctx.request.body.data
  await _addArticle({ ...data,
    time: chinaTime('YYYY-MM-DD HH:mm:ss')
  })
  ctx.response.body = {
    code: 0,
    message: '保存成功!'
  }
}
export const deleteItem = async (ctx, next) => {
  let data = ctx.request.body.data
  let result = await _deleteItem(data.id).catch((err) => {
    console.log('mysql[err]:', err)
  })
  ctx.response.body = {
    data: result
  }
}
export const updateArticle = async (ctx, next) => {
  let data = ctx.request.body.data
  let result = await _updateArticle(data).catch((err) => {
    console.log('mysql[err]:', err)
  })
  ctx.response.body = {
    data: result
  }
}
export const queryArticle = async (ctx, next) => {
  let data = ctx.request.body.data
  let result = await _queryArticle(data).catch((err) => {
    console.log('mysql[err]:', err)
  })
  ctx.response.body = {
    data: result
  }
}
// 登陆
export const login = async (ctx, next) => {
  let data = ctx.request.body.data
  let sqlData = await _login(data).catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
  let code, token, message
  // bcrypt验证
  if (sqlData && sqlData.password) {
    let vaild = await bcrypt.compareSync(data._password, sqlData.password)
    if (vaild) {
      ctx.status = 200
      code = 0
      // 生成 token 返回给客户端
      token = jsonwebtoken.sign({
        data: sqlData,
        // 设置 token 过期时间
        exp: Math.floor(Date.now() / 1000) + (60 * 60) // 60 seconds * 60 minutes = 1 hour
      }, secret)
      console.log('token: ', token)
      message = '登陆成功!'
    } else {
      code = 402
      message = '密码错误!'
    }
  } else {
    code = 403
    message = '账户不存在!'
  }
  ctx.response.body = {
    code: code,
    data: '',
    token: token,
    message: message
  }
}
export const register = async (ctx, next) => {
  let data = ctx.request.body.data
  // 加盐hash
  data._password = bcrypt.hashSync(data._password, 8)
  let result = await _register(data).catch((err) => {
    console.log('mysql[err]:', err)
  })
  ctx.response.body = {
    code: 0,
    data: result
  }
}
export const queryAll = async (ctx, next) => {
  let data = ctx.request.body.data
  let result = await _queryAll(data).catch((err) => {
    console.log('mysql[err]:', err)
  })
  ctx.response.body = {
    code: 0,
    data: result
  }
}
export const getTags = async (ctx, next) => {
  let result = await _getTags().catch((err) => {
    console.log('mysql[err]:', err)
  })
  ctx.response.body = {
    code: 0,
    data: result
  }
}
export const addTag = async (ctx, next) => {
  let data = ctx.request.body.data
  let result = await _addTag(data).catch((err) => {
    console.log('mysql[err]:', err)
  })
  ctx.response.body = {
    code: 0,
    data: result
  }
}
