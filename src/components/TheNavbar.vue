<script lang="ts" setup>
import { isDark, toggleDark } from "~/composables";

const links: [string, string][] = [
  ["index", "Top"],
  ["new", "New"],
  ["ask", "Ask"],
  ["show", "Show"],
  ["job", "Job"],
];
</script>

<template>
  <nav
    class="sticky top-0 flex w-full items-center justify-between border-b border-gray-300 bg-neutral-50/90 p-2 backdrop-blur dark:border-gray-600 dark:bg-neutral-900/90"
  >
    <div class="flex items-center gap-4">
      <img
        src="/src/assets/logo.svg"
        alt="logo"
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
    <div class="flex gap-2">
      <a href="https://github.com/robin-whg/hacker-news" target="_blank">
        <base-button btn-type="tertiary" icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-github h-6 w-6"
          >
            <path
              d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
            ></path>
          </svg>
        </base-button>
      </a>
      <base-button btn-type="tertiary" icon @click="toggleDark()">
        <i-heroicons-outline-moon v-if="isDark" class="h-6 w-6" />
        <i-heroicons-outline-sun v-else class="h-6 w-6" />
      </base-button>
    </div>
  </nav>
</template>
