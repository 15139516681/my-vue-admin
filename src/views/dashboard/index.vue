<template>
  <div class="dashboard">
    <div v-for="item in [1, 2, 3, 4, 5, 6]" :key="item">
      {{ item }}
    </div>
  </div>
</template>
<script lang="ts" setup></script>
