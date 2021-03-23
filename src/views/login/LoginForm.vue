<template>
  <el-form
    ref="loginForm"
    :model="loginForm"
    :rules="loginRules"
    class="login-form"
    auto-complete="on"
  >
    <div class="title-container">
      <h3 class="title">萍乡辅警信息管理系统</h3>
    </div>

    <el-form-item prop="username">
      <span class="svg-container">
        <i class="el-icon-user-solid" />
      </span>
      <el-input
        v-model="loginForm.username"
        name="username"
        placeholder="admin"
        type="text"
      />
    </el-form-item>

    <el-form-item prop="password">
      <span class="svg-container">
        <i class="el-icon-lock" />
      </span>
      <el-input
        ref="password"
        v-model="loginForm.password"
        name="password"
        :type="passwordType"
        placeholder="pingxiangfujing"
      />
      <span class="show-pwd" @click="showPwd">
        <i v-if="passwordType === 'password'" class="el-icon-view" />
        <i v-else class="el-icon-moon" />
      </span>
    </el-form-item>

    <el-button
      :loading="loading"
      type="primary"
      style="width:100%;margin-bottom:30px;"
      @click="handleLogin"
    >登录</el-button>
  </el-form>
</template>

<script>
import { Message } from 'element-ui'
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined
    }
  },
  methods: {
    showPwd() {
      this.passwordType = this.passwordType === 'password' ? '' : 'password'
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$emit('submit', this.loginForm)
        } else {
          Message.error('请输入完整的账号密码')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .el-input input {
    color: $cursor;
  }
}

.el-input {
  display: inline-block;
  height: 47px;
  width: 85%;

  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 47px;
    caret-color: $cursor;

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px $bg inset !important;
      -webkit-text-fill-color: $cursor !important;
    }
  }
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-form {
  position: relative;
  width: 520px;
  max-width: 100%;
  padding: 160px 35px 0;
  margin: 0 auto;
  overflow: hidden;
}

.svg-container {
  padding: 6px 5px 6px 15px;
  color: $dark_gray;
  vertical-align: middle;
  width: 30px;
  display: inline-block;
}

.title-container {
  position: relative;

  .title {
    font-size: 26px;
    color: $light_gray;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
  }
}

.show-pwd {
  position: absolute;
  right: 10px;
  top: 7px;
  font-size: 16px;
  color: $dark_gray;
  cursor: pointer;
  user-select: none;
}
</style>
