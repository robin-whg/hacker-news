<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useItemStore } from "../../stores";

const route = useRoute();
const id = computed(() => {
  return parseInt(
    Array.isArray(route.params.id) ? route.params.id[0] : route.params.id
  );
});

const itemStore = useItemStore();

await itemStore.fetchItem(id.value);
const item = itemStore.items.find((item) => {
  return item.id === id.value;
});
</script>

<template>
  <base-container class="py-4 px-2">
    <template v-if="!item || item.dead || item.deleted">
      <not-found />
    </template>
    <template v-else>
      <item-view :item="item" />
    </template>
  </base-container>
</template>
