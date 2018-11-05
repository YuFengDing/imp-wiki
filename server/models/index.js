import {
  blogs,
  comments,
  users,
  visitors,
  tags
} from '../config/db'
import chinaTime from 'china-time'

export const _addArticle = data => {
  // Table created
  data = { ...data,
    time: chinaTime('YYYY-MM-DD HH:mm:ss')
  }
  return blogs.create({
    title: data.title,
    content: data.content || '',
    tags: data.tags,
    time: data.time,
    author: data.author || 'imp'
  }).catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _deleteItem = data => {
  // Table created
  return blogs.destory({
    where: {
      id: data
    }
  }).catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _updateArticle = data => {
  // Table created
  return blogs.update({
    title: data.title,
    content: data.content,
    tags: data.tags,
    time: data.time
  }, {
    where: {
      id: data.id
    }
  }).catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _queryArticle = data => {
  // Table created
  return blogs.findOne({
    where: {
      id: data.id
    }
  }).catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _queryAll = () => {
  return blogs.findAll().catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _login = data => {
  return users.findOne({
    where: {
      author: data._account
    }
  }).catch(err => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _register = data => {
  return users.create({
    password: data._password,
    author: data._account || 'imp'
  }).catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _addTag = data => {
  return tags.create({
    tag: data.tag,
    author: data.author || 'imp'
  }).catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
export const _getTags = () => {
  return tags.findAll().catch((err) => {
    console.log('mysql[err]:', err)
    return err
  })
}
