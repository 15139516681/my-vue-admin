<template>
  <svg
    aria-hidden="true"
    class="svg-icon"
    :width="props.size"
    :height="props.size"
  >
    <use :xlink:href="symbolId" :fill="props.color" />
  </svg>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = withDefaults(
  defineProps<{
    prefix?: string;
    name: string;
    color?: string;
    size?: string;
  }>(),
  {
    prefix: "icon",
    color: "#1966ff",
    size: "1em",
  }
);
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
</script>
