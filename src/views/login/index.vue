<template>
  <div class="login-container">
    <login-form @submit="onSubmit" />
  </div>
</template>

<script>
import { Message } from 'element-ui'
import LoginForm from './LoginForm'
import { login } from '@/api/user'
import { setToken } from '@/utils/storage'

export default {
  name: 'Login',
  components: {
    LoginForm
  },
  data() {
    return {
      redirect: undefined
    }
  },
  computed: {
    fetchUserInfo() {
      return this.$store.state.user.fetchUserInfo
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    async onSubmit(value) {
      const { username, password } = value
      this.loading = true
      try {
        const result = await login({ username, password })

        if (result.error) {
          Message.error(result.error)
          return
        }
        // 存储 token
        setToken(result.token || '')

        Message.success('登录成功！')
        // 获取用户信息
        await this.fetchUserInfo()
        this.$router.push({ path: this.redirect || '/' })
      } catch (err) {
        Message.error('登录失败')
        console.log('error', err)
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  overflow: hidden;
}
</style>
