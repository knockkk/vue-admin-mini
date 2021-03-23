<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { currentUser as queryCurrentUser } from '@/api/user'
export default {
  name: 'App',
  async mounted() {
    const gotoLoginPage = () => {
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
    const fetchUserInfo = async() => {
      try {
        const currentUser = await queryCurrentUser()
        if (!currentUser || !currentUser.username) {
          gotoLoginPage()
          return undefined
        }
        return currentUser
      } catch (err) {
        gotoLoginPage()
      }
      return undefined
    }

    // 验证是否已登录
    if (this.$router && this.$router.history.current.path !== 'login') {
      const currentUser = await fetchUserInfo()
      this.$store.commit('user/setState', { fetchUserInfo, currentUser })
    }
    this.$store.commit('user/setState', { fetchUserInfo })
  }
}
</script>
