<script lang="ts" setup>
import { isDark, toggleDark } from "~/composables";

const links: [string, string][] = [
  ["index", "Top"],
  ["new", "New"],
  ["show", "Show"],
  ["ask", "Ask"],
  ["jobs", "Jobs"],
];
</script>

<template>
  <nav
    class="sticky top-0 flex w-full items-center justify-between border-b border-gray-300 bg-neutral-50/90 p-2 backdrop-blur dark:border-gray-600 dark:bg-neutral-900/90"
  >
    <div class="flex items-center gap-4">
      <i-heroicons-outline-newspaper
        class="h-[2.375rem] w-[2.375rem] flex-none text-primary"
      />
      <div
        class="hidden items-center gap-4 text-gray-600 dark:text-gray-300 sm:flex"
      >
        <router-link
          v-for="link in links"
          :key="link[0]"
          :to="{ name: link[0] }"
          class="rounded-lg text-lg font-medium transition duration-100 ease-in-out hover:text-primary"
          active-class="text-primary"
          >{{ link[1] }}</router-link
        >
      </div>
    </div>
    <div>
      <base-button btn-type="tertiary" icon @click="toggleDark()">
        <i-heroicons-outline-moon v-if="isDark" class="h-6 w-6" />
        <i-heroicons-outline-sun v-else class="h-6 w-6" />
      </base-button>
    </div>
  </nav>
</template>
