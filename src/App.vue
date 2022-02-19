<script lang="ts" setup>
import { useDark } from "@vueuse/core";

const isDark = useDark();

provide("isDark", isDark);
</script>

<template>
  <router-view />
</template>
