import Sequelize from 'sequelize'

let mysql = new Sequelize('impBlog', 'root', '', {
  'dialect': 'mysql',
  'host': 'localhost',
  'port': 3306,
  'define': {
    'underscored': true
  }
})
export const mysqlTest = () => {
  return mysql
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
}
export const blogs = mysql.define(
  'blogs', {
    title: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    tags: {
      type: Sequelize.STRING
    },
    time: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    }
  }
)
export const users = mysql.define(
  'users', {
    author: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  }
)
export const comments = mysql.define(
  'comments', {
    user_name: {
      type: Sequelize.STRING
    },
    content: {
      type: Sequelize.STRING
    },
    target: {
      type: Sequelize.STRING
    },
    blog: {
      type: Sequelize.INTEGER
    }
  }
)
export const visitors = mysql.define(
  'visitors', {
    user_name: {
      type: Sequelize.STRING
    },
    mail: {
      type: Sequelize.STRING
    }
  }
)
export const tags = mysql.define(
  'tags', {
    tag: {
      type: Sequelize.STRING
    },
    author: {
      type: Sequelize.STRING
    }
  }
)
