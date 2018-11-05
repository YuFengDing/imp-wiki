<template>
  <div class="wrapper">
    <el-form class='login' status-icon :model="loginInfo" :rules='rules' ref="loginForm" label-width="100px">
      <el-form-item label="账户" prop='a'>
        <el-input class="input" v-model="loginInfo.a" placeholder="请输入账户" maxlength="20"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop='p'>
        <el-input type="password" class="input" v-model="loginInfo.p" maxlength="20" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="info" @click="logg">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { ha } from '@/assets/utils/sec'
export default {
  name: 'Login',
  data () {
    var checkA = (rule, value, cb) => {
      if (value === '') {
        return cb(new Error('请输入账户'))
      } else {
        cb()
      }
    }
    var checkP = (rule, value, cb) => {
      if (value === '') {
        return cb(new Error('请输入密码'))
      } else {
        cb()
      }
    }
    return {
      msg: 'Welcome to Your Vue.js App',
      loginInfo: {
        a: '',
        p: ''
      },
      rules: {
        a: [
          {
            validator: checkA,
            trigger: 'blur'
          }
        ],
        p: [
          {
            validator: checkP,
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    logg () {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          let loginResult = await this.$fetch({
            _account: this.loginInfo.a,
            _password: ha(this.loginInfo.p)// 对密码进行哈希
          })
          if (loginResult.code === 0) {
            localStorage.setItem('blog_token', loginResult.token)
            this.$message.info(loginResult.message)
            this.$router.push('/admin')
          } else {
            this.$message.warning(loginResult.message)
          }
        } else {
          return false
        }
      })
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.login {
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .input {
    width: 300px;
  }
  .button {
    width: 300px;
  }
}
</style>
