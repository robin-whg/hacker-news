<script lang="ts" setup>
import { computed, defineProps, toRefs } from "vue";
import { formatDistanceToNowStrict } from "date-fns";
import type { Job, Story } from "~/types";

const props = defineProps<{ story: Story | Job }>();
const { story } = toRefs(props);

const timeFromNow = computed(() => {
  return formatDistanceToNowStrict(new Date(story.value.time * 1000), {
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
      <span v-if="story.url" class="text-sm text-gray-500 dark:text-gray-400">
        {{ story.url.replace(/(http(s)?:\/\/)|(\/.*){1}/g, "") }}
      </span>
    </p>
    <p>{{ story.title }}</p>
    <div
      class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
    >
      <div class="flex gap-4">
        <span
          >{{ timeFromNow }} by <span>{{ story.by }}</span></span
        >
      </div>
      <div class="flex gap-4">
        <div class="flex items-center gap-1 p-1">
          <i-heroicons-outline-star class="h-4 w-4" />
          <span class="">{{ story.score }}</span>
        </div>
        <div v-if="story.type === 'story'" class="flex items-center gap-1 p-1">
          <i-heroicons-outline-annotation class="h-4 w-4" />
          <span>{{ story.descendants }}</span>
        </div>
      </div>
    </div>
  </a>
</template>
