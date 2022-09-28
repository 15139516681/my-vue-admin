<template>
  <el-container class="layout">
    <layoutHeader></layoutHeader>
    <el-container class="layout-content">
      <layoutAside></layoutAside>
      <el-main class="frame-view">
        <el-scrollbar>
          <router-view></router-view>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import layoutAside from "./layout-aside.vue";
import layoutHeader from "./layout-header.vue";
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  background-color: #f7f8fc;
  .layout-content {
    height: calc(100vh - 72px);
  }
  .frame-view {
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
