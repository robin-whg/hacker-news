<script lang="ts" setup>
import { computed, toRefs } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import { useItemStore } from "~/stores/items";
import type { StoryType } from "~/types";

const props = defineProps<{ storyType: StoryType }>();
const { storyType } = toRefs(props);

const itemStore = useItemStore();

await itemStore.fetchStoryIdsByType(storyType.value);

const stories = itemStore.getStoriesByType(storyType.value);

const currentPageIds = computed(() => {
  return itemStore[storyType.value].slice(
    stories.value.length,
    stories.value.length + 15
  );
});

await itemStore.fetchItems(currentPageIds.value);

useInfiniteScroll(
  window,
  async () => {
    await itemStore.fetchItems(currentPageIds.value);
  },
  { distance: 512 }
);
</script>

<template>
  <ul v-if="stories">
    <story-list-item v-for="story in stories" :key="story.id" :story="story" />
  </ul>
</template>
