<script lang="ts" setup>
import { defineProps, toRefs, withDefaults } from "vue";
interface Props {
  loading?: boolean;
  btnType?: "primary" | "secondary" | "tertiary";
  icon?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
  btnType: "primary",
  icon: false,
});
const { loading, btnType } = toRefs(props);
</script>

<template>
  <button
    class="flex items-center justify-center rounded-lg border text-sm font-medium transition duration-100 ease-in-out hover:shadow-md disabled:cursor-default disabled:opacity-75 disabled:hover:shadow-none"
    :disabled="loading"
    :class="[
      icon ? 'p-1.5' : 'py-2 px-4',
      {
        'border-transparent bg-primary text-white hover:shadow-primary/50 dark:text-zinc-900':
          btnType === 'primary',
      },
      {
        'border-zinc-300  text-zinc-600 hover:bg-zinc-500/20 hover:shadow-zinc-500/10 dark:border-zinc-600 dark:text-zinc-300':
          btnType === 'secondary',
      },
      {
        'border-transparent text-zinc-600 hover:bg-zinc-500/20  hover:shadow-zinc-500/10 dark:text-zinc-300':
          btnType === 'tertiary',
      },
    ]"
  >
    <span v-if="loading" class="absolute flex items-center justify-center">
      <base-spinner class="h-5 w-5"></base-spinner>
    </span>
    <span
      class="relative flex w-full items-center justify-center gap-2"
      :class="{ invisible: loading }"
    >
      <slot></slot>
    </span>
  </button>
</template>
