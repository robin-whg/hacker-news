<script lang="ts" setup>
import { computed, defineProps, toRefs } from "vue";
import { formatDistanceToNow } from "date-fns";
import type { Job, Story } from "~/types";

const props = defineProps<{ story: Story | Job }>();
const { story } = toRefs(props);

const timeFromNow = computed(() => {
  return formatDistanceToNow(new Date(story.value.time * 1000), {
    addSuffix: true,
  });
});
</script>

<template>
  <a
    :href="() => (story.url ? story.url : '#')"
    target="blank"
    class="duration-50 flex flex-col border-b border-gray-300 px-2 py-4 transition ease-in-out hover:bg-gray-400/10 dark:border-gray-600 dark:hover:bg-gray-500/10"
  >
    <p>
      <span>{{ story.type }}</span>
      <span v-if="story.url" class="text-sm text-gray-500 dark:text-gray-400">
        {{ story.url.replace(/(http(s)?:\/\/)|(\/.*){1}/g, "") }}
      </span>
    </p>
    <p :class="{ 'text-red-500': story.type === 'job' }">{{ story.title }}</p>
    <div
      class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
    >
      <div class="flex gap-4">
        <span>{{ timeFromNow }} by {{ story.by }}</span>
      </div>
      <div class="flex gap-4">
        <div class="flex items-center gap-1 p-1">
          <i-heroicons-solid-star class="h-5 w-5" />
          <span class="">{{ story.score }}</span>
        </div>
        <!-- <div class="flex items-center gap-1 p-1">
          <i-heroicons-solid-annotation class="h-5 w-5" />
          <span class="">{{ story.descendants }}</span>
        </div> -->
      </div>
    </div>
  </a>
</template>
