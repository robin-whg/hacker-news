<script lang="ts" setup>
import { formatDistanceToNowStrict } from "date-fns";
import { computed, toRefs } from "vue";
import type { Comment } from "~/types";

const props = defineProps<{ comment: Comment }>();
const { comment } = toRefs(props);

const timeFromNow = computed(() => {
  return formatDistanceToNowStrict(new Date(comment.value.time * 1000), {
    addSuffix: true,
  });
});
</script>

<template>
  <li class="py-4">
    <p class="mb-2 font-medium text-primary">
      {{ comment.by }}
      <span class="text-sm text-zinc-500 dark:text-zinc-400">{{
        timeFromNow
      }}</span>
    </p>
    <p
      v-if="comment.text"
      class="prose prose-zinc mx-auto max-w-2xl break-words dark:prose-invert"
      v-html="comment.text"
    ></p>
  </li>
</template>
