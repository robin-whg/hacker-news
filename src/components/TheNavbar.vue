<script lang="ts" setup>
import { isDark, toggleDark } from "~/composables";
</script>

<template>
  <nav
    class="flex items-center justify-between border-b border-gray-300 p-2 dark:border-gray-600"
  >
    <div>
      <i-heroicons-outline-globe
        class="h-8 w-8 text-primary"
      ></i-heroicons-outline-globe>
    </div>
    <div>
      <base-button btn-type="tertiary" icon @click="toggleDark()">
        <i-heroicons-outline-moon v-if="isDark" class="h-6 w-6" />
        <i-heroicons-outline-sun v-else class="h-6 w-6" />
      </base-button>
    </div>
  </nav>
</template>
