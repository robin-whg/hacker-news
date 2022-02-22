<template>
  <div class="flex h-full w-full flex-col items-center justify-center gap-2">
    <router-link :to="{ name: 'index' }" class="mb-4">
      <i-heroicons-outline-newspaper class="h-12 w-12 text-primary" />
    </router-link>
    <p class="font-medium uppercase text-primary">404 Error</p>
    <h1 class="text-4xl text-neutral-700 dark:text-neutral-200">Not Found.</h1>
    <router-link
      :to="{ name: 'index' }"
      class="flex items-center gap-1 font-medium text-primary"
    >
      Go back home
      <i-heroicons-solid-arrow-right class="h-4 w-4" />
    </router-link>
  </div>
</template>
