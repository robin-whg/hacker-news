<template>
  <div class="safe-pb flex items-center justify-center pt-8">
    <p class="flex items-center gap-1">
      Built with
      <a
        href="https://github.com/HackerNews/API"
        target="blank"
        class="flex items-center gap-1 font-medium text-primary"
        >Hacker News API
        <i-heroicons-solid-external-link class="h-4 w-4" />
      </a>
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.safe-pb {
  padding-bottom: calc(6rem + env(safe-area-inset-bottom, 0.5rem));
}
</style>
