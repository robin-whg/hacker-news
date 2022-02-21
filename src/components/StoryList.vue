<script lang="ts" setup>
// import { ref } from "vue";
import { useInfiniteScroll } from "@vueuse/core";
import { useItemStore } from "~/stores/items";

const store = useItemStore();

await store.fetchTopStories();

await store.fetchStories();

useInfiniteScroll(
  document,
  async () => {
    // const pointer = store.topStories.indexOf(store.topStoryPointer)
    await store.fetchStories(1, 1);
  },
  { distance: 5 }
);
</script>

<template>
  <div>
    <story-list-item
      v-for="story in store.items"
      :key="story.id"
      :story="story"
    />
  </div>
</template>
