<template>
  <el-aside width="200px" class="layout-aside">
    <el-scrollbar>
      <el-menu
        :router="true"
        class="layout-menu"
        :default-active="defaultActive"
        active-text-color="#1966ff"
      >
        <el-sub-menu
          :index="item.path"
          v-for="item in ROUTERS"
          :key="item.name"
        >
          <template #title>
            <svg-icon :name="item.meta.icon" size="16px"></svg-icon>
            <span class="menu-title">{{ item.meta.title }}</span></template
          >
          <el-menu-item-group>
            <template v-for="itemFirst in item.children">
              <template v-if="!itemFirst.children">
                <el-menu-item
                  :index="'/' + item.path + '/' + itemFirst.path"
                  :key="itemFirst.name"
                  :route="{ name: itemFirst.name }"
                >
                  {{ itemFirst.meta.title }}
                </el-menu-item>
              </template>
              <template v-else>
                <el-sub-menu
                  :index="item.path + '/' + itemFirst.path"
                  :key="itemFirst.name"
                >
                  <template #title>{{ itemFirst.meta.title }}</template>
                  <el-menu-item
                    :index="
                      '/' +
                      item.path +
                      '/' +
                      itemFirst.path +
                      '/' +
                      itemSecond.path
                    "
                    :key="itemSecond.path"
                    :route="{ name: itemSecond.name }"
                    v-for="itemSecond in itemFirst.children"
                    >{{ itemSecond.meta.title }}
                  </el-menu-item>
                </el-sub-menu>
              </template>
            </template>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { routers } from "@/router/index";
import { useRoute } from "vue-router";
const ROUTERS = routers;
const USEROUTE = useRoute();
const defaultActive = ref("");
const getRouter = () => {
  defaultActive.value = USEROUTE.path;
};
getRouter();
</script>
<style lang="scss" scoped>
.layout-aside {
  margin-right: 20px;
  background-color: #fff;
  :deep(.el-menu-item-group__title) {
    padding: 0;
  }
  .layout-menu {
    border-right: none;
    .menu-title {
      margin-left: 16px;
    }
    :deep(.is-active) {
      & > .el-sub-menu__title {
        color: #1966ff;
      }
    }
    .el-menu-item.is-active {
      background-color: #ebf3ff;
      border-radius: 4px;
    }
    .el-menu-item {
      height: 40px;
      margin: 10px;
      min-width: 0px;
      padding-left: 40px;
    }
    :deep(.el-sub-menu__title) {
      height: 40px;
    }
  }
}
</style>
