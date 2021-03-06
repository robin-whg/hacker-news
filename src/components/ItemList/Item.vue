<script lang="ts" setup>
import { computed, defineProps, toRefs } from "vue";
import { formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "vue-router";
import type { Job, Story } from "~/types";

const props = defineProps<{ story: Story | Job }>();
const { story } = toRefs(props);

const timeFromNow = computed(() => {
  return formatDistanceToNowStrict(new Date(story.value.time * 1000), {
    addSuffix: true,
  });
});

const router = useRouter();
const route = () => {
  story.value.url
    ? window.open(story.value.url, "_blank")
    : router.push({ name: "item-id", params: { id: story.value.id } });
};

const shortUrl = (url: string) => url.replace(/(http(s)?:\/\/)|(\/.*){1}/g, "");
</script>

<template>
  <li
    class="duration-50 flex cursor-pointer flex-col border-b border-zinc-300 py-4 transition ease-in-out dark:border-zinc-600"
    @click="route()"
  >
    <p v-if="story.url" class="text-sm text-zinc-500 dark:text-zinc-400">
      {{ shortUrl(story.url) }}
    </p>
    <p>{{ story.title }}</p>
    <div
      class="flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400"
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
  </li>
</template>
