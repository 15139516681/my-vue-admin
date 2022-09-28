<template>
  <el-header class="layout-header">
    <div class="layout-header-box">
      <div class="layout-header-left">
        <img src="@/assets/images/common/logo.jpg" alt="" class="logo" />
      </div>
      <div class="layout-header-right">
        <div class="layout-header-photo">
          <el-avatar
            :size="30"
            :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"
          />
        </div>
        <div class="layout-header-account">
          <el-dropdown>
            <!-- <Edit style="width: 1em; height: 1em; margin-right: 8px" /> -->
            <span class="layout-header-account-content"
              >无敌钢铁侠
              <span>
                <i-ep-ArrowDownBold color="#1966ff" />
              </span>
            </span>

            <template #dropdown>
              <el-dropdown-menu @click="loginHandler">
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </el-header>
</template>
<script lang="ts" setup>
import { ElMessage } from "element-plus";
const loginHandler = () => {
  ElMessage({
    message: "退出登录",
    type: "success",
  });
};
</script>
<style lang="scss" scoped>
.layout-header {
  height: 56px;
  padding: 0 24px;
  margin: 0;
  width: 100%;
  background-color: #ffffff;
  margin-bottom: 16px;
  overflow: hidden;
  &:hover {
    box-shadow: 0px 0 8px 0px #eeeeee;
  }
  .layout-header-box {
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 150px;
      height: 56px;
    }
    .layout-header-right {
      display: flex;
      align-items: center;
    }
    .layout-header-account-content,
    .layout-header-photo {
      font-size: 14px;
      color: #1966ff;
      height: 66px;
      line-height: 66px;
      .el-avatar {
        vertical-align: middle;
      }
    }
    .layout-header-account {
      margin-left: 16px;
      .icon {
        font-size: 14px;
        color: #1966ff;
      }
    }
  }
}
</style>
