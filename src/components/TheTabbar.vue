<template>
  <nav
    class="the-tabbar fixed inset-x-0 bottom-0 grid w-full grid-cols-5 gap-2 border-t border-zinc-300 bg-white/75 text-zinc-500 backdrop-blur dark:border-zinc-600 dark:bg-black/75 dark:text-zinc-400 sm:hidden"
  >
    <router-link
      :to="{ name: 'index' }"
      class="flex flex-col items-center justify-center text-xs"
      active-class="text-primary"
    >
      <i-heroicons-outline-home class="h-7 w-7" />
      Top
    </router-link>
    <router-link
      :to="{ name: 'new' }"
      class="flex flex-col items-center justify-center text-xs"
      active-class="text-primary"
    >
      <i-heroicons-outline-fire class="h-7 w-7" />
      New
    </router-link>
    <router-link
      :to="{ name: 'ask' }"
      class="flex flex-col items-center justify-center text-xs"
      active-class="text-primary"
    >
      <i-heroicons-outline-chat class="h-7 w-7" />
      Ask
    </router-link>
    <router-link
      :to="{ name: 'show' }"
      class="flex flex-col items-center justify-center text-xs"
      active-class="text-primary"
    >
      <i-heroicons-outline-eye class="h-7 w-7" />
      Show
    </router-link>
    <router-link
      :to="{ name: 'job' }"
      class="flex flex-col items-center justify-center text-xs"
      active-class="text-primary"
    >
      <i-heroicons-outline-briefcase class="h-7 w-7" />
      Job
    </router-link>
  </nav>
</template>

<style lang="postcss" scoped>
.the-tabbar {
  touch-action: none;
  padding-top: 0.5rem;
  padding-left: calc(0.5rem + env(safe-area-inset-left, 0.5rem));
  padding-right: calc(0.5rem + env(safe-area-inset-left, 0.5rem));
  padding-bottom: calc(0.5rem + env(safe-area-inset-bottom, 0.5rem));
}
</style>
