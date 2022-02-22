<script lang="ts" setup>
import { onErrorCaptured, ref } from "vue";
const error = ref(false);

onErrorCaptured((e) => {
  console.error(e);
  error.value = true;
  return false;
});
</script>

<template>
  <template v-if="error">
    <slot name="error">
      <div class="flex h-full w-full items-center justify-center py-16">
        <p>Error :(</p>
      </div>
    </slot>
  </template>
  <suspense v-else>
    <template #default>
      <slot></slot>
    </template>
    <template #fallback>
      <slot name="fallback">
        <div class="flex h-full w-full items-center justify-center py-16">
          <base-spinner class="h-8 w-8 text-primary" />
        </div>
      </slot>
    </template>
  </suspense>
</template>
