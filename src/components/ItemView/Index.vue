<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { formatDistanceToNowStrict } from "date-fns";
import type { Comment, Job, Poll, Pollopt, Story } from "~/types";

const props = defineProps<{ item: Story | Job | Comment | Poll | Pollopt }>();
const { item } = toRefs(props);

const timeFromNow = computed(() => {
  return formatDistanceToNowStrict(new Date(item.value.time * 1000), {
    addSuffix: true,
  });
});
</script>

<template>
  <div v-if="item.type === 'story'">
    <h1 class="mb-2 text-lg">{{ item.title }}</h1>
    <a
      v-if="item.url"
      :href="item.url"
      target="_blank"
      class="font-medium text-primary decoration-primary transition duration-100 ease-in-out hover:underline"
      >{{ item.url }}</a
    >
    <p v-if="item.text" v-html="item.text"></p>
    <div
      class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
    >
      <div class="flex gap-4">
        <span
          >{{ timeFromNow }} by <span>{{ item.by }}</span></span
        >
      </div>
      <div class="flex gap-4">
        <div class="flex items-center gap-1 p-1">
          <i-heroicons-outline-star class="h-4 w-4" />
          <span class="">{{ item.score }}</span>
        </div>
        <div class="flex items-center gap-1 p-1">
          <i-heroicons-outline-annotation class="h-4 w-4" />
          <span>{{ item.descendants }}</span>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="item.type === 'job'">
    <h1 class="mb-2 text-lg">{{ item.title }}</h1>
    <a
      v-if="item.url"
      :href="item.url"
      target="_blank"
      class="font-medium text-primary decoration-primary transition duration-100 ease-in-out hover:underline"
      >{{ item.url }}</a
    >
    <p
      v-if="item.text"
      class="prose prose-gray mx-auto max-w-3xl break-words dark:prose-invert"
      v-html="item.text"
    ></p>
    <div
      class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400"
    >
      <div class="flex gap-4">
        <span
          >{{ timeFromNow }} by <span>{{ item.by }}</span></span
        >
      </div>
      <div class="flex gap-4">
        <div class="flex items-center gap-1 p-1">
          <i-heroicons-outline-star class="h-4 w-4" />
          <span>{{ item.score }}</span>
        </div>
      </div>
    </div>
  </div>

  <div v-else-if="item.type === 'comment'">comment</div>
  <div v-else-if="item.type === 'poll'">poll</div>
  <div v-else-if="item.type === 'pollopt'">pollopt</div>
</template>
