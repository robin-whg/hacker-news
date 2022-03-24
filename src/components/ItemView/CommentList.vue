<script lang="ts" setup>
import { toRefs } from "vue";
import { useItemStore } from "~/stores";

const props = defineProps<{ ids: number[] }>();
const { ids } = toRefs(props);

const itemStore = useItemStore();

await itemStore.fetchItems(ids.value);

const comments = await itemStore.getComments(ids.value);
</script>

<template>
  <ul class="divide-y divide-zinc-300 dark:divide-zinc-600">
    <item-view-comment-list-item
      v-for="comment in comments"
      :key="comment.id"
      :comment="comment"
    />
  </ul>
</template>
