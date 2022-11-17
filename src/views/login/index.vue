<template>
  <div class="login">
    <div class="login-box">
      <div class="login-title">管理平台-登录</div>
      <div class="form-box">
        <el-form :model="loginForm" ref="loginRef">
          <el-form-item
            prop="user"
            :rules="[{ required: true, message: '请输入账号' }]"
          >
            <el-input
              class="input-width"
              placeholder="请输入账号"
              v-model="loginForm.user"
            ></el-input>
          </el-form-item>
          <el-form-item
            prop="password"
            :rules="[{ required: true, message: '请输入密码' }]"
          >
            <el-input
              placeholder="请输入密码"
              type="password"
              class="input-width"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="submit"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
const loginForm = reactive({
  user: "",
  password: "",
});
const loginRef = ref(null);
const userRouter = useRouter();
const submit = () => {
  (loginRef.value as any).validate((valid: boolean) => {
    if (valid) {
      localStorage.setItem("token", "token");
      userRouter.replace({ name: "index" });
    }
  });
};
const clearToken = () => {
  localStorage.clear();
};
clearToken();
</script>
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: #1966ff;
  background-image: url("@/assets/images/common/login.jpeg");

  .login-box {
    position: fixed;
    right: 200px;
    bottom: 200px;
    background-color: #fff;
    width: 460px;
    height: 430px;
    padding-left: 60px;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .login-title {
    padding: 62px 0 54px 0;
    font-size: 20px;
    font-weight: 500;
    color: #1890ff;
  }
  .input-width {
    width: 340px;
  }
  .login-btn {
    width: 340px;
    margin-top: 50px;
  }
}
</style>
